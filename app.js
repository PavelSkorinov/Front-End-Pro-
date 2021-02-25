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

    loadList() {
        this.images.forEach((item) => {
            item.addEventListener('click', async (e) => {
                const id = e.target.dataset.id;
                const response =  await fetch(`https://swapi.dev/api/films/${id}/`);
                const filmsData = await response.json(); 
                const ulShips = e.target.closest('.list-item-response').firstElementChild;
                const fragmentShip = document.createDocumentFragment();
                const loadShips = await filmsData.starships;        
                const starshipsArr = this.getData(loadShips);
                starshipsArr.then((response) => {
                    response.forEach((res) => {
                        const liShips = document.createElement('li');
                        liShips.textContent = res.name;
                        liShips.dataset.url = res.url;
                        fragmentShip.appendChild(liShips);
                        ulShips.appendChild(fragmentShip);
                        ulShips.classList.add("items_clicked");
                        liShips.addEventListener("click", async (event) => {
                            const fragmentFilms = document.createDocumentFragment();
                            const filmUrl = event.target.dataset.url;
                            const ulFilms = event.target.closest('.starships').nextElementSibling;
                            const responseFilms =  await fetch(filmUrl);
                            const filmsDataList = await responseFilms.json();
                            const loadFilms = await filmsDataList.films;
                            const filmsArr = this.getData(loadFilms);
                            filmsArr.then((response) => {
                                ulShips.style.display = "none";  
                                response.forEach((res) => {
                                    const liFilms = document.createElement('li');
                                    liFilms.textContent = res.title;
                                    fragmentFilms.appendChild(liFilms);
                                    ulFilms.appendChild(fragmentFilms); 
                                    ulFilms.classList.add("items_clicked");
                                });                                                      
                            });
                        });                               
                    });
                });
            })
        });
    };    
};

const starWars = new List(
    document.querySelectorAll('.list-item-img')
);

starWars.loadList();
