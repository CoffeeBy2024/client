import Link from 'next/link';

import { Shop } from '@/shared';
import { ProductCategories } from '@/shared/ui/ProductCategories/ProductCategories';
import { WorkingHours } from '@/shared/ui/WorkingHours/WorkingHours';
import { ROUTES } from '@/utils/constants';

import { StateBar } from './components/StateBar/StateBar';

const MenuView = ({ data }: MenuProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-grow-[1]">
        <StateBar data={data.categories} />
      </div>

      <div className="flex flex-grow-[50]">
        <ul role="list" className="divide-gray w-full divide-y">
          {data.shops.map((item, index) => (
            <Link
              href={`${ROUTES.MENU.path}/shop/${item.name}_${item.id}`}
              key={index}
            >
              <li
                key={index}
                className="flex cursor-pointer flex-col justify-between gap-6 py-5 md:flex-row md:items-start"
              >
                <Shop data={item} />
                <WorkingHours data={data.working_hours[index]} />
                <ProductCategories data={data.productCategories[index]} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { MenuView };
