import { useContext } from 'react';

import { CategoryContext } from '@/shared/context';

import { Button } from '../Button/Button';

export const ProductCategories: React.FC<{ data: CATEGORY[] }> = ({ data }) => {
  const categoryContext = useContext(CategoryContext);
  if (!categoryContext) {
    return null;
  }
  const { handleSelect } = categoryContext;

  const handleClick = (
    category: string,
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    handleSelect(category);
  };

  return (
    <div className="flex-1 p-4 text-sm md:w-1/3 md:text-base">
      <h3 className="mb-2 text-lg font-semibold text-gray-700">
        Product Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {data.map((category, index) => (
          <Button
            onClick={(e) => handleClick(category, e)}
            key={index}
            className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-gray-500"
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};
