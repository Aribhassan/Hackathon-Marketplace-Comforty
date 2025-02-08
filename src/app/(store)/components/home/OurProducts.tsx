import React from "react";
import { motion } from "framer-motion";
import ProductCard from "../cards/ProductCard";

interface ProductType {
  id: string;
  name: string;
  price: number;
  image: string;
  onSale: boolean;
  isNew: boolean;
  slug: number;
}

interface OurProductsProps {
  products: ProductType[];
}

const OurProducts: React.FC<OurProductsProps> = ({ products }) => {
  return (
    <motion.section
      className="w-[80%] mx-auto mt-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: ProductType, index: number) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProductCard
              product={{
                id: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.image,
                onSale: product.onSale,
                isNew: product.isNew,
              }}
            />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default OurProducts;
