import { useRouter } from 'next/router';

import { DropDown } from '@/shared/ui';

import { CategoryType } from '../StateBar';

export const CategorySelection = ({
  data: categories,
}: {
  data: CategoryType[];
}) => {
  const router = useRouter();

  const handleSelect = (option: string) => {
    if (option) router.push(`/menu/?category=${option}`);
    else router.push('/menu');
  };

  return (
    <DropDown
      className="relative ml-10 flex"
      label="Categories"
      options={categories}
      onSelect={handleSelect}
    />
  );
};
