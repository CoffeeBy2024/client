import { ParsedUrlQuery } from 'querystring';

import axios from 'axios';
import { GetServerSidePropsContext, PreviewData } from 'next';

import { ShopService } from '@/shared/api';

export const getShop = async (
  context: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
): Promise<Shop> => {
  const name = (<string>context.query.shop).split('_')[0];
  let shop: Shop = {} as Shop;

  try {
    const response = await ShopService.findOneByName(name);
    shop = response.data[0];
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return shop;
};
