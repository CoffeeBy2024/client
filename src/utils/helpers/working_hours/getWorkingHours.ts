import axios from 'axios';

import { WorkingHoursService } from '@/shared/api';

export const getWorkingHours = async (
  shopIds: number[]
): Promise<WorkingHours[][]> => {
  let working_hours: WorkingHours[][] = [];

  try {
    const results = await Promise.all(
      shopIds.map((id) => WorkingHoursService.findAll(id))
    );
    working_hours = results.map((result) => result.data);
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return working_hours;
};

export const getWorkingHour = async (id: number): Promise<WorkingHours[]> => {
  let working_hours: WorkingHours[] = [];

  try {
    const response = await WorkingHoursService.findAll(id);
    working_hours = response.data;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error('Status:', err.response?.status);
      console.error('Message:', err.message);
    } else {
      console.error('Unexpected Error:', err);
    }
  }

  return working_hours;
};
