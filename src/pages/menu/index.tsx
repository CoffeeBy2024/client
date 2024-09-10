import { GetServerSideProps } from 'next';

import { MenuView } from '@/features';
import { CategoryType } from '@/features/menu/components/StateBar/StateBar';
import { ShopType } from '@/shared';
import { UserLayout } from '@/shared/layout';
import { URL } from '@/utils/constants';

import type { NextPageWithLayout } from '../_app';

export type MenuType = {
  data: {
    categories: CategoryType[];
    shops: ShopType[];
  };
};

export const getServerSideProps: GetServerSideProps<MenuType> = async (
  context
) => {
  const props = { data: { categories: [], shops: [] } };

  // GET CATEGORIES FOR STATE BAR
  const categories = await fetch(`${URL.SERVER}/category/`, { method: 'GET' });
  try {
    if (categories.ok) {
      props.data.categories = (await categories.json()).map(
        (category: { id: number; name: string }) => category.name
      );
    } else {
      console.error('Failed to fetch categories');
    }
  } catch (error) {
    console.error('Error fetching categories:', error);
  }

  const category = context.query.category;
  const name = context.query.name;

  // GET SHOPS
  const shops = await fetch(
    `${URL.SERVER}/shop/${
      category ? `?category=${category}` : name ? `?name=${name}` : ''
    }`,
    { method: 'GET' }
  );

  try {
    if (shops.ok) {
      props.data.shops = await shops.json();
    } else {
      console.error('Failed to fetch shops');
    }
  } catch (error) {
    console.error('Error fetching shops:', error);
  }

  return { props };
};

const Menu: NextPageWithLayout<MenuType> = ({ data }: MenuType) => (
  <MenuView data={data} />
);

Menu.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default Menu;
