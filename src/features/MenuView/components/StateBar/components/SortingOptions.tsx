import { useState } from 'react';

import { DropDown } from '@/shared/ui';

export const SortingOptions = () => {
  const label = 'Sorting Options (Featured)';
  const [option, setOption] = useState<string>(label);

  return (
    <DropDown
      className="relative mr-10 flex"
      label={label}
      options={['Sort Option 1', 'Sort Option 2']}
      option={option}
      setOption={setOption}
      onSelect={() => {}} // not developed at the moment
    />
  );
};
