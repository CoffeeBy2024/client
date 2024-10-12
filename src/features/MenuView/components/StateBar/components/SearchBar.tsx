'use client';

import { useRouter } from 'next/navigation';
import { MdSearch as SearchIcon } from 'react-icons/md';

import { Button } from '@/shared';

export const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;

    if (name) router.push(`/menu?name=${name}`);
    else router.push(`/menu`);
  };

  return (
    <form
      className="mb-3 mt-3 flex max-w-[500px] grow items-center justify-between gap-4 rounded-md bg-gray-200 p-0.5 md:p-2"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="flex-1 bg-transparent outline-none"
      />
      <Button className="flex-none cursor-pointer">
        <SearchIcon size={24} />
      </Button>
    </form>
  );
};
