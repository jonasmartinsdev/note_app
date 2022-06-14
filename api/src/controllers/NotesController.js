const knex = require('../database/knex')
const AppError = require('../utils/AppError')

class NotesController {

  async create(request, response) {
    const {title, description, bg_color} = request.body

     await knex('notes').insert({
      title,
      description,
      bg_color
    })

    return response.json()
  }

  async show(request, response) {
    const { id } = request.params

    const note = await knex('notes').where({id}).first()

    return response.json(note)
  }

  async update(request, response) {
    const { title, description, bg_color } = request.body
    const { id } = request.params

    const note = await knex('notes').where({id}).first()

    if(!note) {
      throw new AppError("Nota não encontrada")
    }

    note.title = title ?? note.title
    note.description = description ?? note.description
    note.bg_color = bg_color ?? note.bg_color

    await knex('notes').where({id}).update({
      title: note.title,
      description: note.description,
      bg_color: note.bg_color,
      updated_at: knex.fn.now()
    })

    return response.json()
  }

  async delete(request ,response) {
    const { id } = request.params

    await knex('notes').where({id}).delete()
 
    return response.json()
  }

  async index(request ,response) {
   const notes = await knex('notes')

   return response.json(notes)
  }


}


module.exports = NotesController;