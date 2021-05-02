export interface UserDetails {
  _id: string;
  role: string;
  email: string;
  fullName: string;
}

export interface StudentDetails {
  className: string;
  classId: string;
  sectionName: string;
  sectionId: string;
  student: UserDetails;
}
