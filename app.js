const listImages = document.querySelectorAll('.list-item-img');

const xhr = new XMLHttpRequest();

listImages.forEach((item) => {
    item.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        xhr.open('GET', `https://swapi.dev/api/films/${id}/`);
        xhr.send();
        xhr.onload = function () {
            if (xhr.response) {
                const response = JSON.parse(xhr.response);
                if (Array.isArray(response.starships)) {
                    const ul = e.target.parentElement.firstChild.nextSibling;
                    const fragment = document.createDocumentFragment();
                    const ships = [];
                    response.starships.forEach((link) => {
                        const li = document.createElement('li');
                        li.innerHTML = `<span>${link}</span>`;
                        fragment.appendChild(li);
                        // const xhrStar = new XMLHttpRequest();
                        // xhrStar.open('GET', link);
                        // xhrStar.send();
                        // xhrStar.onload = () => {
                        //     if(xhrStar.response) {
                        //         const data = JSON.parse(xhrStar.response);
                        //         ships.push(data);
                        //     }
                        // }
                    })
                    // if (ships.length) {
                    //     ships.forEach((data) => {
                    //         const li = document.createElement('li');
                    //         li.innerHTML = `<span>${data.name}</span>`;
                    //         fragment.appendChild(li);
                    //     })
                        ul.appendChild(fragment);
                        ul.style.display = 'block';
                        ul.parentElement.style.position = 'relative';
                        ul.style.position = 'absolute'
                        ul.style.zIndex = '5';

                    // }
                }
            }
        };
    })
})

