import { useState } from 'react';

import { shopsPerPage } from '@/utils/constants';

import { PagginationBottom } from './components/PaginationBottom';
import { ShopList } from './components/ShopList';
import { StateBar } from './components/StateBar';

const MenuView = ({ data }: MenuProps) => {
  const [page, setPage] = useState<number>(1);

  const getSelected = <T,>(arr: T[]): T[] => {
    return arr.slice((page - 1) * shopsPerPage, page * shopsPerPage);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-grow-[1]">
        <StateBar data={data.categories} />
      </div>

      <div className="flex flex-grow-[50]">
        <ShopList
          shops={getSelected(data.shops)}
          working_hours={getSelected(data.working_hours)}
          productCategories={getSelected(data.productCategories)}
        />
      </div>

      <div>
        <PagginationBottom
          shops={data.shops.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </div>
  );
};

export { MenuView };
