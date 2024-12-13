import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { CoureseServices } from './course.service';
import sendResponse from '../../utils/sendResponse';

const createCourse = catchAsync(async (req, res) => {
  //   const { passowrd, student: studentData } = req.body;

  const result = await CoureseServices.createCourseIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is created succesfully',
    data: result,
  });
});

const getAllCourses = catchAsync(async (req, res) => {
  const result = await CoureseServices.getAllCoursesFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course are retrieved succesfully',
    data: result,
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CoureseServices.getSingleCoursesFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is retrieved succesfully',
    data: result,
  });
});

const deleteCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CoureseServices.deleteCourseFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Course is deleted succesfully',
    data: result,
  });
});

// const updateAcademicFaculty = catchAsync(async (req, res) => {
//   const { facultyId } = req.params;
//   const result = await AcademicFacultyServices.updateacademicFacultyIntoDB(
//     facultyId,
//     req.body,
//   );

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: 'Academic faculty is updated succesfully',
//     data: result,
//   });
// });

export const AcademicFacultyControllers = {
  createCourse,
  getAllCourses,
  getSingleCourse,
  deleteCourse,
};
