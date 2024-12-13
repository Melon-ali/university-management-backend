import express from 'express';
import { StudnetControllers } from './student.controller';
import validateRequest from '../../middlwares/validateRequest';
import { updateStudentValidationSchema } from './student.validation';

const router = express.Router();

router.get('/', StudnetControllers.getAllStudents);

router.get('/:id', StudnetControllers.getSingleStudent);

router.patch(
  '/:id',
  validateRequest(updateStudentValidationSchema),

  StudnetControllers.updateStudent,
);

router.delete('/:id', StudnetControllers.deleteStudent);

export const StudentRoutes = router;
