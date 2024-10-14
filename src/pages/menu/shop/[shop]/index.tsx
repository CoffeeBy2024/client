import { GetServerSideProps } from 'next';

import { ShopView } from '@/features/ShopView/ShopView';
import { NextPageWithLayout } from '@/pages/_app';
import { UserLayout } from '@/shared/layout';
import { getShop } from '@/utils/helpers/shop';
import { getProductCategory } from '@/utils/helpers/shop';
import { getWorkingHour } from '@/utils/helpers/working_hours/getWorkingHours';

export const getServerSideProps: GetServerSideProps<ShopPros> = async (
  context
) => {
  const shop = await getShop(context);

  const [working_hours, productCategories] = await Promise.all([
    getWorkingHour(shop.id),
    getProductCategory(shop.id),
  ]);

  return {
    props: {
      data: {
        shop,
        working_hours,
        productCategories,
      },
    },
  };
};

const ShopPage: NextPageWithLayout<ShopPros> = ({ data }: ShopPros) => (
  <ShopView data={data} />
);

ShopPage.getLayout = function getLayout(page: React.ReactElement) {
  return <UserLayout>{page}</UserLayout>;
};

export default ShopPage;
