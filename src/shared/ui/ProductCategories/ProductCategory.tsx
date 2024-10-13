export const ProductCategory = ({ data }: { data: string }) => {
  return (
    <div className="flex w-full items-center justify-center rounded-lg bg-gray-100 py-4 shadow-md">
      <h3 className="text-xl font-bold uppercase tracking-wide text-gray-800">
        {data}
      </h3>
    </div>
  );
};
