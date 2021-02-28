const TOKEN_KEY = 'token';

class ToDoList {
    API_URL = 'https://todo.hillel.it';
    token = localStorage.getItem(TOKEN_KEY);
    list = document.querySelector('.list');
    notes = [];

    async authorization() {
        const data = new URLSearchParams();
        const username = document.getElementById("username").value;
        const popup = document.querySelector('.modal');
        data.append("value", username);
        const response = await fetch(`${this.API_URL}/auth/login`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    value: username
                })
            });
        const { access_token } = await response.json();
        this.token = access_token;
        localStorage.setItem(TOKEN_KEY, access_token);
        await this.getList();
        popup.style.display = 'none';
    };

    async postNote(value, priority = 1) {
        const response = await fetch(`${this.API_URL}/todo`, {
                method: "POST",
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    value,
                    priority
                 })
        });
        const data = await response.json();
        if(data.value) {
            this.notes.push(data);
        }
        return data;
    };

    async getList() {
        const response = await fetch(`${this.API_URL}/todo`, {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${this.token}`,
                    'Content-Type': 'application/json'
                }
        })
        this.notes = await response.json();

        this.notes.forEach((note) => {
            this.renderNote(note._id, note.value);
        });
    };

    renderNote(id, value) {
        const li = document.createElement("li");
        const textFragment = document.createDocumentFragment();
        textFragment.append(value);
        const changeBtn = document.createElement("button");
        changeBtn.textContent = 'Change Note';
        changeBtn.classList.add('addBtn', 'changeBtn');
        changeBtn.addEventListener("click", async (e) => {
            const newInput = document.querySelector('#username');
            const newText = document.querySelector('.popup-text');
            const popup = document.querySelector('.modal');
            const changeButton = document.querySelector('#submit');
            await this.changeNote(id, newInput.value);
            changeButton.value = 'Change';
            changeButton.onclick = function () {
                li.textContent = newInput.value;
                li.appendChild(changeBtn);
                li.appendChild(span);
                popup.style.display = 'none';
            };
            newText.textContent = 'New title';
            newInput.placeholder = 'Enter new title name';
            popup.style.display = 'block';
        });
        const span = document.createElement("span");
        const text = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(text);
        span.addEventListener('click', async (e) => {
            await this.deleteNote(id);
            const deleteLi = e.target.parentElement;
            deleteLi.remove();
        });
        textFragment.appendChild(changeBtn);
        textFragment.appendChild(span);
        li.appendChild(textFragment);
        li.addEventListener("click", async (event) => {
            const changeButton = document.querySelector('.changeBtn');
            if (event.target !== changeButton) {
                await this.setComplete(id);
                li.classList.toggle('checked');
            }
        });
        this.list.appendChild(li);
    }

    async displayNote() {
        const value = document.querySelector('#note').value;
        const response = await this.postNote(value);
        if (value === '') {
            alert("Missing text");
        } else if (response.value) {
            this.renderNote(response._id, value);
        }
    };

    async deleteNote(id) {
        return await fetch(`${this.API_URL}/todo/${id}`, {
            method: "DELETE",
            headers: {
            'Authorization': `Bearer ${this.token}`,
            'Content-Type': 'application/json'
            }
        });
    };

    async setComplete(id) {
        return await fetch(`${this.API_URL}/todo/${id}/toggle`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            }
        });
    };

    async changeNote(id, value, priority = 1) {
        const response = await fetch(`${this.API_URL}/todo/${id}`, {
            method: "PUT",
            headers: {
                'Authorization': `Bearer ${this.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                value,
                priority
            })
        });
        const data = await response.json();
        return data;
    };
}

const todo = new ToDoList();