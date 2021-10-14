'use strict'

class TaskController {
    index({ view }) {

        const tasks = [
            {title: 'Task One', body: 'This is task one'},
            {title: 'Task Two', body: 'This is task two'},
        ]


        return view.render('task', {
            title: 'Your Tasks',
            tasks: tasks,
        })
    }
}

module.exports = TaskController
