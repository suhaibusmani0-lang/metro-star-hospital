import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Smile, Sparkles, ShieldCheck, Syringe, Sun, Heart } from "lucide-react";

const dentalServices = [
  { icon: Smile, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with advanced implant technology." },
  { icon: ShieldCheck, title: "Painless RCT", desc: "Modern root canal treatment with zero pain and single-sitting options." },
  { icon: Heart, title: "Braces & Aligners", desc: "Orthodontic solutions for a perfect, confident smile at any age." },
];

const cosmeticServices = [
  { icon: Sun, title: "Hydra Facial", desc: "Deep skin rejuvenation for a radiant, hydrated, youthful glow." },
  { icon: Syringe, title: "PRP Treatment", desc: "Platelet-rich plasma therapy for hair restoration and skin renewal." },
  { icon: Sparkles, title: "Botox & Fillers", desc: "Non-surgical cosmetic enhancements for a naturally refreshed look." },
];

function ServiceCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-base font-bold text-card-foreground font-heading">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

export function ServicesOverview() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">Our Specializations</h2>
          <p className="mt-3 text-muted-foreground">Comprehensive dental and cosmetic care under one roof.</p>
        </div>

        {/* Dental */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Dental Excellence</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {dentalServices.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>

        {/* Cosmetic */}
        <div className="mb-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">Cosmetic & Aesthetic Care</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cosmeticServices.map((s) => <ServiceCard key={s.title} {...s} />)}
          </div>
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="outline" size="lg">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
