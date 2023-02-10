export interface Creator {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  password: string;
}

export interface Count {
  questions: number;
}

export interface Quiz {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  description: string;
  creatorId: number;
  title: string;
  isPublic: boolean;
  isDeleted: boolean;
  urlImg: string;
  creator: Creator;
  _count: Count;
}
