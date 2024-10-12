import axios from 'axios';
import React from 'react';

import { AuthService } from '@/shared/api';

import { AuthContext } from './AuthContext';
import type {
  LoginUserReturn,
  LogoutUserReturn,
  RegisterUserReturn,
} from './AuthContext';

interface IAuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [user, setUser] = React.useState<User | null>(null);
  const [isFirstLoad, setIsFirstLoad] = React.useState<boolean>(true);

  const checkAuth = async () => {
    try {
      const response = await AuthService.refreshTokens();
      localStorage.setItem('accessToken', response.data.accessToken);
      setIsAuthenticated(true);
      setUser(response.data.user);
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Axios Error:', err);
      } else {
        console.error('Unexpected Error:', err);
      }
    } finally {
      setIsFirstLoad(false);
    }
  };

  React.useEffect(() => {
    checkAuth();
  }, []);

  const registerUser = React.useCallback(
    async (dto: RegisterUserDto): Promise<RegisterUserReturn> => {
      const response = await AuthService.register(dto);
      setUser(response.data);
      return response;
    },
    []
  );

  const loginUser = React.useCallback(
    async (dto: LoginUserDto): Promise<LoginUserReturn> => {
      const response = await AuthService.login(dto);
      localStorage.setItem('accessToken', response.data.accessToken);
      setIsAuthenticated(true);
      setUser(response.data.user);
      return response;
    },
    []
  );

  const logoutUser = React.useCallback(async (): Promise<LogoutUserReturn> => {
    const response = await AuthService.logout();
    setIsAuthenticated(false);
    localStorage.removeItem('accessToken');
    setUser(null);
    return response;
  }, []);

  const contextValue = React.useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
      registerUser,
      user,
      setUser,
      loginUser,
      logoutUser,
      isFirstLoad,
    }),
    [
      isAuthenticated,
      setIsAuthenticated,
      registerUser,
      user,
      setUser,
      loginUser,
      logoutUser,
      isFirstLoad,
    ]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
