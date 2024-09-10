import { Shop, ShopType } from '@/shared';

export const Shops = ({ data }: { data: ShopType[] }) => {
  return (
    <div className="flex w-full flex-col items-center justify-start space-y-4 rounded-md bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-800">Shops</h1>
      {data.length ? (
        <ul className="w-full space-y-4">
          {data.map((item, index) => (
            <li key={index} className="w-full">
              <Shop data={item} />
            </li>
          ))}
        </ul>
      ) : (
        <h1 className="text-2xl font-semibold text-gray-800">
          Nothing to Show
        </h1>
      )}
    </div>
  );
};
