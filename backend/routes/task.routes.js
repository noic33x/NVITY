const express = require('express');
const router = express.Router();

//import controller
const {allTask, createTask, uncompleteTask, completeTask, editTask, changeTocomplete, changeToUncomplete, deleteTask, allPriority, changeToPriority, changeToUnpriority} = require('../controller/task.controller');
const {auth} = require('../controller/user.controller');
 
//routes
//display all task
router.post('/', allTask)
//create new task
router.post('/add', createTask)
//display uncomplete task
router.post('/uncomplete', auth,  uncompleteTask)
//display complete task
router.post('/complete/', auth, completeTask)
//edit task
router.post('/edit/:id', editTask)
//complete the task
router.post('/completed/:id', changeTocomplete)
//uncomplete the task
router.post('/uncompleted/:id', changeToUncomplete)
//delete task
router.post('/delete/:id', deleteTask)
//display all priority
router.post('/priority', auth, allPriority)
//priority the task
router.post('/priority/:id', changeToPriority)
//unpriority the task
router.post('/unpriority/:id', changeToUnpriority)

module.exports = router;