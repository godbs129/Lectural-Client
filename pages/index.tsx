import type { NextPage } from 'next';
import MainPage from '../components/MainPage/MainPage';
import { Toaster } from 'react-hot-toast';

const Home: NextPage = () => {
  return (
    <>
      <Toaster />
      <MainPage />
    </>
  );
};

export default Home;
