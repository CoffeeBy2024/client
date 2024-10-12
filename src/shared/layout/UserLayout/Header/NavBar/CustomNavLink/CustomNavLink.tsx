import { Lato } from 'next/font/google';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Typography } from '@/shared/ui';

interface ICustomNavLinkProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Link>,
    'href' | 'prefetch' | 'className'
  > {
  path: string;
}

const lato = Lato({ weight: '700', subsets: ['latin'], style: 'normal' });

const CustomNavLink = ({ path, children, ...props }: ICustomNavLinkProps) => {
  const currentPath = usePathname();

  const isActive = currentPath === path;
  const variant = isActive ? 'nav-link__active' : 'nav-link';
  return (
    <Typography className={lato.className} tag="span" variant={variant}>
      <Link href={path} prefetch={false} {...props}>
        {children}
      </Link>
    </Typography>
  );
};

export { CustomNavLink };
