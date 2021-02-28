const TASKS_KEY = "list";
const API_URL = 'https://todo.hillel.it';
async function onSubmit() {
    const data = new FormData();
    data.append("value", document.getElementById("name").value);
    const response = await fetch(`${API_URL}/auth/login`, { method: "post", body: data });
    console.log(response);
};
class List {
    list = []; 

    constructor(name) {
        this.name = name;
    };

    get list() {
        return this.list;
    };

    createItem(options = []) {
        const item = [{
            id: Date.now(),
            ...options
        }];
        this.list.push(item);
        this.pushToLocalStorage();
        return item;
    };

    deleteItem(index) {
        const deletedTask = this.list[index];
        this.list.splice(index, 1);
        this.pushToLocalStorage();
        return deletedTask;
    };

    changeItem(updItem) {
        const index = this.list.findIndex((el) => el.id === updItem.id);
        this.list.splice(index, 1, updItem);
        this.pushToLocalStorage();
        return this.list[index];
    };

    pushToLocalStorage() {
        localStorage.setItem(TASKS_KEY, JSON.stringify(this.list));
    };

    saveInLocalStorage() {     
        const value = localStorage.getItem(TASKS_KEY);
        if(value) {
         return JSON.parse(value);
        } else return this.list
    };

    fieldCheck(item) {
        const requiredFields = item.filter(el => Object.values(el).includes(true));
        return requiredFields.every(el => el['value'] !== undefined)
   };
};

class ToDoList extends List {

    constructor(name) {
        super(name)
    };

    createItem(titleValue) {
        const item = [{
            name: 'title',
            value: titleValue,
            require: true
        }, {
            name: 'status',
            value: "In Progress",
            require: true
        }];
        if (this.fieldCheck(item)) {
            super.createItem(item);
        } else {
            console.log("Error");
        }     
    }

    changeItem(updItem, newTitle) {
        if (this.fieldCheck(updItem) && NewTitle) {
            const changedItem = {...updItem, title: newTitle};
            return super.changeItem(changedItem);
        } else { 
            console.log('Error');
        }
    };

    setComplete(item) {
        const index = this.list.findIndex((el) => el.id === item.id);
        this.list.splice(index, 1, {
            id: item.id,
            title: item.title,
            status: "Completed" 
        });
        this.pushToLocalStorage();
        return this.list[index];
    };

    showAllTasks() {
        const itemsInProgress = this.list.filter((item) => item.status === 'In Progress')
        const itemsCompleted = this.list.length - itemsInProgress.length;
        const itemsStatus = {
            completed: itemsCompleted,
            uncompleted: itemsInProgress.length
        };
        return itemsStatus;
    };
};

class ContactList extends List {

    constructor(name) {
        super(name);
    };

    createItem(nameValue, surnameValue) {
        const item = [{
            name: 'name',
            value: nameValue,
            require: true
        }, {
            surname: 'surname',
            value: surnameValue,
            require: false
        }];
        if (this.fieldCheck(item)) {
            super.createItem(item);  
        } else {
            console.log('Error');
        };
    };

    changeItem(updItem, newName, newSurname) {
        if (this.fieldCheck(updItem) && (newName || newSurname)) {
            const changedItem = {...updItem, name: newName, surname: newSurname};
            return super.changeItem(changedItem);
        } else { 
            console.log('Error');    
        };
    };

    findByName(name) {
        const filteredName = this.list.filter((item) => item.name === name);
        return filteredName;
    };

    findBySurname(surname) {
        const filteredSurname = this.list.filter((item) => item.surname === surname);
        return filteredSurname;
    };
};

const contactList = new ContactList('First Contact List');
const taskList = new ToDoList('First todo')
contactList.createItem("Olya");
taskList.createItem("Task #1");
contactList.createItem("Anton", "Rechkov");
contactList.createItem("Andrei", "Petrov");
contactList.createItem("Anatoliy", "Klimchuk");
taskList.createItem("Task #2");
contactList.createItem("Vasya", "Pupkin");
contactList.createItem("Petya", "Dyachenko");
contactList.createItem("Anton", "Kozlovskiy");
taskList.deleteItem(1);
taskList.createItem("Task #3");
taskList.showAllTasks();
console.log(taskList);
console.log(contactList);