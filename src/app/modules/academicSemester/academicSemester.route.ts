import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlwares/validateRequest';
import { academicsemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(
    academicsemesterValidation.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllSemesters);

// router.get('/:studentId', StudnetControllers.getSingleStudent);

// router.delete('/:studentId', StudnetControllers.deleteStudent);

export const AcademicSemesterRoutes = router;
