console.log('%c HI', 'color: firebrick')

const div = document.getElementById("dog-image-container");
const ul = document.getElementById("dog-breeds");


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(function(resp) {
    resp.message.forEach(cb => {
        const newImg = document.createElement('img');
        newImg.src = cb;
        div.appendChild(newImg);
    })
});


fetch('https://dog.ceo/api/breeds/list/all')
.then(resp => resp.json())
.then(function(resp) {
    const keys = (Object.entries(resp.message))
    keys.forEach(cb => {
        const li = document.createElement('li');
        li.innerText = cb;
        ul.appendChild(li);
        li.addEventListener('click', function(e) {
            li.fontcolor("red")
        })
    })
})
