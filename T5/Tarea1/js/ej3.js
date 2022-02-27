// document.getElementById("cargar_margaritas").onclick = verMargaritas();

window.onload = inicio;

function inicio() {
    document.getElementById("cargar_gin").addEventListener("click", verGin);
    document.getElementById("cargar_mojito").addEventListener("click", verMojito);
    document.getElementById("cargar_ron").addEventListener("click", verRon);
}

function verGin(e) {
    let imageDiv = document.querySelector(".gin");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Gin")
    .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    //para que no se vuelva abrir el contenido del boton
    e.target.removeEventListener(e.type, verMargaritas);
}

function verMojito(e) {
    let imageDiv = document.querySelector(".mojito");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=mojito")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    //para que no se vuelva abrir el contenido del boton
    e.target.removeEventListener(e.type, verMojito);
}

function verRon(e) {
    let imageDiv = document.querySelector(".ron");
    let lista = document.createElement("ul");
    imageDiv.append(lista);

    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=ron")
        .then((response) => {
        if (response.ok) {
            return response.json();
        }
        })
        .then((data) => {
        for (let i = 0; i < 4; i++) {
            let imageElement = document.createElement("img");
            imageElement.setAttribute("class", "responsive-img")
            imageElement.src = data.drinks[i].strDrinkThumb;

            let elementoli = document.createElement("li");
            lista.append(elementoli);

            elementoli.append(imageElement);
        }
        })
        .catch((err) => console.log(err));

    //para que no se vuelva abrir el contenido del boton
    e.target.removeEventListener(e.type, verRon);
}
