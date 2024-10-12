import axios from 'axios';

import { CategoryService } from '@/shared/api';

export const getCategories = async (): Promise<Category[]> => {
  let categories: Category[] = [];

  try {
    const response = await CategoryService.findAll();
    categories = response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return categories;
};
