import { motion } from "framer-motion";
import { BookOpen, Stethoscope, CheckCircle2 } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const BrightLifeAbout = () => {
  const points = [
    "Direct scholarship programs for rural youth",
    "Mobile medical units for remote villages",
    "Teacher training and school infrastructure",
    "Community-led hygiene awareness",
  ];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600"
                className="rounded-3xl h-64 w-full object-cover"
                alt="Children studying in school"
              />
              <div className="bg-yellow-300 p-8 rounded-3xl">
                <BookOpen size={40} className="mb-4 text-foreground" />
                <h3 className="font-display font-bold text-xl text-foreground">Education First</h3>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-primary p-8 rounded-3xl">
                <Stethoscope size={40} className="mb-4 text-primary-foreground" />
                <h3 className="font-display font-bold text-xl text-primary-foreground">Health Access</h3>
              </div>
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600"
                className="rounded-3xl h-64 w-full object-cover"
                alt="Medical clinic providing care"
              />
            </div>
          </div>

          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 leading-tight text-foreground"
            >
              We believe health and education are{" "}
              <span className="text-primary underline decoration-yellow-300 underline-offset-8">
                human rights
              </span>
              , not privileges.
            </motion.h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              BrightLife Foundation was born from a simple observation: talent is
              universal, but opportunity is not. We work on the frontlines to
              dismantle the barriers that keep children from desks and families
              from clinics.
            </p>
            <ul className="space-y-4">
              {points.map((item, i) => (
                <motion.li
                  key={i}
                  custom={i}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-foreground font-medium"
                >
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrightLifeAbout;
