// console.log('%c HI', 'color: firebrick')

const init = () => {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then( data => addImages(data));

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then( data => addBreeds(data));
}

function addImages(data){
    const imagesHolder = document.getElementById("dog-image-container");
    data.message.forEach( url => {
        const image = document.createElement('img');
        image.src = url;
        image.width = 200;
        image.height = 200;
        
        imagesHolder.appendChild(image);
    });
}

function addBreeds(breeds){
    const breedsHolder = document.getElementById("dog-breeds");
    
    for (let breedKey in breeds.message){
        const li = document.createElement('li');
        li.innerText = breedKey;

        breedsHolder.appendChild(li);
    }
}

function changeColor(event){
    event.target.style.color = 'red';
}

document.addEventListener("DOMContentLoaded", init)