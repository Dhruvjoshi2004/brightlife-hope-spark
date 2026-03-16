import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

const BrightLifeHero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      <div className="container-main grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-block py-1.5 px-4 rounded-full bg-accent text-primary text-xs font-bold tracking-widest uppercase mb-6">
            ESTABLISHED 2024
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-8">
            Creating <span className="text-primary">Brighter</span> Futures.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mb-10 leading-relaxed">
            We bridge the gap between potential and opportunity through radical
            access to healthcare and quality education for underserved communities.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#donate" className="btn-primary flex items-center gap-2">
              Start Donating <ArrowRight size={18} />
            </a>
            <a href="#about" className="btn-secondary">Our Mission</a>
          </div>
        </motion.div>

        <motion.div style={{ y: y1 }} className="relative">
          <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000"
              alt="Children smiling in a classroom"
              className="object-cover w-full h-full"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 to-transparent" />
          </div>
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-yellow-300 p-6 rounded-2xl shadow-xl max-w-[200px]"
          >
            <p className="text-foreground font-bold text-sm">
              "Education is the most powerful weapon."
            </p>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-0 w-96 h-96 bg-yellow-300/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default BrightLifeHero;
