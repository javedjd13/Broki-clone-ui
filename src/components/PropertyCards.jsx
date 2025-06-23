import { motion } from "framer-motion";

import { properties } from "../lib/Constant";
import PropertyCard from "./PropertyCard";

const PropertyCards = ({ activeTab }) => {
  const filteredProperties = properties.filter(
    (property) => property.type === activeTab
  );
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="max-w-7xl mx-auto px-6 py-10 bg-white"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-x-10 gap-y-8">
          {filteredProperties.map((property) => (
            <motion.div key={property.id} variants={itemVariants}>
              <PropertyCard property={property} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
export default PropertyCards;
