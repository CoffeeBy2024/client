import { UserLayout } from '@/components';
import { HomeView } from '@/modules';

import type { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => <HomeView />;

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Home;
