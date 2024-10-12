import '@/styles/globals.css';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import { AuthProvider } from '@/shared/context';

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}

export default MyApp;
