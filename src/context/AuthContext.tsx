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
  const selector = useSelector(userSelector);
  const dispatch = useDispatch();

  const login = async (email: string, password: string): Promise<void> => {
    setIsLoading(true);
    const result = (await loginMutation({email, password})) as LoginMutationResult;

    if (result.data && result.data.token) {
      // dispatch(
      //   userSlice.actions.setLogin({id: result.data._id, name: result.data.name, email: result.data.email, token: result.data.token}),
      // );

      // setTimeout(() => {
      //   navigation.navigate('Home');
      // }, 300);

      console.log(selector.userid);
    }
    setIsLoading(false);
  };

  // "email": "r@g.com"
  // "password": "rr",

  const logout = (): void => {
    setUserToken(null);
    setIsLoading(false);
  };

  return <AuthContext.Provider value={{login, logout, userToken, isLoading}}>{children}</AuthContext.Provider>;
};

export {AuthProvider};
