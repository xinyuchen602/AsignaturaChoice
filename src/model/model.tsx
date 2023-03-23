export interface User {
  id: number;
  username: string;
  email: string;
}

export interface University {
  id: number;
  name: string;
}

export interface Career {
  id: number;
  name: string;
}

export interface Course {
  id: number;
  name: string;
  avg: number;
}

export interface Review {
  id: number;
  user_id: number;
  course_id: number;
  score: number;
  text: string;
  username: string;
  name: string; // course name
}
