import { AxiosResponse } from 'axios';

import { noInterceptorApi } from '../instance';

class WorkingHoursService {
  static findAll(
    body: number,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<WorkingHours[]>> {
    return noInterceptorApi.get<WorkingHours[]>(
      `working_hours/${body}`,
      requestConfig?.config
    );
  }
}

export { WorkingHoursService };
