"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { BsCartDash } from "react-icons/bs";
import FeaturedProductsCard from "@/app/(store)/components/cards/FeaturedProductsCard";
import { useCart } from "@/app/(store)/cart/context/CartContext";
import toast from "react-hot-toast";

interface ProductType {
  id: string;
  name: string;
  price: number;
  onSale: boolean;
  isNew: boolean;
  image: string;
  description: string;
  slug: number;
}

const ProductPage = ({ params }: { params: { id: number } }) => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = `*[_type == "products"]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          description,
          slug
        }`;
        
        const featuredQuery = `*[_type == "products" && "featured" in tags]{
          "id": _id, 
          "name": title,
          price,
          "onSale": badge == "Sales",
          "isNew": badge == "New",
          "image": image.asset->url,
          slug
        }`;

        const [fetchedProducts, fetchedFeaturedProducts] = await Promise.all([
          client.fetch(query),
          client.fetch(featuredQuery),
        ]);

        setProducts(fetchedProducts);
        setFeaturedProducts(fetchedFeaturedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const productId = Number(params.id);
  const product = products.find((p) => p.slug === productId);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!product) return <div className="text-center mt-20">Product not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
          priority
        />
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <span className="inline-block bg-[#029FAE] text-white text-lg px-4 py-2 rounded-full">
            ${product.price.toLocaleString()}.00 USD
          </span>
          <p className="text-gray-600">{product.description}</p>
          <button
            className="bg-[#029FAE] hover:bg-[#027D8A] text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2"
            onClick={() => {
              addToCart({ ...product, quantity: 1 });
              toast(`${product.name} has been added to the cart!`);
            }}
          >
            <BsCartDash className="text-xl" />
            Add To Cart
          </button>
        </div>
      </div>
      
      <div className="mt-20">
        <h2 className="text-4xl font-bold mb-6 text-center md:text-left">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <FeaturedProductsCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
