console.log('%c HI', 'color: firebrick')

const div = document.getElementById("dog-image-container");
const ul = document.getElementById("dog-breeds");
const a = document.querySelector("#breed-dropdown").value = 'a';
const b = document.querySelector("#breed-dropdown").value = 'b';
const c = document.querySelector("#breed-dropdown").value = 'c';
const d = document.querySelector("#breed-dropdown").value = 'd';


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(function(resp) {
    resp.message.forEach(cb => {
        const newImg = document.createElement('img');
        newImg.src = cb;
        div.appendChild(newImg);
    })
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

a.addEventListener('click', function(event) {
        
})

function listBreeds() {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(function(resp) {
        const keys = (Object.keys(resp.message));
        const startA = keys.filter(breed => breed.startsWith('a'))
        const startB = keys.filter(breed => breed.startsWith('b'))
        const startC = keys.filter(breed => breed.startsWith('c'))
        const startD = keys.filter(breed => breed.startsWith('d'))
        keys.forEach(cb => {
            const li = document.createElement('li');
            li.innerText = cb;
            ul.appendChild(li);
            li.addEventListener('click', function(e) {
                li.style.color = getRandomColor();
            });    
        })
        a.addEventListener('click', function(event) {

        })
    })
}
