const posts = document.querySelector('.posts');
const btn = document.querySelector('.post__btn');
const title = document.querySelector('#post__title');
const body = document.querySelector('#post__body');
const form = document.querySelector('.form');

function addPost() {
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
        const divPost = document.createElement('div');
        divPost.classList.add('post');
        posts.appendChild(divPost)

        const pTitle = document.createElement('p');
        pTitle.classList.add('post__title');
        pTitle.textContent = json.title;
        divPost.appendChild(pTitle);

        const pBody = document.createElement('p');
        pBody.classList.add('post__body');
        pBody.textContent = json.body;
        divPost.appendChild(pBody);
    })
    .catch(err => console.log('Ошибка: ' + err));
}

btn.addEventListener('click',  function(event) {
    event.preventDefault();
    addPost();
    form.reset();
});
