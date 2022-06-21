import customAxios from '../../lib/axios';

export const useUpload = () => {
  const upload = async (form: FormData) => {
    const result = await customAxios.post('/upload', form);

    return result;
  };

  return {
    upload,
  };
};
