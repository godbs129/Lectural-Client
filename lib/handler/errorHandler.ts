import { AxiosError } from 'axios';
import customAxios from '../axios';
import Token from '../token';

export const errorHandler = async (
  error: AxiosError<any>
): Promise<AxiosError> => {
  // let refreshToken = Token.getToken('refreshToken');

  console.log(123);
  console.log(error.response?.status);

  // if (error.response?.data) {
  // if (error.response.data.message === '만료된 토큰') {
  // const res = await customAxios.post('/token/refresh', {
  //   refreshToken: refreshToken,
  // });
  // console.log(res.data);
  // }
  // }

  return error;
};
