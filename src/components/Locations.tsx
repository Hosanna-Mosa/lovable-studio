import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import cafeInteriorImg from "@/assets/cafe-interior.jpg";

const locations = [
  {
    name: "Downtown Flagship",
    address: "124 Artisanal Way, Brooklyn, NY 11201",
    hours: "Mon-Sun: 7am - 8pm",
  },
  {
    name: "The Roastery Lab",
    address: "45 Coffee St, Austin, TX 78701",
    hours: "Mon-Fri: 6am - 6pm",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">Our Homes</p>
            <h2 className="section-title mb-10">
              Where to <span className="italic">find us</span>
            </h2>

            <div className="space-y-8">
              {locations.map((location, index) => (
                <motion.div
                  key={location.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-mocha rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                      {location.name}
                    </h3>
                    <p className="text-muted-foreground mb-1">{location.address}</p>
                    <p className="text-sm text-muted-foreground mb-3">
                      {location.hours}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-primary text-sm font-medium hover:underline"
                    >
                      Get Directions
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
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
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src={cafeInteriorImg}
                alt="Cafe interior"
                className="w-full h-full object-cover"
              />
              {/* Map Pin Overlay */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full animate-ping" />
                  <div className="relative bg-primary text-primary-foreground px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    We Are Here
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
