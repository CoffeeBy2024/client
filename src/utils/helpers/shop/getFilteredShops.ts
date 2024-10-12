import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';

import { ShopService } from '@/shared/api';

export const getFilteredShops = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<Shop[]> => {
  const { category, name } = context.query;
  let shops: Shop[] = [];

  try {
    if (category) {
      const response = await ShopService.findAllByCategory(
        category as CATEGORY
      );
      shops = response.data;
    } else {
      if (name) {
        const response = await ShopService.findOneByName(name as string);
        shops = response.data;
      } else {
        const response = await ShopService.findAll();
        shops = response.data;
      }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return shops;
};
