import express from 'express';
import { StudnetControllers } from './student.controller';

const router = express.Router();

router.get('/', StudnetControllers.getAllStudents);

router.get('/:studentId', StudnetControllers.getSingleStudent);

router.delete('/:studentId', StudnetControllers.deleteStudent);

export const StudentRoutes = router;
