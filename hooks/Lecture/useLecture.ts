import customAxios from '../../lib/axios';

export const useLecture = () => {
  const getTodayLecture = async () => {
    const response = await customAxios.get(`/lecture/today`);

    return response.data;
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

  const adminDelete = async (idx: number) => {
    const response = await customAxios.post(`/lecture/inapposite/${idx}`, {
      reason: '부적절',
    });

    return response.status;
  };

  return {
    getAllLectures,
    getTodayLecture,
    deleteLecture,
    addLecture,
    adminDelete,
  };
};
