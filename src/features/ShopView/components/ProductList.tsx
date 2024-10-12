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
      <ul role="list" className="flex flex-row">
        {products.map((item, index) => (
          <li
            className="flex cursor-pointer flex-col"
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
              width={64}
              height={64}
              className="h-16 w-16 flex-none rounded-full bg-gray-50 object-cover"
            />
            <p>
              {item.id} {item.name} {item.price} {item.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
