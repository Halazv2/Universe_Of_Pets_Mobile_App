import React, {createContext, useState, ReactNode} from 'react';

interface AuthContextType {
  login: () => void;
  logout: () => void;
  userToken: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  login: () => {},
  logout: () => {},
  userToken: null,
  isLoading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = (): void => {
    setUserToken('test');
    setIsLoading(false);
  };

  const logout = (): void => {
    setUserToken(null);
    setIsLoading(false);
  };

  return <AuthContext.Provider value={{login, logout, userToken, isLoading}}>{children}</AuthContext.Provider>;
};

export {AuthProvider};
