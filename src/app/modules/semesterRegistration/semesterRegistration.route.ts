import express from 'express';
import { SemesterRegistrationController } from './semesterRegistration.controller';

const router = express.Router();

router.post(
  '/create-semester-registration',
  SemesterRegistrationController.createSemesterRegistration,
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistration,
);

router.patch('/:id', SemesterRegistrationController.updateSemesterRegistration);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

export const semesterRegistrationRoutes = router;
