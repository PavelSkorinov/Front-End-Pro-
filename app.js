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
                    ul.classList.add("starhips_clicked");
                    response.starships.forEach((link) => {
                        const xhrStar = new XMLHttpRequest();
                        xhrStar.open('GET', link);
                        xhrStar.onreadystatechange  = () => {
                            if(xhrStar.readyState === XMLHttpRequest.DONE && xhrStar.status === 200) {
                                const data = JSON.parse(xhrStar.response);
                                const li = document.createElement('li');
                                li.textContent = data.name;
                                ul.appendChild(li);
                            };
                        };
                        xhrStar.send();
                    });
                };
            };
        };
    });
});