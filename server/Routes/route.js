import express from 'express';
import { addTask, deleteTask, editTask, getTaskById, getTasks } from '../controller/user-controller.js';

const router = express.Router();

router.get('/', getTasks);
router.post('/add', addTask);
router.get('/:id', getTaskById);
router.put('/:id', editTask);
router.delete('/:id', deleteTask);

export default router;
