import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

interface IUserLayoutProps {
  children?: React.ReactNode;
}

const UserLayout = ({ children }: IUserLayoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="grow bg-slate-50">{children}</main>
      <Footer />
    </div>
  );
};

export { UserLayout };
