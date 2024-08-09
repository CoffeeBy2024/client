import clsx from 'clsx';

type TypographyVariant =
  | 'title-1'
  | 'footer-1'
  | 'nav-link'
  | 'nav-link__active';
type TypographyTag =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'div'
  | 'span'
  | 'p';

type TypographyProps<Tag extends TypographyTag> = React.ComponentProps<
  Exclude<Tag, 'span'>
> & {
  variant: TypographyVariant;
  tag?: TypographyTag;
  children: React.ReactNode;
};

const Typography = <Tag extends TypographyTag = 'div'>({
  variant,
  tag = 'div',
  children,
  className,
  ...props
}: TypographyProps<Tag>) => {
  const Component = tag;

  return (
    <Component className={clsx(variant, className)} {...props}>
      {children}
    </Component>
  );
};

export { Typography };
