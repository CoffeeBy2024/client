import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import no_photo from '@/../public/no_photo.jpeg';
import { getProducts } from '@/utils/helpers/product/getProducts';


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

  return (
    <div className="mt-2">
      <ul
        role="list"
        className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4"
      >
        {products.map((item, index) => (
          <li
            className="flex cursor-pointer flex-col items-center rounded-lg bg-white p-4 shadow-md transition-shadow duration-200 hover:shadow-lg"
            onClick={() => {
              data.openPopup(item);
              data.setProduct(item);
            }}
            key={index}
          >
            <Image
              src={
                item.photo ? `data:image/jpeg;base64,${item.photo}` : no_photo
              }
              alt="product photo"
              width={150}
              height={150}
              className="mb-4 h-40 w-40 rounded-lg object-cover"
            />
            <h3 className="mb-2 text-lg font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-m text-center text-gray-600">
              {item.description}
            </p>
            <p className="mb-2 font-bold text-green-600">${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
