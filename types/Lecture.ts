import { Place } from './Place';
import { User } from './User';

export interface LectureData {
  idx: number;
  title: string;
  content: string;
  material: string;
  startDate: Date;
  endDate: Date;
  createdAt: Date;
  uniqueId: string;
  picture: string;
  user: User;
  place: Place;
}
