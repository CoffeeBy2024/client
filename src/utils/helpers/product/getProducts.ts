import axios from 'axios';

import { ProductService } from '@/shared/api/entities';

export const getProducts = async (data: {
  id: number;
  category: CATEGORY;
}): Promise<Product[]> => {
  let products: Product[] = [];

  try {
    const response = await ProductService.findByShopCategory(data);
    products = response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return products;
};
