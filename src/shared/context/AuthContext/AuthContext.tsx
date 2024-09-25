import { createContext } from 'react';

import { AuthService } from '@/shared/api';

export type RegisterUserReturn = ReturnType<typeof AuthService.register>;
export type LoginUserReturn = ReturnType<typeof AuthService.login>;
export type LogoutUserReturn = ReturnType<typeof AuthService.logout>;

interface IAuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: (isLoggedIn: boolean) => void;
  registerUser: (dto: RegisterUserDto) => Promise<RegisterUserReturn>;
  user: User | null;
  setUser: (user: User) => void;
  loginUser: (dto: LoginUserDto) => Promise<LoginUserReturn>;
  logoutUser: () => Promise<LogoutUserReturn>;
  isFirstLoad: boolean;
}

const AuthContext = createContext<IAuthContextData | undefined>(undefined);

export { AuthContext };
