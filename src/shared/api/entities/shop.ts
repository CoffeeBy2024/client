import { AxiosResponse } from 'axios';

import { noInterceptorApi } from '@/shared/api/instance';

class ShopService {
  static findAll(
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Shop[]>> {
    return noInterceptorApi.get<Shop[]>('shops', requestConfig?.config);
  }

  static findAllByCategory(
    body: CATEGORY,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Shop[]>> {
    return noInterceptorApi.get<Shop[]>(
      `shops/?category=${body}`,
      requestConfig?.config
    );
  }

  static findOneByName(
    body: string,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Shop[]>> {
    return noInterceptorApi.get<Shop[]>(
      `shops/?name=${body}`,
      requestConfig?.config
    );
  }

  static findAllProductCategories(
    body: number,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<CATEGORY[]>> {
    return noInterceptorApi.get<CATEGORY[]>(
      `shops/${body}/categories`,
      requestConfig?.config
    );
  }
}

export { ShopService };
