import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/images/hospital-exterior.jpg", alt: "Metro Star Hospital exterior, Okhla Vihar New Delhi" },
  { src: "/images/clinic-reception.jpg", alt: "Metro Star Hospital reception and pharmacy" },
  { src: "/images/clinic-dental-chair.jpg", alt: "Advanced dental treatment room with modern equipment" },
];

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-24 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">Our Hospital</h2>
          <p className="mt-3 text-muted-foreground">State-of-the-art facility designed for your comfort.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {images.map((img) => (
            <div key={img.src} className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 aspect-[4/3]">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline" size="lg">View Full Gallery</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
