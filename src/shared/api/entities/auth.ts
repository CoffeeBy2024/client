import { AxiosResponse } from 'axios';

import { api, noInterceptorApi } from '@/shared/api/instance';

class AuthService {
  static register(
    body: RegisterUserDto,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<RegisterUserResponse>> {
    return api.post<RegisterUserResponse>(
      'auth/register',
      body,
      requestConfig?.config
    );
  }

  static login(
    body: LoginUserDto,
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<LoginUserResponse>> {
    return api.post<LoginUserResponse>(
      'auth/login',
      body,
      requestConfig?.config
    );
  }

  static logout(
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<LogoutResponse>> {
    return api.get<LogoutResponse>('auth/logout', requestConfig?.config);
  }

  static refreshTokens(
    requestConfig?: AxiosRequestConfig
  ): Promise<AxiosResponse<RefreshTokensResponse>> {
    return noInterceptorApi.get<RefreshTokensResponse>(
      `auth/refresh-tokens`,
      requestConfig?.config
    );
  }
}

export { AuthService };
