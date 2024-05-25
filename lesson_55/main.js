var postApi = 'https://jsonplaceholder.typicode.com/posts';

//stream
fetch(postApi)
    .then(function(response) {
        return response.json();

    })
    .then(function(posts) {
        console.log(posts);
        var htmlList = posts.map(function(post) {
            return `<li>   
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </li>`
        })
        var html = htmlList.join('');
        document.querySelector("#post-list").innerHTML = html;
    })
    .catch(function(err) {
        // alert('Chương trình đã xảy ra lỗi');
        console.log(err);
    });

var coursesApi = 'http://localhost:3000/courses';
fetch(coursesApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(courses) {
        console.log(courses);
    })