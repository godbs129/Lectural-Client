import axios from 'axios';
import { AccessToken } from '../constants/token';
import { errorHandler } from './handler/errorHandler';
import { responesHandler } from './handler/responseHandler';
import Token from './token';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  headers: {
    authorization: `${Token.getToken(AccessToken) as string}`,
  },
});

customAxios.interceptors.response.use(responesHandler, errorHandler);

export default customAxios;
