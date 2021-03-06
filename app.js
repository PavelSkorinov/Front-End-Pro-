class List {
    ships = new Map();

    constructor(images) {
        this.images = images
    };

    getData(list) {            
        const requests = list.map((url) => {  
            return fetch(url);
        });

        return Promise.all(requests).then((response) => {
            const load = Promise.all(response.map((value) => value.json()));
            return load;
        });       
    };

    async loadData(url) {
        const response =  await fetch(url);
        return  await response.json();
    };

    loadListShips() {
        this.images.forEach((item) => {
            item.addEventListener('click', async (e) => {
                const id = e.target.dataset.id;
                const filmsData = await this.loadData(`https://swapi.dev/api/films/${id}/`);
                const ulShips = e.target.closest('.list-item-response').firstElementChild;
                const fragmentShip = document.createDocumentFragment();
                const loadShips = await filmsData.starships;        
                const starshipsArr = this.getData(loadShips);
                starshipsArr.then((response) => {
                    response.forEach((res) => {
                        const liShips = document.createElement('li');
                        liShips.textContent = res.name;
                        liShips.dataset.url = res.url;
                        this.renderList(ulShips, liShips, fragmentShip);
                        this.loadListFilms(liShips, ulShips);
                    });
                });
            })
        });
    };

    loadListFilms(li, ul) {
        li.addEventListener("click", async (event) => {
            const fragmentFilms = document.createDocumentFragment();
            const filmUrl = event.target.dataset.url;
            const ulFilms = event.target.closest('.starships').nextElementSibling;
            const filmsDataList = await this.loadData(filmUrl);
            const loadFilms = await filmsDataList.films;
            const filmsArr = this.getData(loadFilms);
            filmsArr.then((response) => {
                ul.style.display = "none";
                response.forEach((res) => {
                    const liFilms = document.createElement('li');
                    liFilms.textContent = res.title;
                    this.renderList(ulFilms, liFilms, fragmentFilms);
                });
            });
        });
    }

    renderList(ul, li, fragment) {
        fragment.appendChild(li);
        ul.appendChild(fragment);
        ul.classList.add("items_clicked");
    };
}

const starWars = new List(
    document.querySelectorAll('.list-item-img')
);

starWars.loadListShips();
