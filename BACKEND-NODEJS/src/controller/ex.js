const stripe = require("stripe");
require("dotenv").config();

const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
const appUrl = "http://localhost:3000";

const createCheckoutSession = async (request, response) => {
  try {
    var Data = {
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Visa PayWay Demo Payment",
              description: "Test card payment processed securely by Stripe",
            },
            unit_amount: 2000, // Amount in cents (e.g., $10.00)
          },
          quantity: 1,
        },
      ],
      success_url: `${appUrl}/api/v1/cardpayway/Success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${appUrl}/cancel`,
    };

    const session = await stripeInstance.checkout.sessions.create(Data);

    response.json({
      message: "Checkout session created successfully!",
      url: session.url,
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
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

// Stripe redirects here after payment. Confirms the real status with
// Stripe and responds with the session data.
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
