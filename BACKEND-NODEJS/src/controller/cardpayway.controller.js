const Stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();

const appUrl = "http://localhost:3000";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// Controller: builds a Checkout Session and sends back the URL
const createCheckoutSession = async (req, res) => {
  try {
    const { price, quantity } = req.body;
    const total = price * quantity; // computed, use it in unit_amount instead of the hardcoded 2000 below if you want dynamic pricing

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Visa PayWay Demo",
              description: "Testing payment by Stripe",
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/api/v1/cardpayway/Success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
    });

    res.json({
      message: "checkout session created successfully",
      url: session.url,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error:
        "Unable to create checkout session. Check your Stripe keys and server logs.",
    });
  }
};

// Fetches session details from Stripe by id — NOT an Express handler,
// takes a plain sessionId string and returns a plain object
const getSessionDetails = async (sessionId) => {
  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["payment_intent.payment_method"],
  });
  return {
    id: session.id,
    amount_total: session.amount_total,
    currency: session.currency,
    payment_status: session.payment_status,
    customer_email: session.customer_details?.email || null,
    card_brand: session.payment_intent?.payment_method?.card?.brand || null,
    last4: session.payment_intent?.payment_method?.card?.last4 || null,
  };
};

// Controller: reads ?session_id= from the redirect and returns payment details
const PaymentSuccess = async (request, response) => {
  const sessionId = request.query.session_id;
  if (!sessionId) {
    return response.status(400).json({ error: "Missing session_id." });
  }
  try {
    const data = await getSessionDetails(sessionId);
    response.json(data);
  } catch (error) {
    console.error(error);
    response.status(404).json({ error: "Checkout session not found." });
  }
};

module.exports = { createCheckoutSession, PaymentSuccess };
