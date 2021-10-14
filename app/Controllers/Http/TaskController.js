'use strict'

const Task = use('App/Models/Task')
const {validateAll} = use('Validator')

class TaskController {
    async index({ view }) {

        const tasks = await Task.all()

        return view.render('tasks', {
            title: 'Latest Tasks',
            tasks: tasks.toJSON()
        })
    }

    async store({request, response, session}) {

        const validation = await validateAll(request.all(), {
            title: 'required|min:5|max:140',
            body: 'required|min:10'
        })

        if(validation.fails()) {
            session.withErrors(validation.messages()).flashAll()
            return response.redirect('back')
        }

        const task = new Task()

        task.titulo = request.input('title')
        task.body = request.input('body')
        await task.save()   

        session.flash({notifications: 'Task Addes'})

        return response.redirect('/tasks')
    }
}

module.exports = TaskController
