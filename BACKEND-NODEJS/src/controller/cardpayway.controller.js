const stripe = require("stripe");
const dotenv = require("dotenv");
dotenv.config();

const appUrl = "http://localhost:3000";
const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);

const createCheckoutSession = async (req, res) => {
  try {
    const { price } = req.body;
    const Data = {
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Visa PayWay Demo",
              description: "Testing payment by Stripe",
            },
            unit_amount: price,
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/api/v1/cardpayway/Success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
    };

    const session = await stripeInstance.checkout.sessions.create(Data);

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
const getSessionDetails = async (sessionId) => {
  const session = await stripeInstance.checkout.sessions.retrieve(sessionId, {
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
const paymentSuccess = async (request, response) => {
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

module.exports = { createCheckoutSession, paymentSuccess };
