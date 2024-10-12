import { GetServerSideProps } from 'next';

import { MenuView } from '@/features';
import { CategoryProvider } from '@/shared';
import { UserLayout } from '@/shared/layout';
import { getCategories } from '@/utils/helpers/category/getCategories';
import { getProductCategories } from '@/utils/helpers/shop';
import { getFilteredShops } from '@/utils/helpers/shop';
import { getWorkingHours } from '@/utils/helpers/working_hours/getWorkingHours';

import type { NextPageWithLayout } from '../_app';

export const getServerSideProps: GetServerSideProps<MenuProps> = async (
  context
) => {
  const [categories, shops] = await Promise.all([
    getCategories(),
    getFilteredShops(context),
  ]);

  const shopIds = shops.map((shop) => shop.id);

  const [working_hours, productCategories] = await Promise.all([
    getWorkingHours(shopIds),
    getProductCategories(shopIds),
  ]);

  return {
    props: {
      data: {
        categories,
        shops,
        working_hours,
        productCategories,
      },
    },
  };
};

const Menu: NextPageWithLayout<MenuProps> = ({ data }: MenuProps) => (
  <CategoryProvider>
    <MenuView data={data} />
  </CategoryProvider>
);

Menu.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Menu;
