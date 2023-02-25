import { Stripe } from "stripe"
import {
  STRIPE_ACCOUNT_ID,
  STRIPE_SECRET_KEY,
} from "~/utils/constants"

export default class StripeService {
  private readonly client: Stripe

  constructor() {
    this.client = new Stripe(STRIPE_SECRET_KEY, {
      apiVersion: "2022-08-01",
      stripeAccount: STRIPE_ACCOUNT_ID,
    })
  }
}
