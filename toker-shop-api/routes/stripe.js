const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", async (request, response) => {
  stripe.charges.create(
    {
      source: request.body.tokenId,
      amount: request.body.amount,
      currency: "usd",
    },
    (stripeError, stripeResponse) => {
      if (stripeError) {
        response.status(500).json(stripeError);
      } else {
        response.status(200).json(stripeResponse);
      }
    },
  );
});

module.exports = router;
