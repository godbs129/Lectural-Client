import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { AccessToken } from '../../constants/token';
import customAxios from '../../lib/axios';
import Token from '../../lib/token';
import { tokenAtom, userAtom } from '../../store/userStore';

export const useLogin = () => {
  const [token, setToken] = useRecoilState(tokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  const navigate = useRouter();

  const onClickLoginBtn = async (): Promise<string> => {
    const res = await customAxios.get(`/auth`);

    return res.data.data;
  };

  const gotoDauthLogin = async () => {
    const url = await onClickLoginBtn();

    navigate.push(`${url}`);
  };

  const login = async (code: string) => {
    const { data } = await customAxios.post(`/auth`, {
      code: code,
    });
    saveTokens(data.data.accessToken, data.data.refreshToken);
    setToken(data.data.accessToken);

    navigate.push('/');
  };

  const saveTokens = (accessToken: string, refreshToken: string) => {
    Token.saveToken('accessToken', accessToken);
    Token.saveToken('refreshToken', refreshToken);
  };

  const getUserInfo = async () => {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/user`,
      {
        headers: {
          authorization: Token.getToken(AccessToken),
        },
      }
    );
    setUser(data);
  };

  const tokenRefresh = async (refreshToken: string) => {
    const { data } = await customAxios.post('/token/refresh', {
      refreshToken: refreshToken,
    });

    console.log(data);
  };

  return {
    gotoDauthLogin,
    login,
    getUserInfo,
    tokenRefresh,
  };
};
