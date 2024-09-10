import { CategorySelection, SearchBar, SortingOptions } from './components';

export type CategoryType = string;

export const StateBar = ({ data: categories }: { data: CategoryType[] }) => {
  return (
    <div className="mx-1 mb-1 flex flex-[1] items-stretch justify-between gap-2 rounded-md bg-[#543310] px-3">
      <CategorySelection data={categories} />
      <SearchBar />
      <SortingOptions />
    </div>
  );
};
