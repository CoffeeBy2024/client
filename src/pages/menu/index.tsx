import { MenuView } from '@/features';
import { UserLayout } from '@/shared/layout';

import type { NextPageWithLayout } from '../_app';

const Menu: NextPageWithLayout = () => <MenuView />;

Menu.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Menu;
