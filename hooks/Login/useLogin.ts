import axios from 'axios';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import customAxios from '../../lib/axios';
import { Token } from '../../lib/token';
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
    getUserInfo();
  };

  const saveTokens = (accessToken: string, refreshToken: string) => {
    Token().saveToken('accessToken', accessToken);
    Token().saveToken('refreshToken', refreshToken);
  };

  const getUserInfo = async () => {
    if (typeof window !== 'undefined') {
      const { data } = await axios.get('http://3.34.52.6:8080/auth/user', {
        headers: {
          authorization: localStorage.getItem('accessToken') as string,
        },
      });
      setUser(data);
    }
  };

  return {
    gotoDauthLogin,
    login,
    getUserInfo,
  };
};
