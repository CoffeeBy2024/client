import { createContext } from 'react';

export const CategoryContext = createContext<
  | {
      category: string;
      setCategory: React.Dispatch<React.SetStateAction<string>>;
      handleSelect: (category: string) => void;
    }
  | undefined
>(undefined);
