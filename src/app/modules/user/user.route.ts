import express, { NextFunction, Request, Response } from 'express';
import { UserControllers } from './user.controller';
import { createStudentValidationSchema } from '../student/student.validation';
import validateRequest from '../../middlwares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
