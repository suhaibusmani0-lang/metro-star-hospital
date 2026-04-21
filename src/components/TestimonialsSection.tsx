import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    treatment: "Dental Implants",
    rating: 5,
    text: "Dr. Bushra is hands down the Trusted dental surgeon in Okhla. My implant procedure was completely painless and the results look so natural. Highly recommend Metro Star Hospital!",
  },
  {
    name: "Mohammed Faraz",
    treatment: "Painless RCT",
    rating: 5,
    text: "I was terrified of root canals, but Dr. Bushra made it absolutely pain-free in a single sitting. Her gentle approach and modern equipment made all the difference.",
  },
  {
    name: "Sana Ahmed",
    treatment: "Hydra Facial & PRP",
    rating: 5,
    text: "The Hydra Facial gave me glowing skin instantly, and the PRP treatment has worked wonders for my hair. Truly a one-stop destination for dental and aesthetic care.",
  },
  {
    name: "Imran Siddiqui",
    treatment: "Braces",
    rating: 5,
    text: "Got my clear aligners from Dr. Bushra and couldn't be happier with the results. Professional staff, hygienic clinic, and very reasonable pricing.",
  },
  {
    name: "Fatima Rizvi",
    treatment: "Cosmetic Treatment",
    rating: 5,
    text: "I had Botox and fillers done here — completely natural results. Dr. Bushra really listens and recommends only what you actually need. Trustworthy and skilled.",
  },
  {
    name: "Arjun Mehta",
    treatment: "Smile Makeover",
    rating: 5,
    text: "From consultation to final result, the experience was world-class. My smile makeover transformed my confidence completely. Thank you, Dr. Bushra!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">What Our Patients Say</h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-5 w-5 fill-hospital-gold text-hospital-gold" />
            ))}
            <span className="ml-2 text-sm font-semibold text-foreground">4.8+ on Google · 500+ Reviews</span>
          </div>
          <p className="mt-3 text-muted-foreground">Real stories from real patients at Metro Star Hospital.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-lg transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-hospital-gold text-hospital-gold" />
                ))}
              </div>
              <p className="text-sm text-card-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div className="border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground font-heading">{t.name}</p>
                <p className="text-xs text-primary mt-0.5">{t.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
