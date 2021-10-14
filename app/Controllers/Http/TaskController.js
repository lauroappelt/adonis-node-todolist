'use strict'

const Task = use('App/Models/Task')

class TaskController {
    async index({ view }) {

        const tasks = await Task.all()

        return view.render('tasks', {
            title: 'Latest Tasks',
            tasks: tasks.toJSON()
        })
    }

    async store({request, response, session}) {
        const task = new Task()

        task.titulo = request.input('title')
        task.body = request.input('body')

        await task.save()   

        session.flash({notifications: 'Task Addes'})

        return response.redirect('/tasks')
    }
}

module.exports = TaskController
