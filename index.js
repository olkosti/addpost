const posts = document.querySelector('.posts');
const btn = document.querySelector('.post__btn');
const title = document.querySelector('#post__title');
const body = document.querySelector('#post__body');
const form = document.querySelector('.form');

function addPost(title, body) {
    const divPost = document.createElement('div');
    divPost.classList.add('post');
    posts.appendChild(divPost)

    const pTitle = document.createElement('p');
    pTitle.classList.add('post__title');
    pTitle.textContent = title;
    divPost.appendChild(pTitle);

    const pBody = document.createElement('p');
    pBody.classList.add('post__body');
    pBody.textContent = body;
    divPost.appendChild(pBody);
}

function showPost() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            body: body.value,
            userId: 1
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then((json) => {
        addPost(json.title, json.body);
    })
    .catch(err => console.log('Ошибка: ' + err));
}

btn.addEventListener('click',  function(event) {
    event.preventDefault();
    showPost();
    form.reset();
});
