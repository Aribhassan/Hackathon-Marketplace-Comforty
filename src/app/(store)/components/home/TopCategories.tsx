import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "../cards/CategoryCard";

interface CategoryType {
  name: string;
  image: string;
  products: (string | number)[];
}

const TopCategories: React.FC<{ categories: CategoryType[] }> = ({ categories }) => {
  return (
    <motion.div
      className="w-[80%] mx-auto mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Top Categories Section */}
      <motion.h2
        className="text-2xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Top Categories
      </motion.h2>

      <motion.section
        className="h-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category: CategoryType, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryCard
                products={category.products}
                name={category.name}
                image={category.image}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  );
};

export default TopCategories;
