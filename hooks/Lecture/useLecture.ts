import customAxios from '../../lib/axios';

export const useLecture = () => {
  const getTodayLecture = async () => {
    await customAxios.get(`/lecture/today`);
  };

  const getAllLectures = async () => {
    const lectures = await customAxios.get(`/lecture/`);

    return lectures.data.data;
  };

  const deleteLecture = async (idx: number) => {
    const response = await customAxios.delete(`/lecture/${idx}`);

    return response.status;
  };

  return {
    getAllLectures,
    deleteLecture,
  };
};
