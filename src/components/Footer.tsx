import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold font-heading">Metro Star Hospital</h3>
            <p className="text-sm text-primary-foreground/70 mt-2">
              Dental & Cosmetic Care led by Dr. Bushra Shams (BDS, MDS). Your trusted partner for advanced dental and aesthetic treatments.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.instagram.com/drbushraofficial_sl_sr_sc/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="Instagram">
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/dr-bushra-shams-33171b134/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Quick Links</h4>
            <nav className="space-y-2">
              <Link to="/" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Home</Link>
              <Link to="/services" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</Link>
              <Link to="/about" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">About Dr. Bushra</Link>
              <Link to="/contact" className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">Contact</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+919990098258" className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                +91 99900 98258
              </a>
              <a href="mailto:drbushradentist@gmail.com" className="flex items-start gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                drbushradentist@gmail.com
              </a>
              <div className="flex items-start gap-2 text-sm text-primary-foreground/70">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                Metro Star Hospital, C13, Okhla Vihar Main Rd, Jamia Nagar, New Delhi 110025
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-primary-foreground/10 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Metro Star Hospital. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40">
            Developed by{" "}
            <a 
              href="https://www.zarnetic.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary-foreground/60 font-medium hover:text-primary-foreground hover:underline transition-colors"
            >
              Zarnetic
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}