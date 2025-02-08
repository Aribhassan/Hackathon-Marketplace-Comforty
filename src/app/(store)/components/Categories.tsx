import React from "react";
import { motion } from "framer-motion";

interface CategoryType {
  id: string;
  name: string;
}

interface CategoriesProps {
  categories: CategoryType[];
  selectedCategory: string | null;
  onCategorySelect: (category: string | null) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, selectedCategory, onCategorySelect }) => {
  return (
    <motion.div
      className="w-[80%] mx-auto mt-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-lg font-semibold text-gray-800 mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Filter by Category
      </motion.h2>

      <motion.ul
        className="flex flex-wrap gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {/* All Categories Option */}
        <motion.li
          className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
            selectedCategory === null
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-100 text-gray-800 hover:bg-blue-100"
          }`}
          onClick={() => onCategorySelect(null)}
          whileHover={{ scale: 1.1 }}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          All
        </motion.li>

        {/* Render Categories */}
        {categories.map((category) => (
          <motion.li
            key={category.id}
            className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-colors ${
              selectedCategory === category.name
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
            onClick={() => onCategorySelect(category.name)}
            whileHover={{ scale: 1.1 }}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {category.name}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Categories;
