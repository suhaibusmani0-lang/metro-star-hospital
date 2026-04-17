import { Button } from "@/components/ui/button";
import { Star, Award, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
              <Award className="h-3.5 w-3.5" />
              Periodontist and Implantologist · Advanced Dental Care
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight font-heading">
              Dr. Bushra Shams
            </h1>
            <p className="text-lg sm:text-xl text-primary font-semibold mt-2 font-heading">
              BDS, MDS – Periodontist and Implantologist
            </p>
            <p className="mt-4 text-base text-muted-foreground max-w-lg leading-relaxed">
              Best dentist in Okhla — offering painless root canal treatment, dental implants, cosmetic treatment, Hydra Facials, PRP, and Botox at Metro Star Hospital, Jamia Nagar.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="flex text-hospital-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <span className="text-sm font-semibold text-foreground">4.8+ Google Rating</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">10+ Years Experience</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 mt-8 animate-fade-up-delay">
              <a
                href="https://wa.me/918800908228?text=Hi%20Dr.%20Bushra%2C%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="cta" size="xl">Book Appointment</Button>
              </a>
              <a href="tel:+918800908228">
                <Button variant="outline" size="xl">Call Now</Button>
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="animate-fade-up-delay relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] max-w-md mx-auto lg:ml-auto">
              <img
                src="/images/dr-bushra.jpg"
                alt="Dr. Bushra Shams - Periodontist and Implantologist at Metro Star Hospital, Okhla Vihar"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
