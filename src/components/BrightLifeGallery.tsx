import { motion } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=600",
    alt: "Volunteers teaching children in a classroom",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600",
    alt: "Free medical camp with doctors treating patients",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=600",
    alt: "Community volunteering and supply distribution",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=600",
    alt: "Volunteers helping in community programs",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=600",
    alt: "Children receiving educational supplies",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=600",
    alt: "Healthcare workers providing medical aid",
    span: "col-span-2",
  },
];

const BrightLifeGallery = () => (
  <section id="gallery" className="section-padding bg-card">
    <div className="container-main">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Stories in Pictures
        </h2>
        <p className="text-muted-foreground">
          A glimpse into the lives we touch and the communities we serve.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className={`${img.span} rounded-2xl overflow-hidden group cursor-pointer relative`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-emerald-950/0 group-hover:bg-emerald-950/30 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BrightLifeGallery;
