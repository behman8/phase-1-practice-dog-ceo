console.log('%c HI', 'color: firebrick')

const div = document.getElementById("dog-image-container");
const ul = document.getElementById("dog-breeds");

fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(resp) {
    return (resp.json())
})
.then(function(resp) {
    resp.message.forEach(cb => {
        const newImg = document.createElement('img');
        newImg.src = cb;
        div.appendChild(newImg);
    })
});

fetch('https://dog.ceo/api/breeds/list/all')
.then(function(resp) {
    return (resp.json())
})
.then(function(resp) {
    resp.message.forEach(cb => {
        const li = document.createElement('li');
        li.value = cb;
        ul.appendChild(li);
    })
})
