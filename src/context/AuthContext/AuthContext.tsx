import { createContext } from 'react';

interface IAuthContextData {
  isAuthenticated: boolean;
  setIsAuthenticated: (isLoggedIn: boolean) => void;
}

const AuthContext = createContext<IAuthContextData | undefined>(undefined);

export { AuthContext };
