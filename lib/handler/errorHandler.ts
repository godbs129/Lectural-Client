import { AxiosError } from 'axios';
import toast from 'react-hot-toast';

export const errorHandler = async (
  error: AxiosError<any>
): Promise<AxiosError> => {
  if (error.response) {
    if (error.response.status === 403) {
      toast.error('권한이 없어요!', {
        position: 'top-right',
      });
    }
  }

  return error;
};
