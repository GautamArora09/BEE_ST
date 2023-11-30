const express = require('express');
const { createTask, getTask, updateTask, deleteTask } = require('../controllers/books');

const router = express.Router();



router.route('/').post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);


module.exports = router;