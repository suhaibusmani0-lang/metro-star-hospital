import { Star, Users, Award, CalendarCheck } from "lucide-react";

const stats = [
  { icon: Star, value: "4.8+", label: "Google Rating" },
  { icon: Users, value: "5000+", label: "Happy Patients" },
  { icon: Award, value: "MDS", label: "Specialist Degree" },
  { icon: CalendarCheck, value: "10+", label: "Years Experience" },
];

export function TrustSection() {
  return (
    <section className="py-14 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex justify-center mb-3">
                <stat.icon className="h-8 w-8 text-primary-foreground/80" />
              </div>
              <p className="text-3xl sm:text-4xl font-bold text-primary-foreground font-heading">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
