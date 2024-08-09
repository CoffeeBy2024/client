import '@/styles/globals.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { AuthProvider } from '@/context/AuthContext';
import { checkAuth } from '@/utils/helpers';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

type MyAppProps = AppPropsWithLayout & {
  initialAuthState: boolean;
};

function MyApp({ Component, pageProps, initialAuthState }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider initialAuthState={initialAuthState}>
      {getLayout(<Component {...pageProps} />)}
    </AuthProvider>
  );
}

MyApp.getInitialProps = async () => {
  const initialAuthState = await checkAuth();

  return { initialAuthState };
};

export default MyApp;
