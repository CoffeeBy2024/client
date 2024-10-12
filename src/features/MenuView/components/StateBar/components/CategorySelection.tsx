import { useContext } from 'react';

import { CategoryContext } from '@/shared';
import { DropDown } from '@/shared/ui';

export const CategorySelection = ({
  data: categories,
}: {
  data: Category[];
}) => {
  const categoryContext = useContext(CategoryContext);
  if (!categoryContext) {
    return null;
  }
  const { category, setCategory, handleSelect } = categoryContext;

  return (
    <DropDown
      className="relative ml-10 flex"
      label="Categories"
      options={categories.map((category) => category.name)}
      option={category}
      setOption={setCategory}
      onSelect={handleSelect}
    />
  );
};
