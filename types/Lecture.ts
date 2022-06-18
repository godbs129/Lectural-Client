import { Place } from './Place';
import { User } from './User';

export interface Tag {
  idx: number;
  name: string;
  lectureIdx: number;
}

export interface LectureData {
  idx: number;
  title: string;
  content: string;
  material: string;
  tags: Tag[];
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  uniqueId: string;
  picture: string;
  user: User;
  place: Place;
}
