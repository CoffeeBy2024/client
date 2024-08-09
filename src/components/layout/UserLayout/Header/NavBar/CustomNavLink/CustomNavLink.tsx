import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Typography } from '@/components';

interface ICustomNavLinkProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    'href' | 'prefetch' | 'className'
  > {
  path: string;
}

const CustomNavLink = ({ path, children, ...props }: ICustomNavLinkProps) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;
  const variant = isActive ? 'nav-link__active' : 'nav-link';
  return (
    <Typography tag="span" variant={variant}>
      <Link href={path} prefetch={false} {...props}>
        {children}
      </Link>
    </Typography>
  );
};

export { CustomNavLink };
