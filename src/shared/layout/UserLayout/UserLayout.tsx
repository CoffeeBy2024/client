import { useAuth } from '@/utils/hooks';

import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

interface IUserLayoutProps {
  children?: React.ReactNode;
}

const UserLayout = ({ children }: IUserLayoutProps) => {
  const { isFirstLoad } = useAuth();

  return (
    <div className="flex h-screen flex-col">
      {isFirstLoad ? (
        <div>Loading</div>
      ) : (
        <>
          <Header />
          <main className="grow bg-slate-50">{children}</main>
          <Footer />
        </>
      )}
    </div>
  );
};

export { UserLayout };
