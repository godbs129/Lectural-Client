import customAxios from '../../lib/axios';

export const useRequest = () => {
  const getRequests = async () => {
    const requests = await customAxios.get('/request');

    return requests;
  };

  const addRequest = async (content: string) => {
    const response = await customAxios.post('/request', {
      content: content,
    });

    return response;
  };

  return {
    getRequests,
    addRequest,
  };
};
