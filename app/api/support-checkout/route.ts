import Stripe from "stripe";

type SupportTier = "supporter" | "founder" | "early-access";

const tierPriceEnv: Record<SupportTier, string> = {
  supporter: "STRIPE_GHOSTNET_SUPPORTER_PRICE_ID",
  founder: "STRIPE_GHOSTNET_FOUNDER_PRICE_ID",
  "early-access": "STRIPE_GHOSTNET_EARLY_ACCESS_PRICE_ID",
};

function isSupportTier(value: string): value is SupportTier {
  return value in tierPriceEnv;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const tier = String(formData.get("tier") ?? "");

    if (!isSupportTier(tier)) {
      return Response.json(
        { error: "Choose a valid GhostNet 3020 support tier." },
        { status: 400 },
      );
    }

    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    const priceId = process.env[tierPriceEnv[tier]];

    if (!stripeSecretKey || !priceId) {
      return Response.json(
        { error: "GhostNet 3020 support checkout is not configured yet." },
        { status: 500 },
      );
    }

    const stripe = new Stripe(stripeSecretKey);
    const origin = new URL(req.url).origin;
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/?support=success#support`,
      cancel_url: `${origin}/?support=cancelled#support`,
      allow_promotion_codes: true,
      metadata: {
        source: "chenko-studios-ghostnet-support",
        tier,
      },
    });

    if (!session.url) {
      return Response.json(
        { error: "Unable to start GhostNet 3020 support checkout." },
        { status: 500 },
      );
    }

    return Response.redirect(session.url, 303);
  } catch (error) {
    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "There was an error starting support checkout.",
      },
      { status: 500 },
    );
  }
}
