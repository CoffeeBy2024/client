import React from 'react';

export type ShopType = {
  id: number;
  name: string;
  coordinates: {
    type: string;
    coordinates: number[];
  };
};

export const Shop = ({ data }: { data: ShopType }) => {
  return (
    <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-300 bg-white p-4 shadow-lg transition-shadow duration-200 hover:shadow-xl">
      <h2 className="mb-2 text-xl font-semibold text-gray-800">{data.name}</h2>
      <p className="mb-1 text-sm text-gray-600">
        <strong>ID:</strong> {data.id}
      </p>
      <div>
        <h3 className="mb-1 text-lg font-medium text-gray-700">Coordinates</h3>
        <p className="text-sm text-gray-600">
          <strong>Type:</strong> {data.coordinates.type}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Longitude:</strong> {data.coordinates.coordinates[0]}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Latitude:</strong> {data.coordinates.coordinates[1]}
        </p>
      </div>
    </div>
  );
};
