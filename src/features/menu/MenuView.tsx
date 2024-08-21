import { Category } from '@/features/menu/components/Category';
import { Search as SearchBar } from '@/features/menu/components/SearchBar';
import { Shops } from '@/features/menu/components/Shops';
import { StateBar } from '@/features/menu/components/StateBar';

const MenuView = () => {
  return (
    <div className="flex h-full">
      <div className="mr-2 flex flex-[2] flex-col">
        <SearchBar />
        <Category />
      </div>
      <div className="flex flex-[6] flex-col">
        <StateBar />
        <Shops />
      </div>
    </div>
  );
};

export { MenuView };
