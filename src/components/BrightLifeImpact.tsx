import { useEffect, useRef, useState } from "react";
import { BookOpen, Stethoscope, Users, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CounterProps {
  target: number;
  label: string;
  icon: LucideIcon;
}

const ImpactCounter = ({ target, label, icon: Icon }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="card-hover p-8">
      <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center text-primary mb-6">
        <Icon size={24} />
      </div>
      <div className="text-4xl font-display font-bold text-foreground mb-2">
        {count.toLocaleString()}+
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};

const BrightLifeImpact = () => {
  const stats = [
    { target: 12500, label: "Children Educated", icon: BookOpen },
    { target: 450, label: "Medical Camps", icon: Stethoscope },
    { target: 8200, label: "Families Supported", icon: Users },
    { target: 120, label: "Partner Schools", icon: CheckCircle2 },
  ];

  return (
    <section id="impact" className="section-padding bg-accent/50">
      <div className="container-main">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Measurable Impact
          </h2>
          <p className="text-muted-foreground italic">
            Numbers that represent real lives changed across the globe.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <ImpactCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrightLifeImpact;
