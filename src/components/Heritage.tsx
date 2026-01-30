import { motion } from "framer-motion";
import coffeeBeansImg from "@/assets/coffee-beans.jpg";
import bakingImg from "@/assets/baking.jpg";
import baristaImg from "@/assets/barista.jpg";

const features = [
  {
    title: "Ethical Beans",
    description: "Directly sourced from sustainable small-lot farmers.",
    image: coffeeBeansImg,
  },
  {
    title: "Daily Baking",
    description: "Natural leaven sourdough baked fresh at 5 AM.",
    image: bakingImg,
  },
  {
    title: "Artisanal Craft",
    description: "Award-winning baristas dedicated to excellence.",
    image: baristaImg,
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Our Heritage</p>
            <h2 className="section-title mb-6">
              The Art of the Perfect
              <br />
              <span className="italic">Brew</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-10">
              From fair-trade beans sourced responsibly from high-altitude
              estates to your daily ritual, we believe coffee is more than just a
              caffeine kick—it's a moment of connection. Our baristas spend
              months mastering the science of extraction and the art of
              presentation.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-3">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={baristaImg}
                alt="Barista crafting coffee"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/30 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
