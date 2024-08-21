'use client';

import { Lato } from 'next/font/google';

const lato = Lato({ weight: '700', subsets: ['latin'], style: 'normal' });

export const Search = () => {
  const handleSubmit = () => {
    console.log('Tried to submit');
  };

  return (
    <form
      className="mb-3 flex items-center rounded-lg bg-[#D1BB9E] p-7 shadow-md transition-shadow duration-200 focus-within:shadow-lg"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Search"
        className={`flex-1 bg-transparent px-4 py-2 text-lg text-[#333] outline-none ${lato.className} placeholder-gray-500`}
      />
      <button
        type="submit"
        className="ml-2 flex h-6 w-6 rounded-md bg-[#74512D] p-2 text-white transition-colors duration-200 hover:bg-[#543310]"
      ></button>
    </form>
  );
};
