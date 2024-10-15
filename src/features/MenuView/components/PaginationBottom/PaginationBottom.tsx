import { Dispatch, SetStateAction } from 'react';

import { Button } from '@/shared';
import { shopsPerPage } from '@/utils/constants';

interface PagginationProps {
  shops: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export const PagginationBottom = ({
  shops,
  page,
  setPage,
}: PagginationProps) => {
  const totalPages = Math.ceil(shops / shopsPerPage);

  const handlePrev = () => {
    if (page > 1) setPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage((prev) => prev + 1);
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <Button
          className="rounded bg-gray-300 px-3 py-1 text-sm text-gray-600 opacity-75 transition duration-200 hover:bg-gray-400 hover:text-gray-700"
          onClick={handlePrev}
        >
          &lt;
        </Button>
        <p className="mx-2 text-sm text-gray-500">
          Page {page} of {totalPages}
        </p>
        <Button
          className="rounded bg-gray-300 px-3 py-1 text-sm text-gray-600 opacity-75 transition duration-200 hover:bg-gray-400 hover:text-gray-700"
          onClick={handleNext}
        >
          &gt;
        </Button>
      </div>
    </div>
  );
};
