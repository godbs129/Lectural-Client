import customAxios from '../../lib/axios';

export const useLecture = () => {
  const getTodayLecture = async () => {
    await customAxios.get(`/lecture/today`);
  };

  return {};
};
