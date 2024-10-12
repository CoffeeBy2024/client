import { useRouter } from 'next/router';
import React, { useCallback, useMemo, useState } from 'react';

import { CategoryContext } from './CategoryContext';

const CategoryProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const label = 'Categories';
  const router = useRouter();

  const [category, setCategory] = useState<string>(label);

  const handleSelect = useCallback(
    (category: string) => {
      if (category && category !== label) {
        router.push(`/menu/?category=${category}`);
      } else {
        router.push('/menu');
      }
      setCategory(category);
    },
    [router]
  );

  const contextValue = useMemo(
    () => ({ category, setCategory, handleSelect }),
    [category, setCategory, handleSelect]
  );

  return (
    <CategoryContext.Provider value={contextValue}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryProvider };
