const express = require('express')

const todoCtrl = require('../controllers/todo-ctrl')
const Todo = require('../models/todo-model');
const router = express.Router()

router.post('/', todoCtrl.createItem)
router.get('/', todoCtrl.getItems)
router.put('/:id',todoCtrl.updateItem)
router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({"_id": req.params.id})
      .then(data => res.json(data))
      .catch(next)
  })


module.exports = router
