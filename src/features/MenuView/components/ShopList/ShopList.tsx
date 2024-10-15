import Link from 'next/link';

import { Shop } from '@/shared';
import { ProductCategories } from '@/shared/ui/ProductCategories/ProductCategories';
import { WorkingHours } from '@/shared/ui/WorkingHours/WorkingHours';
import { ROUTES } from '@/utils/constants';

export const ShopList = ({
  shops,
  working_hours,
  productCategories,
}: ShopsProps) => (
  <ul role="list" className="divide-gray w-full divide-y">
    {shops.map((item, index) => (
      <Link
        href={`${ROUTES.MENU.path}/shop/${item.name}_${item.id}`}
        key={index}
      >
        <li
          key={index}
          className="flex cursor-pointer flex-col justify-between gap-6 py-5 md:flex-row md:items-start"
        >
          <Shop data={item} />
          <WorkingHours data={working_hours[index]} />
          <ProductCategories data={productCategories[index]} />
        </li>
      </Link>
    ))}
  </ul>
);
