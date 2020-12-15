let toDoList = {
    _tasks: [],
    get tasks() {
        return this._tasks;
    },
    createTask(title) {
        const value = title.trim();
        const existingValue = this.tasks.find((el) => el.title === value);
        if (value) {
            if (existingValue) {
                return console.log("Error, this task is already exist")
            } else {
                let task = {
                    id: Date.now(),
                    title: value,
                    status: 'In Progress'
                };
                this._tasks.push(task);
                return task;
            };
        };
    },
    deleteTask(index, confirm) {
        const deletedTask = this._tasks[index];
        if (confirm()) {
            this._tasks.splice(index, 1);
        };
        return deletedTask;
    },
    changeTask(updTask, newTitle, confirm) {
        const index = this.tasks.findIndex((el) => el.id === updTask.id);
        const existingValue = this.tasks.find((el) => el.title === newTitle);
        if (existingValue) {
            return console.log("Error, this task is already exist")
        } else if (confirm() && existingValue === false) {
            this._tasks.splice(index, 1, {
                id: updTask.id,
                title: newTitle,
                status: updTask.status  
            });
            return this._tasks[index];
        }
    },
    setComplete(task) {
        let index = this.tasks.findIndex((el) => el.id === task.id);
        this._tasks.splice(index, 1, {
            id: task.id,
            title: task.title,
            status: "Completed" 
        });
        return this._tasks[index];
    },
    showAllTasks() {
        let tasksInProgress = this._tasks.filter((task) => task.status === 'In Progress')
        let tasksCompleted = this.tasks.length - tasksInProgress.length;
        const taskStatus = {
            completed: tasksInProgress.length,
            uncompleted: tasksCompleted
        };
        return taskStatus;
    }
};

Object.defineProperty(toDoList, '_tasks', {
    writable: false,
    enumerable: false,
    configurable: false
});

toDoList.createTask('Pahan');
toDoList.createTask('Anton');
toDoList.createTask('Mana');
toDoList.createTask('Tanya');
toDoList.createTask('Anya');
toDoList.createTask('Galya');
toDoList.createTask('Anton');

console.log(toDoList.tasks);

toDoList.setComplete(toDoList.tasks[0]);

toDoList.changeTask(toDoList.tasks[4], 'Anton', confirm("Are you sure?"));

console.log(toDoList.showAllTasks());











