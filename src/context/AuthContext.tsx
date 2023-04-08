import {useNavigation} from '@react-navigation/native';
import {useLoginMutation} from '../store/apiSlice';
import React, {createContext, useState, ReactNode} from 'react';
interface AuthContextType {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  userToken: string | null;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType>({
  login: async (email: string, password: string) => {},
  logout: () => {},
  userToken: null,
  isLoading: true,
});

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const [loginMutation] = useLoginMutation();

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    const result = await loginMutation({email, password});

    if (result.data) {
      console.log(result.data);
      setUserToken(result.data.token);
      setIsLoading(false);
      navigation.navigate('Home');
    }
    setIsLoading(false);
  };

  const logout = (): void => {
    setUserToken(null);
    setIsLoading(false);
  };

  return <AuthContext.Provider value={{login, logout, userToken, isLoading}}>{children}</AuthContext.Provider>;
};

export {AuthProvider};
