import { CallbackForm } from "@/components/CallbackForm";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">
              Ready for a Healthier, More Confident Smile?
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed max-w-lg">
              Schedule your consultation with Dr. Bushra Shams today. Whether it's a routine check-up or a complete smile makeover, we're here to help.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>✓ Painless, patient-first approach</p>
              <p>✓ Advanced technology & sterilized equipment</p>
              <p>✓ Affordable pricing with EMI options</p>
              <p>✓ Convenient Okhla Vihar location</p>
            </div>
          </div>
          <CallbackForm />
        </div>
      </div>
    </section>
  );
}
