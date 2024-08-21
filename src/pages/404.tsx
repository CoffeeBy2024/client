import { UserLayout } from '@/components';
import { NotFoundView } from '@/features';

import type { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout = () => <NotFoundView />;

NotFound.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default NotFound;
