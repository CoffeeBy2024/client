import axios from 'axios';

import { ShopService } from '@/shared/api';

export const getProductCategories = async (
  shopIds: number[]
): Promise<CATEGORY[][]> => {
  let productCategories: CATEGORY[][] = [];

  try {
    const results = await Promise.all(
      shopIds.map((id) => ShopService.findAllProductCategories(id))
    );
    productCategories = results.map((result) => result.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return productCategories;
};

export const getProductCategory = async (id: number): Promise<CATEGORY[]> => {
  let productCategories: CATEGORY[] = [];

  try {
    const response = await ShopService.findAllProductCategories(id);
    productCategories = response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return productCategories;
};
