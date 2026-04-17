import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const treatments = [
  "Dental Implants",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Braces / Orthodontics",
  "Hydra Facial",
  "PRP Treatment",
  "Botox / Cosmetic",
  "General Checkup",
  "Other",
];

export function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const treatment = (form.elements.namedItem("treatment") as HTMLSelectElement).value;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0910b3e8-f611-4da5-b4c9-4514ce4a9d08", // Aapki Web3Forms key
          subject: `New Callback Request: ${treatment} - ${name}`,
          from_name: "Metro Star Hospital Website",
          name: name,
          phone: phone,
          treatment: treatment,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset(); // Form clear karne ke liye
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-xl p-6 sm:p-8 border border-border">
      <div className="flex items-center gap-2 mb-4">
        <Phone className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-bold font-heading text-card-foreground">Request a Callback</h3>
      </div>
      {submitted ? (
        <p className="text-sm text-primary font-medium py-8 text-center">
          ✓ Thank you! Your request has been sent to the clinic. We'll connect with you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder="Your Name"
            maxLength={100}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone Number"
            maxLength={15}
            pattern="[0-9+\- ]{7,15}"
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <select
            name="treatment"
            required
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            defaultValue=""
          >
            <option value="" disabled>Select Treatment</option>
            {treatments.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <Button variant="cta" size="lg" type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending Request..." : "Request Callback"}
          </Button>
        </form>
      )}
    </div>
  );
}