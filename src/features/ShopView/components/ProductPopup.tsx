import Image from 'next/image';
import React, { useRef, useEffect } from 'react';

import no_photo from '@/../public/no_photo.jpeg';
import { Button } from '@/shared';


interface ProductPopupProps {
  product: Product | null;
  onClose: () => void;
}

const ProductPopup: React.FC<ProductPopupProps> = ({ product, onClose }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
      <div
        ref={popupRef}
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="relative">
          <Button
            onClick={onClose}
            className="absolute right-3 top-3 rounded-lg bg-red-500 px-3 py-1 text-white transition duration-200 hover:bg-red-600"
          >
            Close
          </Button>

          <Image
            src={
              product?.photo
                ? `data:image/jpeg;base64,${product?.photo}`
                : no_photo
            }
            alt={`${product?.name} image`}
            width={128}
            height={128}
            className="h-128 mb-4 w-full rounded-lg object-cover"
          />
        </div>

        <h2 className="mb-2 text-center text-2xl font-semibold">
          {product?.name}
        </h2>
        <p className="mb-4 text-gray-700">
          <span className="font-bold">Product ID:</span> {product?.id}
        </p>
        <p className="mb-4 text-gray-600">
          <span className="font-bold">Description:</span> {product?.description}
        </p>
        <p className="mb-4 text-end text-lg font-bold text-green-600">
          Price: ${product?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductPopup;
