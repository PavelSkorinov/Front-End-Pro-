const TASKS_KEY = "tasks";
class List {
    tasks = []; 

    constructor(name) {
        this.name = name;
    };

    get tasks() {
        const value = localStorage.getItem(TASKS_KEY);
        if(value) {
         return JSON.parse(value);
        }
        return this.tasks;
    };

    createTask(title) {
        let task = {
            id: Date.now(),
            title: title,
            status: 'In Progress'
        };
        this.tasks.push(task);
        this.toLocalStorage();
        return task;
    };

    deleteTask(index) {
        let deletedTask = this.tasks[index];
        this.tasks.splice(index, 1);
        this.toLocalStorage();
        return deletedTask;
    };

    changeTask(updTask, newTitle) {
        let index = this.tasks.findIndex((el) => el.id === updTask.id);
        console.log(updTask)
        this.tasks.splice(index, 1, {
            id: updTask.id,
            title: newTitle,
            status: updTask.status  
        });
        this.toLocalStorage();
        return this.tasks[index];
    };

    toLocalStorage() {     
        localStorage.setItem(TASKS_KEY, JSON.stringify(this.tasks));
    };
};

class ToDoList extends List {

    constructor(name) {
        super(name)
    };

    setComplete(task) {
        let index = this.tasks.findIndex((el) => el.id === task.id);
        this.tasks.splice(index, 1, {
            id: task.id,
            title: task.title,
            status: "Completed" 
        });
        this.toLocalStorage();
        return this.tasks[index];
    };

    showAllTasks() {
        const tasksInProgress = this.tasks.filter((task) => task.status === 'In Progress')
        const tasksCompleted = this.tasks.length - tasksInProgress.length;
        const taskStatus = {
            completed: tasksCompleted,
            uncompleted: tasksInProgress.length
        };
        return taskStatus;
    };
};

class ContactList extends List {

    constructor(name) {
        super(name);
    };

    findByTitle(title) {
        const filteredValue = this.tasks.filter((task) => task.title === title)
        return filteredValue;
    }
};

const contactList = new ContactList('First Contact List');
const taskList = new ToDoList('First todo')
taskList.createTask("Task #1");
contactList.createTask("Anton Sukhaiev");
contactList.createTask("Zdes mojet byt vasha reklama");
contactList.createTask("Andrei Petrov");
contactList.createTask("Anatoliy Klimchuk");
taskList.createTask("Task #2");
contactList.createTask("Zdes mojet byt vasha reklama");
contactList.createTask("Vasya Pupkin");
contactList.createTask("Petya Dyachenko");
contactList.createTask("Zdes mojet byt vasha reklama");
contactList.createTask("Oleg Kozlovskiy");
taskList.deleteTask(1);
taskList.createTask("Task #3");
taskList.changeTask(taskList.tasks[0], "Task321312321");
taskList.setComplete(taskList.tasks[0], "Task321312321");
taskList.showAllTasks();
console.log(taskList);
console.log(contactList.findByTitle("Zdes mojet byt vasha reklama"));
