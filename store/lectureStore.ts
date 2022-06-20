import { atom } from 'recoil';
import { LectureData } from '../types/Lecture';

export const isLectureModalOpen = atom<boolean>({
  key: 'isLectureModalOpen',
  default: false,
});

export const lectureModalData = atom<LectureData>({
  key: 'lectureModalData',
  default: {
    idx: 0,
    title: '',
    content: '',
    material: '',
    startDate: new Date(),
    endDate: new Date(),
    createdAt: new Date(),
    tags: [],
    uniqueId: '',
    picture: '',
    user: {
      accessLevel: 1,
      name: '',
      profileImage: '',
      uniqueId: '',
    },
    place: {
      idx: 0,
      name: '',
      type: 0,
    },
  },
});
