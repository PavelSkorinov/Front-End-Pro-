var toDoList = {
    _tasks: [],
    get tasks() {
        return this._tasks;
    },
    createTask(title) {
        let task = {
            id: Date.now(),
            title: title,
            status: 'In Progress'
        };
        this._tasks.push(task);
        return task;
    },
    deleteTask(index) {
        let deletedTask = this._tasks[index];
        this._tasks.splice(index, 1);
        return deletedTask;
    },
    changeTask(updTask, newTitle) {
        let index = this.tasks.findIndex((el) => el.id === updTask.id);
        this._tasks.splice(index, 1, {
            id: updTask.id,
            title: newTitle,
            status: updTask.status  
        });
        return this._tasks[index];
    },
    setComplete(task) {
        let index = this.tasks.findIndex((el) => el.id === task.id);
        this._tasks.splice(index, 1, {
            id: task.id,
            title: task.title,
            status: "Completed" 
        });
        return this._tasks[index];
    }
};

Object.defineProperty(toDoList, '_tasks', {
    writable: false,
    enumerable: false,
    configurable: false
});

toDoList.createTask('Pahan');

toDoList.deleteTask(0);

toDoList.createTask('Anton');

toDoList.changeTask(toDoList.tasks[0], "Hleb");

toDoList.setComplete(toDoList.tasks[0]);

console.log(toDoList.tasks);





