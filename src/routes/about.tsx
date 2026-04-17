import { createFileRoute } from "@tanstack/react-router";
import { Award, GraduationCap, Heart } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Bushra Shams – Periodontist and Implantologist, Metro Star Hospital" },
      { name: "description", content: "Dr. Bushra Shams (BDS, MDS) – Periodontist and Implantologist in Okhla with 10+ years experience. Specializing in implants, gum surgery, and cosmetic treatment." },
      { property: "og:title", content: "Dr. Bushra Shams – About" },
      { property: "og:description", content: "Periodontist and Implantologist with 10+ years of experience in dental implants, gum surgery, and cosmetic treatment." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] max-w-md mx-auto lg:mx-0">
            <img
              src="/images/dr-bushra.jpg"
              alt="Dr. Bushra Shams – Periodontist and Implantologist"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading">Dr. Bushra Shams</h1>
            <p className="text-lg text-primary font-semibold mt-2 font-heading">BDS, MDS – Periodontist and Implantologist</p>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Bushra Shams is a highly qualified Periodontist and Implantologist, and the lead dental surgeon at Metro Star Hospital, Okhla Vihar. With over a decade of clinical experience, she is recognized as one of the best dentists in Okhla and South Delhi.
              </p>
              <p>
                She specializes in dental implants, advanced periodontal surgery, painless root canal treatment, and cosmetic dentistry. Her patient-first approach and gentle care have earned her a 4.8+ Google rating with thousands of happy patients.
              </p>
              <p>
                Beyond dentistry, Dr. Bushra also offers aesthetic and cosmetic treatment services including Hydra Facials, PRP therapy, and Botox — making Metro Star Hospital a one-stop destination for dental and cosmetic care in Jamia Nagar.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 bg-accent rounded-lg p-4">
                <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">MDS</p>
                  <p className="text-xs text-muted-foreground">Periodontics & Implantology</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent rounded-lg p-4">
                <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">10+ Years</p>
                  <p className="text-xs text-muted-foreground">Clinical Experience</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-accent rounded-lg p-4">
                <Heart className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">5000+</p>
                  <p className="text-xs text-muted-foreground">Patients Treated</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a
                href="https://www.instagram.com/drbushraofficial_sl_sr_sc/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/dr-bushra-shams-33171b134/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
