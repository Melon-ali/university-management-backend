import express from 'express';
import { FacultyControllers } from './faculty.controller';
import validateRequest from '../../middlwares/validateRequest';
import { updateFacultyValidationSchema } from './faculty.validation';
import auth from '../../middlwares/auth';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequest(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', auth(), FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;