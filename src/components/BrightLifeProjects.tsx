import { motion } from "framer-motion";
import { BookOpen, Stethoscope, Users, GraduationCap } from "lucide-react";

const projects = [
  {
    icon: BookOpen,
    title: "Education Programs",
    description: "Building schools and providing quality education to children in rural areas with certified teachers and modern resources.",
    color: "bg-primary",
    textColor: "text-primary-foreground",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Camps",
    description: "Organizing free medical camps with qualified doctors, providing essential medicines and health screenings.",
    color: "bg-yellow-300",
    textColor: "text-foreground",
  },
  {
    icon: Users,
    title: "Community Awareness",
    description: "Empowering communities through workshops on hygiene, nutrition, financial literacy, and sustainable living.",
    color: "bg-accent",
    textColor: "text-foreground",
  },
  {
    icon: GraduationCap,
    title: "Scholarship Programs",
    description: "Supporting talented students from underprivileged backgrounds with scholarships for higher education.",
    color: "bg-emerald-950",
    textColor: "text-primary-foreground",
  },
];

const BrightLifeProjects = () => (
  <section id="projects" className="section-padding bg-card">
    <div className="container-main">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Our Initiatives
        </h2>
        <p className="text-muted-foreground">
          Programs designed to create lasting change in education and healthcare.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="card-hover p-8 group cursor-default"
          >
            <div className={`w-14 h-14 ${project.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
              <project.icon size={28} className={project.textColor} />
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrightLifeProjects;
