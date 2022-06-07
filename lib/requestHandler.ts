import { AxiosResponse } from 'axios';
import { useLogin } from '../hooks/Login/useLogin';

export const requestHandler = async (
  response: AxiosResponse
): Promise<AxiosResponse> => {
  // const { tokenRefresh } = useLogin();

  if (response.status === 401) {
    // tokenRefresh;
  }

  return response;
};
