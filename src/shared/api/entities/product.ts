import { AxiosResponse } from 'axios';

import { noInterceptorApi } from '../instance';

class ProductService {
  static findById(
    body: { shop_id: string; product_id: string },
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Product>> {
    return noInterceptorApi.get(
      `shops/${body.shop_id}/products/${body.product_id}`,
      requestConfig?.config
    );
  }

  static findByShopCategory(
    body: { id: number; category: string },
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<Product[]>> {
    return noInterceptorApi.get(
      `shops/${body.id}/products/?category=${body.category}`,
      requestConfig?.config
    );
  }
}

export { ProductService };
