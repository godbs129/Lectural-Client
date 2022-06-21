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

  const addLecture = async (lecture: any, place: number) => {
    let result;
    if (place !== 0) {
      result = await customAxios.post('/lecture', {
        ...lecture,
        place: place,
      });
    } else {
      result = await customAxios.post('/lecture', {
        ...lecture,
      });
    }

    return result.data;
  };

  return {
    getAllLectures,
    deleteLecture,
    addLecture,
  };
};
