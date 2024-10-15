'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MdSearch as SearchIcon, MdClose as CloseIcon } from 'react-icons/md';

import { Button } from '@/shared';

export const SearchBar = () => {
  const router = useRouter();
  const [input, setInput] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input) router.push(`/menu?name=${input}`);
    else router.push(`/menu`);
  };

  const handleClearInput = () => {
    setInput('');
    router.push(`/menu`);
  };

  return (
    <form
      className="mb-3 mt-3 flex max-w-[500px] grow items-center justify-between gap-4 rounded-md bg-gray-200 p-0.5"
      onSubmit={handleSearch}
    >
      <Button type="submit" className="flex-none cursor-pointer">
        <SearchIcon size={24} />
      </Button>
      <input
        type="text"
        name="name"
        placeholder="Search"
        className="w-full bg-transparent outline-none"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input && (
        <Button type="button" onClick={handleClearInput}>
          <CloseIcon size={24} />
        </Button>
      )}
    </form>
  );
};
