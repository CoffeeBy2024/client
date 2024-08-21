import Link from 'next/link';

import { Container, Logo } from '@/components';
import { ROUTES } from '@/utils/constants';

import { NavBar } from './NavBar/NavBar';

const Header = () => {
  return (
    <header className="sticky left-0 right-0 top-0 bg-white shadow">
      <Container className="flex items-center justify-between py-3">
        <Link href={ROUTES.ROOT.path}>
          <Logo />
        </Link>
        <NavBar />
      </Container>
    </header>
  );
};

export { Header };
