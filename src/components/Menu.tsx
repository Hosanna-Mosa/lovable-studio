import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import croissantImg from "@/assets/croissant.jpg";
import chemexImg from "@/assets/chemex.jpg";
import spicedLatteImg from "@/assets/spiced-latte.jpg";

const menuItems = [
  {
    name: "Sourdough Croissant",
    price: "$6.50",
    description: "House-made, 48-hour fermented, buttery and flaky.",
    image: croissantImg,
  },
  {
    name: "Chemex Pour-Over",
    price: "$7.00",
    description: "Single origin Ethiopian Yirgacheffe, floral & bright.",
    image: chemexImg,
  },
  {
    name: "Spiced Amber Latte",
    price: "$6.50",
    description: "Signature house syrup, warm spices, oat milk.",
    image: spicedLatteImg,
  },
];

export default function Menu() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % menuItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + menuItems.length) % menuItems.length);
  };

  return (
    <section id="menu" className="py-24 bg-mocha">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="section-label">The Menu</p>
            <h2 className="section-title">
              Seasonal <span className="italic">Favorites</span>
            </h2>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 border border-border rounded-full hover:bg-muted transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
                <span className="text-primary font-semibold whitespace-nowrap">
                  {item.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
