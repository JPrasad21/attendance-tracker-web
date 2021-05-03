export interface UserDetails {
  _id: string;
  role: string;
  email: string;
  fullName: string;
}
export interface ClassDetails {
  className: string;
  sectionName: string;
  percentage: number;
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
export interface SectionDetails {
  _id: string;
  sectionName: string;
  studentId: UserDetails[];
}
