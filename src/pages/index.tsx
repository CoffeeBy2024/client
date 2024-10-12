import { HomeView } from '@/features';
import { UserLayout } from '@/shared/layout';

import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => <HomeView />;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Home;
