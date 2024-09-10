import { Shops } from '@/features/menu/components/Shops';
import { MenuType } from '@/pages/menu';

import { StateBar } from './components/StateBar/StateBar';

const MenuView = ({ data }: MenuType) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-grow-[1]">
        <StateBar data={data.categories} />
      </div>
      <div className="flex flex-grow-[50]">
        <Shops data={data.shops} />
      </div>
    </div>
  );
};

export { MenuView };
