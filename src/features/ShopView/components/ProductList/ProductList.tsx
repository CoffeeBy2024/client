import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import { Button } from '@/shared';
import { getProducts } from '@/utils/helpers/product/getProducts';

const ProductCard = dynamic(() => import('./components/ProductCard'));

export const ProductList = ({
  data,
}: {
  data: {
    id: number;
    category: CATEGORY;
    openPopup: (selectedProduct: Product) => void;
    setProduct: Dispatch<SetStateAction<Product | null>>;
  };
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const fetchedProducts = await getProducts({
        id: data.id,
        category: data.category,
      });
      setProducts(fetchedProducts);
    };
    fetchProducts();
  }, [data.id, data.category]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  return (
    <div className="mt-2 flex flex-row">
      <div className="flex">
        <Button
          className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700"
          onClick={handlePrev}
        >
          &lt;
        </Button>
      </div>

      <ul
        role="list"
        className="flex basis-full gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {products
          .map(
            (item, index) => products[(currentIndex + index) % products.length]
          )
          .slice(0, 4)
          .map((item, index) => (
            <li
              className="max-w-70 flex w-1/4 cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
              onClick={() => {
                data.openPopup(item);
                data.setProduct(item);
              }}
              key={index}
            >
              <ProductCard product={item} />
            </li>
          ))}
      </ul>

      <div className="flex">
        <Button
          className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700"
          onClick={handleNext}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};
