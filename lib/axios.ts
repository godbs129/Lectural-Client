import axios from 'axios';
import { AccessToken } from '../constants/token';
import { requestHandler } from './requestHandler';
import Token from './token';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  headers: {
    authorization: `${Token.getToken(AccessToken) as string}`,
  },
});

customAxios.interceptors.response.use(requestHandler);

export default customAxios;
