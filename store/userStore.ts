import { atom } from 'recoil';
import { User } from '../types/User';

export const tokenAtom = atom<string>({
  key: 'tokenState',
  default: '',
});

export const userAtom = atom<User>({
  key: 'userState',
  default: {
    uniqueId: '',
    accessLevel: 1,
    name: '',
    profileImage: '',
  },
});
