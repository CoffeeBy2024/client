import { AxiosResponse } from 'axios';

import { noInterceptorApi } from '@/shared/api/instance';

class PhotoService {
  static findById(
    id: string,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<string>> {
    return noInterceptorApi.get<string>(`photos/${id}`, requestConfig?.config);
  }
}

export { PhotoService };
