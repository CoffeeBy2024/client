import axios from 'axios';

import { PhotoService } from '@/shared/api';

export const getPhoto = async (id: string): Promise<string> => {
  let photo: string = '';

  try {
    const response = await PhotoService.findById(id);
    photo = response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return photo;
};
