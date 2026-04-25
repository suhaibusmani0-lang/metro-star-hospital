import { createFileRoute } from "@tanstack/react-router";

const images = [
  { src: "/images/hospital-exterior.jpg", alt: "Metro Star Hospital exterior view, Okhla Vihar New Delhi" },
  { src: "/images/clinic-reception.jpg", alt: "Metro Star Hospital reception area and pharmacy" },
  { src: "/images/clinic-dental-chair.jpg", alt: "Advanced dental treatment room at Metro Star Hospital" },
  { src: "/images/dr-bushra.jpg", alt: "Dr. Bushra Shams in her consultation office" },
  { src: "/images/dr-bushraboard.jpeg", alt: "Nayi photo ka description yahan likhein" }, 
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery – Metro Star Hospital, Okhla Vihar" },
      { name: "description", content: "View our state-of-the-art dental and cosmetic clinic at Metro Star Hospital, C13 Okhla Vihar, New Delhi." },
      { property: "og:title", content: "Clinic Gallery – Metro Star Hospital" },
      { property: "og:description", content: "Inside Metro Star Hospital — advanced dental equipment and modern facilities." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground font-heading">Clinic Gallery</h1>
          <p className="mt-4 text-muted-foreground">A look inside our modern, fully-equipped facility.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
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
      </div>
    </div>
  );
}