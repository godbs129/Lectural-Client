import customAxios from '../../lib/axios';

export const useRequest = () => {
  const getRequests = async () => {
    const requests = await customAxios.get('/request');

    return requests;
  };

  return {
    getRequests,
  };
};
