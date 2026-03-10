import { Timestamp } from 'firebase/firestore';

export interface TaskDto {
  id: string;
  title: string;
  description: string;
  createdAt: Timestamp;
}