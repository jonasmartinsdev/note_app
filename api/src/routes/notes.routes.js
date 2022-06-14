const { Router } = require('express')
const NotesController = require('../controllers/NotesController')

const notesController =  new NotesController()
const notesRoutes = Router()

notesRoutes.post('/', notesController.create)
notesRoutes.put('/:id', notesController.update)
notesRoutes.delete('/:id', notesController.delete)
notesRoutes.get('/', notesController.index)
notesRoutes.get('/:id', notesController.show)


module.exports = notesRoutes