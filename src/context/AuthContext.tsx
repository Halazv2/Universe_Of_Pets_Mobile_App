import {useNavigation} from '@react-navigation/native';
import {useLoginMutation} from '../store/apiSlice';
import React, {createContext, useState, ReactNode} from 'react';
import {userSelector, userSlice} from '../store/UserSlice';
import {useSelector, useDispatch} from 'react-redux';

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
interface LoginMutationResult {
  data: {
    last_name: string;
    first_name: string;
    _id: string;
    name: string;
    email: string;
    token: string;
  };
}

const AuthProvider = ({children}: AuthProviderProps): JSX.Element => {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [userToken, setUserToken] = useState<string | null>(null);

  const [loginMutation] = useLoginMutation();
  const dispatch = useDispatch();

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    const result = (await loginMutation({email, password})) as LoginMutationResult;

    console.log(result.data);
    if (result.data && result.data.token) {
      setUserToken(result.data.token);
      dispatch(
        userSlice.actions.setLogin({
          id: result.data._id,
          first_name: result.data.first_name,
          last_name: result.data.last_name,
          email: result.data.email,
          token: result.data.token,
        }),
      );


      setTimeout(() => {
        navigation.navigate('Home');
      }, 100);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  // "email": "r@g.com"
  // "password": "rr",

  const logout = (): void => {
    setUserToken(null);
    setIsLoading(false);

    navigation.navigate('Login');
  };

  return <AuthContext.Provider value={{login, logout, userToken, isLoading}}>{children}</AuthContext.Provider>;
};

export {AuthProvider};
