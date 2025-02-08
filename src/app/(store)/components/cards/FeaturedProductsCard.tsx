import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProductType {
  id: string;
  name: string;
  price: number;
  isNew: boolean;
  onSale: boolean;
  image: string;
  slug: number;
};

const FeaturedProductsCard = (product: ProductType) => {
  return (
    <div className='relative shadow-lg transition-transform transform hover:scale-105 bg-white rounded-xl flex flex-col items-center flex-nowrap space-y-3 p-4 mx-auto w-full'>
      <Link href={`/product/${product.slug}`} className="relative w-full block">
        {product.isNew && (
          <span className="absolute top-2 left-2 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-10">
            New
          </span>
        )}
        {product.onSale && (
          <span className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md z-10">
            Sale
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={180}
          className="object-cover rounded-lg w-full h-40"
        />
      </Link>
      <h3 className='text-lg font-semibold text-gray-800 text-center'>{product.name}</h3>
      <p className='text-lg font-medium text-gray-600'>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default FeaturedProductsCard;
