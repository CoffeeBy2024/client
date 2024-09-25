interface AuthFormRootErrorProps extends React.ComponentProps<'p'> {
  children: string | undefined;
}

const AuthFormRootError = ({ children }: AuthFormRootErrorProps) => {
  return children ? (
    <p className="mb-5 w-full rounded border border-red-950 bg-red-300 px-5 py-3 text-center text-red-950">
      {children}
    </p>
  ) : null;
};

export { AuthFormRootError };
