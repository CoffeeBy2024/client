import { AxiosResponse } from 'axios';

import { noInterceptorApi } from '@/shared/api/instance';

class CategoryService {
  static findAll(
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Category[]>> {
    return noInterceptorApi.get<Category[]>(
      'categories',
      requestConfig?.config
    );
  }
}

export { CategoryService };
