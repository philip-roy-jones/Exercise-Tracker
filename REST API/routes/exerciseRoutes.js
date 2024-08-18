import express from 'express';
import * as exerciseController from '../controllers/exerciseController.js';

const router = express.Router()

router.post('/exercises', exerciseController.createExercise)
router.get('/exercises', exerciseController.readManyExercises)
router.get('/exercises/:_id', exerciseController.readByIdExercise)
router.put('/exercises/:_id', exerciseController.updateExercise)
router.delete('/exercises/:_id', exerciseController.deleteExercise)

export default router;