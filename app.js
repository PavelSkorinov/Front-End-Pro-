const listImages = document.querySelectorAll('.list-item-img');

listImages.forEach((item) => {
    item.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        const ulShips = e.target.parentElement.firstChild.nextSibling.firstChild.nextSibling;
        const fragmentShip = document.createDocumentFragment();
        fetch(`https://swapi.dev/api/films/${id}/`) 
        .then((response) => response.json())
        .then((data) => {
            if (data) {
                getData(data.starships).then((response) => {
                    response.forEach((res) => {
                    const liShips = document.createElement('li');
                    liShips.textContent = res.name;
                    liShips.dataset.url = res.url
                    fragmentShip.appendChild(liShips);
                    ulShips.appendChild(fragmentShip);
                    liCustomize(liShips);
                    ulCustomize(ulShips);
                    liShips.addEventListener("click", (event) => {
                        const fragmentFilms = document.createDocumentFragment();
                        const filmUrl = event.target.dataset.url;
                        const ulFilms = event.target.parentElement.parentElement.lastChild.previousSibling;
                        console.log(ulFilms);
                        fetch(filmUrl) 
                        .then((response) => response.json())
                        .then((data) => {
                            if (data) {
                                getData(data.films).then((response) => {
                                    ulShips.style.display = "none"  
                                    response.forEach((res) => {
                                    const liFilms = document.createElement('li');
                                    liFilms.textContent = res.title;
                                    fragmentFilms.appendChild(liFilms);
                                    ulFilms.appendChild(fragmentFilms);
                                    liCustomize(liFilms);
                                    ulCustomize(ulFilms);                   
                                })
                                })                
                            }
                        })
                    })
                })
                })
            }
        })                                                  
    })
});

function getData(list) {
    const requests = list.map((url) => {
        return fetch(url)
    });
    return Promise.all(requests).then((response) => {
        return Promise.all(response.map((value) => value.json()))
    })
};

function ulCustomize(ul) {
    ul.style.display = 'block';
    ul.style.paddingTop = "25%";
    ul.style.color = "#ffe500";
    ul.parentElement.style.position = 'relative';
    ul.style.position = 'absolute';
};

function liCustomize(li) {
    li.style.listStyleType = "none";
};
