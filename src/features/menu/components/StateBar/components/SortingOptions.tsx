import { DropDown } from '@/shared/ui';

export const SortingOptions = () => (
  <DropDown
    className="relative mr-10 flex"
    label="Sorting Options"
    options={['Sort Option 1', 'Sort Option 2']}
    onSelect={() => {}} // not developed at the moment
  />
);
