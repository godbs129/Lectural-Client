import { atom } from 'recoil';

export const isRequestModalOpen = atom<boolean>({
  key: 'isRequestModalOpen',
  default: false,
});
