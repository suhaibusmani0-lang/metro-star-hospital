import { createFileRoute } from "@tanstack/react-router";
import { Smile, ShieldCheck, Heart, Syringe, Sun, Sparkles, Scissors, Eye, Stethoscope } from "lucide-react";
import { CallbackForm } from "@/components/CallbackForm";

const dental = [
  { icon: Smile, title: "Dental Implants", desc: "Replace missing teeth with permanent, natural-looking titanium implants. Single tooth, multiple teeth, and full-mouth rehabilitation available." },
  { icon: ShieldCheck, title: "Painless Root Canal (RCT)", desc: "Advanced rotary endodontics for completely painless root canal treatment. Single-sitting RCT available for your convenience." },
  { icon: Heart, title: "Braces & Aligners", desc: "Metal braces, ceramic braces, and clear aligners (Invisalign) for teeth straightening at any age." },
  { icon: Scissors, title: "Gum Surgery (Periodontics)", desc: "Specialized gum treatments including flap surgery, bone grafting, and gum contouring by an expert Periodontist and Implantologist." },
  { icon: Stethoscope, title: "General Dentistry", desc: "Routine checkups, scaling, polishing, fillings, extractions, and preventive dental care." },
  { icon: Eye, title: "Cosmetic Dentistry", desc: "Veneers, teeth whitening, smile design, and complete smile makeover treatments." },
];

const cosmetic = [
  { icon: Sun, title: "Hydra Facial", desc: "Multi-step facial treatment combining cleansing, exfoliation, extraction, hydration, and antioxidant protection for radiant skin." },
  { icon: Syringe, title: "PRP Therapy", desc: "Platelet-rich plasma treatment for hair loss, skin rejuvenation, and anti-aging. Natural, safe, and effective ." },
  { icon: Sparkles, title: "Botox & Dermal Fillers", desc: "Non-surgical cosmetic enhancements for wrinkle reduction, lip augmentation, and facial contouring." },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Dental & Cosmetic Services – Metro Star Hospital Okhla" },
      { name: "description", content: "Complete dental and cosmetic services: dental implants, painless RCT, Hydra Facial, PRP, Botox by Dr. Bushra Shams at Metro Star Hospital, Jamia Nagar." },
      { property: "og:title", content: "Services – Metro Star Hospital" },
      { property: "og:description", content: "Dental implants, painless RCT, braces, Hydra Facial, PRP, Botox and more." },
    ],
  }),
  component: ServicesPage,
});

function ServiceCard({ icon: Icon, title, desc }: { icon: React.ElementType; title: string; desc: string }) {
  return (
    <div className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-bold text-card-foreground font-heading">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading">Our Services</h1>
          <p className="mt-4 text-muted-foreground">Comprehensive dental and aesthetic care by an MDS specialist.</p>
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Dental Excellence</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {dental.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>

        <h2 className="text-sm font-semibold uppercase tracking-wider text-primary mb-5">Cosmetic & Aesthetic Care</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {cosmetic.map((s) => <ServiceCard key={s.title} {...s} />)}
        </div>

        <div className="max-w-md mx-auto">
          <CallbackForm />
        </div>
      </div>
    </div>
  );
}
