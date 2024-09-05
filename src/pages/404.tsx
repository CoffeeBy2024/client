import { NotFoundView } from '@/features';
import { UserLayout } from '@/shared/layout';

import type { NextPageWithLayout } from './_app';

const NotFound: NextPageWithLayout = () => <NotFoundView />;

NotFound.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default NotFound;
