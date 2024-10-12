import clsx from 'clsx';

interface LabelProps extends React.ComponentProps<'label'> {
  children?: React.ReactNode;
  isRequired?: boolean;
}

const Label = ({ className, children, isRequired, ...props }: LabelProps) => {
  const requiredSymbolClassNames =
    "after:content-['*'] after:ml-0.5 after:text-red-500";

  return (
    <label
      className={clsx(
        `absolute -top-[40%] left-1 block cursor-text select-none rounded-lg border border-transparent bg-white px-1 text-base text-amber-900 transition-all peer-has-[:focus]:!-top-[40%] peer-has-[:placeholder-shown]:top-1.5 peer-has-[:focus]:!bg-white peer-has-[:placeholder-shown]:bg-transparent peer-has-[:focus]:!text-base peer-has-[:placeholder-shown]:text-lg peer-has-[:focus]:!text-amber-900 peer-has-[:placeholder-shown]:text-gray-400`,
        className,
        isRequired && requiredSymbolClassNames
      )}
      {...props}
    >
      {children}
    </label>
  );
};

export { Label };
