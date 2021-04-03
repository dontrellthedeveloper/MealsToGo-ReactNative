import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51Ic2k0AEBlHURtd4wyfTGovhgVLJcmOJpyeaDWlDHtHHs6jpLt6h5EFNTD7fS9fZQiT9olP3m8ERMjKmaLHQPJ9V009UJn5WP5"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });
