import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useState } from 'react';

import { Shop } from '@/shared';
import { ProductCategory } from '@/shared/ui/ProductCategories/ProductCategory';
import { WorkingHours } from '@/shared/ui/WorkingHours/WorkingHours';

import { ProductList } from './components';

const ProductPopup = dynamic(() => import('./components/Product'));

const ShopView = ({ data }: ShopPros) => {
  const router = useRouter();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  const pathname = usePathname();

  const openPopup = ({ name, id }: { name: string; id: number }) => {
    router.push(
      { pathname: pathname, query: `product=${name}_${id}` },
      undefined,
      {
        shallow: true,
      }
    );
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    router.push(pathname, undefined, { shallow: true });
    setIsPopupOpen(false);
    setProduct(null);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-start">
        <Shop data={data.shop} />
        <WorkingHours data={data.working_hours} />
      </div>

      <ul role="list" className="w-full space-y-4 divide-y divide-gray-200">
        {data.productCategories.map((item, index) => (
          <li key={index} className="pt-4">
            <ProductCategory data={item} />
            <ProductList
              data={{ id: data.shop.id, category: item, openPopup, setProduct }}
            />
          </li>
        ))}
      </ul>

      {isPopupOpen && <ProductPopup product={product} onClose={closePopup} />}
    </div>
  );
};

export { ShopView };
