import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import no_logo from '@/../public/no_logo.png';
import { getPhoto } from '@/utils/helpers/photo/getPhoto';


export const Shop = ({ data }: { data: Shop }) => {
  const [imageSrc, setImageSrc] = useState<string>('');

  useEffect(() => {
    const fetchImage = async () => {
      const fetchedImage = await getPhoto(data.photo);
      if (fetchedImage) setImageSrc(`data:image/jpeg;base64,${fetchedImage}`);
    };
    fetchImage();
  }, [data.photo]);

  return (
    <div className="flex min-w-0 gap-x-6 p-4 md:w-1/3">
      <Image
        src={imageSrc || no_logo}
        alt="coffee_logo"
        width={64}
        height={64}
        className="h-16 w-16 flex-none rounded-full bg-gray-50 object-cover"
      />
      <div className="min-w-0 flex-auto">
        <p className="text-lg font-semibold leading-8 text-gray-900">
          {data.name}
        </p>
        <p className="mt-2 truncate text-sm leading-6 text-gray-500">
          coordinates - {data.coordinates.coordinates[0]}
          {','}
          {data.coordinates.coordinates[1]}
        </p>
      </div>
    </div>
  );
};
