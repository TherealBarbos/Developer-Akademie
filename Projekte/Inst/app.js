const posts = [
    { id: 1, title: 'Post 1', body: 'This is the first post', image: "img/image1.jpg" },
    { id: 2, title: 'Post 2', body: 'This is the second post', image: "img/image2.jpg" },
    { id: 3, title: 'Post 3', body: 'This is the third post', image: "img/image3.jpg" }
];

const container = document.getElementById('container');

for (let i = 0; i < posts.length; i++) {
    const post = posts[i];

    const postEl = document.createElement('div');
    postEl.innerHTML = `<h3>${post.title}</h3>
                        <img src="${post.image}" alt="${post.title}" width="200px" height="200px">
                        <p>${post.body}</p>`
                        

    container.appendChild(postEl);
}