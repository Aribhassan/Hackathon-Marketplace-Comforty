import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProductType {
  id: string;
  name: string;
  image: string;
  slug: number;
}

interface StyleProductsProps {
  products: ProductType[];
}

const StyleProducts: React.FC<StyleProductsProps> = ({ products }) => {
  // Separate the main image and secondary images
  const mainImage = products.find((product) => product.slug === 1);
  const secondaryImages = products.filter((product) => product !== mainImage);

  return (
    <motion.div
      className="flex justify-center mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Outer Container */}
      <div className="w-[80%] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <motion.div
          className="flex w-full md:w-1/2 p-4 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Vertical Rotated Text */}
          <motion.div
            className="absolute md:-rotate-90 md:left-[-190px] left-8 top-1 md:top-1/2 text-center transform -translate-y-1/2 text-[10px] md:text-lg lg:text-xl font-semibold"
            
          >
            EXPLORE NEW AND POPULAR STYLES
          </motion.div>

          {mainImage && (
            <Image
              src={mainImage.image}
              alt="Main Style"
              className="w-full h-auto"
              priority
              width={500}
              height={500}
            />
          )}
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="grid grid-cols-2 gap-4 p-4 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {secondaryImages.map((product: ProductType, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
                width={250}
                height={250}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StyleProducts;
