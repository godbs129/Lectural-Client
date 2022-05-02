export default (key: string) => {
  if (typeof window !== 'undefined') {
    return new URLSearchParams(window.location.search).get(key);
  }
};
