import express from 'express';
import { StudnetControllers } from './student.controller';
import validateRequest from '../../middlwares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/', StudnetControllers.getAllStudents);

router.get('/:studentId', StudnetControllers.getSingleStudent);

router.patch(
  '/:studentId',
  validateRequest(updateStudentValidationSchema),

  StudnetControllers.updateStudent,
);

router.delete('/:studentId', StudnetControllers.deleteStudent);

export const StudentRoutes = router;
