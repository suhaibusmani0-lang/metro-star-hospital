import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";

// Yahan maine aapki 5 photos add kar di hain 👇
const images = [
  { src: "/images/hospital-exterior.jpg", alt: "Metro Star Hospital exterior, Okhla Vihar New Delhi" },
  { src: "/images/clinic-reception.jpg", alt: "Metro Star Hospital reception and pharmacy" },
  { src: "/images/clinic-dental-chair.jpg", alt: "Advanced dental treatment room with modern equipment" },
  { src: "/images/dr-bushra.jpg", alt: "Dr. Bushra Shams in her consultation office" },
  { src: "/images/dr-bushraboard.jpeg", alt: "Dr. Bushra Board" }, 
];

export function GalleryPreview() {
  return (
    <section className="py-16 sm:py-24 bg-accent/30 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-heading">Our Hospital</h2>
          <p className="mt-3 text-muted-foreground">State-of-the-art facility designed for your comfort.</p>
        </div>

        {/* 🚀 Sliding Banner Container */}
        <div className="relative flex w-full group py-4">
          
          {/* Moving Track */}
          <div className="flex gap-5 animate-scroll-infinite group-hover:[animation-play-state:paused] w-max">
            
            {/* TRICK: Loop ko seamless banane ke liye humne array ko 2 baar map kiya hai */}
            {[...images, ...images].map((img, index) => (
              <div 
                key={`${img.src}-${index}`} 
                className="w-[280px] sm:w-[350px] lg:w-[400px] flex-shrink-0 rounded-xl overflow-hidden shadow-md aspect-[4/3]"
              >
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

        <div className="text-center mt-8">
          <Link to="/gallery">
            <Button variant="outline" size="lg">View Full Gallery</Button>
          </Link>
        </div>
      </div>

      {/* ⚙️ Custom Animation Styles */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 10px)); } 
        }
        
        .animate-scroll-infinite {
          /* Animation speed yahan se control karein. Photos badh gayi hain toh time thoda badha diya hai taaki speed normal rahe */
          animation: scroll 20s linear infinite; 
        }
      `}</style>
    </section>
  );
}