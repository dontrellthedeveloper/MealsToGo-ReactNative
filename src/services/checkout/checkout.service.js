import createStripe from "stripe-client";
import { host } from "../../utils/env";

const stripe = createStripe(
  "pk_test_51Ic2k0AEBlHURtd4wyfTGovhgVLJcmOJpyeaDWlDHtHHs6jpLt6h5EFNTD7fS9fZQiT9olP3m8ERMjKmaLHQPJ9V009UJn5WP5"
);

export const cardTokenRequest = (card) => stripe.createToken({ card });

export const payRequest = (token, amount, name) => {
  return fetch(`${host}/pay`, {
    body: JSON.stringify({
      token,
      name,
      amount,
    }),
    method: "POST",
  }).then((res) => {
    if (res.status > 200) {
      return Promise.reject("something went wrong processing your payment");
    }
    return res.json();
  });
};
