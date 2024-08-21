interface IContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  className?: string;
}

const Container = ({ className, children }: IContainerProps) => {
  return (
    <div className={`m-auto h-full w-full max-w-[1320px] px-5 ${className}`}>
      {children}
    </div>
  );
};

export { Container };
