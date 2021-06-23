console.log('%c HI', 'color: firebrick')

let breeds = []

document.addEventListener('DOMContentLoaded', function (){
    fetchDogs()
    listBreeds()
    dropdownEventListener()
})
const div = document.getElementById("dog-image-container");
const a = document.querySelector("#breed-dropdown").value = 'a';
const b = document.querySelector("#breed-dropdown").value = 'b';
const c = document.querySelector("#breed-dropdown").value = 'c';
const d = document.querySelector("#breed-dropdown").value = 'd';
const ul = document.getElementById("dog-breeds");
function fetchDogs() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(function(resp) {
        resp.message.forEach(cb => {
            const newImg = document.createElement('img');
            newImg.src = cb;
            div.appendChild(newImg);
        })
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function listBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(function(resp) {
        breeds = (Object.keys(resp.message));
        breeds.forEach(breed => {
            addBreedToDom(breed)   
         })
    })
}

function addBreedToDom(breed) {
    const li = document.createElement('li');
    li.innerText = breed;
    ul.appendChild(li);
    li.addEventListener('click', function(e) {
        li.style.color = getRandomColor();
    })
}

function dropdownEventListener() {
    const choice = document.querySelector("#breed-dropdown")
    choice.addEventListener('change', function(event) {
        filterBreed(event.target.value)
    })
}

function filterBreed(letter) {
    const result = breeds.filter(breed => breed.startsWith(letter))
    updateBreedList(result)
}

function updateBreedList(allBreeds) {
    ul.innerHTML = ' '
    allBreeds.forEach(breed => {
        addBreedToDom(breed)
    })
}