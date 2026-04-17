import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CallbackForm } from "@/components/CallbackForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact – Metro Star Hospital, Okhla Vihar New Delhi" },
      { name: "description", content: "Contact Metro Star Hospital. Address: C13, Okhla Vihar Main Rd, Jamia Nagar, New Delhi 110025. Phone: +91 88009 08228. Email: drbushradentist@gmail.com." },
      { property: "og:title", content: "Contact Metro Star Hospital" },
      { property: "og:description", content: "Book your appointment at Metro Star Hospital, Okhla Vihar. Call +91 88009 08228." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground">We'd love to hear from you. Book an appointment or visit us.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info + Map */}
          <div className="space-y-8">
            <div className="space-y-5">
              <a href="tel:+918800908228" className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">+91 88009 08228</p>
                </div>
              </a>
              <a href="mailto:drbushradentist@gmail.com" className="flex items-start gap-4 group">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">drbushradentist@gmail.com</p>
                </div>
              </a>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Address</p>
                  <p className="text-sm text-muted-foreground">Metro Star Hospital, C13, Okhla Vihar Main Rd, Jamia Nagar, New Delhi 110025</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon – Sat: 10:00 AM – 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sunday: By Appointment Only</p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-xl overflow-hidden shadow-md border border-border aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.8!2d77.2827!3d28.5523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b5e0000001%3A0x0!2sMetro+Star+Hospital!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Metro Star Hospital Location"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <CallbackForm />
          </div>
        </div>
      </div>
    </div>
  );
}
