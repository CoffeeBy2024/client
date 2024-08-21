import { UserLayout } from '@/components';
import { MenuView } from '@/features';

import type { NextPageWithLayout } from '../_app';

const Menu: NextPageWithLayout = () => <MenuView />;

Menu.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Menu;
