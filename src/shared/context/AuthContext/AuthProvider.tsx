import React, { useState } from 'react';

import { AuthContext } from './AuthContext';

interface IAuthProviderProps {
  children: React.ReactNode;
  initialAuthState: boolean;
}

const AuthProvider: React.FC<IAuthProviderProps> = ({
  children,
  initialAuthState,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthState);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
