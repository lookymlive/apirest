console.log("Hola mundo");

const URL = "https://api.thecatapi.com/v1/images/search";

fetch(URL)
    .then(response => response.json())
    .then(data => {
        console.log(data[0].url);
        const img = document.querySelector("img");
        img.src = data[0].url;
    })
    