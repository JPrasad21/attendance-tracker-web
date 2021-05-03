export interface UserDetails {
  _id: string;
  role: string;
  email: string;
  fullName: string;
}
export interface ClassDetails {
  className: string;
  sectionName: string;
  _id: string;
}
export interface StudentDetails extends UserDetails {
  classDetails: ClassDetails[];
  attendanceList: AttendanceDetails[];
  attendancePercentage: number;
}
export interface AttendanceDetails {
  date: Date;
  studentId: string;
  classId: string;
  status: string;
}
export interface ClassViewModel {
  className: string;
  classId: string
  sectionName: string;
  sectionId: string;
  students: UserDetails[];
  percentage: string;
}
export interface SectionDetails {
  _id: string;
  sectionName: string;
  studentId: UserDetails[];
}
