import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { TrustSection } from "@/components/TrustSection";
import { GalleryPreview } from "@/components/GalleryPreview";
import { InstagramCTA } from "@/components/InstagramCTA";
import { CTASection } from "@/components/CTASection";
import { TestimonialsSection } from "@/components/TestimonialsSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Metro Star Hospital – Trusted dental surgon in Okhla | Dr. Bushra Shams" },
      { name: "description", content: "Trusted dental surgon in Okhla Vihar. Dr. Bushra Shams (BDS, MDS) – Periodontist and Implantologist offering painless RCT, dental implants, Hydra Facial, PRP, Botox at Metro Star Hospital, Jamia Nagar, New Delhi 110025." },
      { property: "og:title", content: "Metro Star Hospital – Dental & Cosmetic Care" },
      { property: "og:description", content: "Advanced dental implants, painless RCT, cosmetic treatment, Hydra Facial & PRP by Periodontist and Implantologist Dr. Bushra Shams in Okhla Vihar." },
      { property: "og:type", content: "website" },
      { name: "keywords", content: "Trusted dental surgon in Okhla, Dental Implants Jamia Nagar, MDS Periodontist South Delhi, Painless RCT Okhla Vihar, Hydra Facial Jamia Nagar, PRP Treatment Okhla, Botox New Delhi" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesOverview />
      <GalleryPreview />
      <TestimonialsSection />
      <InstagramCTA />
      <CTASection />
    </>
  );
}
