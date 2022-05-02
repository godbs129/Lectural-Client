export const Token = () => {
  const getToken = (key: string): string | undefined => {
    let token;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem(key) as string;
    }

    return token;
  };

  const saveToken = (key: string, value: string): void => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  };

  return { getToken, saveToken };
};
