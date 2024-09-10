'use client';

import React, { useState } from 'react';
import { MdClose as CloseIcon } from 'react-icons/md';
import { MdArrowDownward as ArrowDownIcon } from 'react-icons/md';

import { CategoryType } from '@/features/menu/components/StateBar/StateBar';

type DropDownProps = {
  className: string;
  label: string;
  options: CategoryType[];
  onSelect: (option: string) => void;
};

export const DropDown = ({
  className,
  label,
  options,
  onSelect,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOption] = useState<string>(label);

  const toggleDropDown = () => {
    if (option != label) {
      setOption(label);
      onSelect('');
    }
    setIsOpen(!isOpen);
  };

  const handleDropdown = (selected: string) => {
    setOption(selected);
    onSelect(selected);
    setIsOpen(!isOpen);
  };

  return (
    <div className={className}>
      <button
        onClick={() => toggleDropDown()}
        className="mb-3 mt-3 flex items-center justify-center gap-4 rounded-md bg-gray-200 p-2 sm:w-40 md:w-80"
      >
        {option}
        {option === label ? (
          <ArrowDownIcon size={24} />
        ) : (
          <CloseIcon size={24} />
        )}
      </button>

      {isOpen && (
        <ul className="absolute top-full rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 sm:w-40 md:w-80">
          {options &&
            options.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => handleDropdown(item)}
                  className="w-full px-4 py-2 text-center text-sm text-gray-700 hover:rounded-lg hover:bg-gray-100"
                >
                  {item}
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};
