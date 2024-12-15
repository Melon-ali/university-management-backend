import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { User } from './user.model';

const findLastStudentId = async () => {
  const lastStudent = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();

  //2030 01   0001
  return lastStudent?.id ? lastStudent.id : undefined;
};

export const generateStudentId = async (payload: TAcademicSemester) => {
  // first time 0000
  //0001  => 1
  let currentId = (0).toString();

  const lastStudentId = await findLastStudentId();
  // 2030 01 0001
  const lastStudentSemesterCode = lastStudentId?.substring(4, 6); // 01
  const lastStudentYear = lastStudentId?.substring(0, 4); // 2030
  const currentSemesterCode = payload.code;
  const currentYear = payload.year;

  // যদি last student id থাকে এবং  যদি lastStudentSemesterCode এর সাথে currentSemesterCode টা মিলে যাই এবং এবং (&&) lastStudentYear এর সাথে বর্তমান year টা যদি মিলে যাই তাহলে আমরা 1 যোগ করাবো না হলে যোগ করাবো না /

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId.substring(6); // 0001
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};

export const findLastFacultyId = async () => {
  const lastFaculty = await User.findOne(
    {
      role: 'faculty',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createAt: -1,
    })
    .lean();

  return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generateFacultyId = async () => {
  let currentId = (0).toString();

  const lastFacultyId = await findLastFacultyId();

  if (lastFacultyId) {
    currentId = lastFacultyId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `F-${incrementId}`;

  return incrementId;
};

export const findLastAdminId = async () => {
  const lastAdmin = await User.findOne(
    {
      role: 'admin',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createAt: -1,
    })
    .lean();

  return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
  let currentId = (0).toString();

  const lastAdminId = await findLastFacultyId();

  if (lastAdminId) {
    currentId = lastAdminId.substring(2);
  }

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `A-${incrementId}`;

  return incrementId;
};