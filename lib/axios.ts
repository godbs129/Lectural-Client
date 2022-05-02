import axios from 'axios';
import { Token } from './token';

const customAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT,
  headers: {
    authorization: `${Token().getToken('accessToken')}`,
  },
});

export default customAxios;
