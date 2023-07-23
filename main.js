var postsAPI = 'https://jsonplaceholder.typicode.com/posts';

//Trả về stream 1 luồng dữ liệu 
fetch(postsAPI)
    .then(function(response){
        return response.json(); // nó sẽ trả lại 1 đối tượng promise
        //JSON.parse: JSON -> Javascript Type
    })
    .then(function(posts){
        var ulElementPost = document.querySelector('.post-block');
        var htmls = posts.map(function(post){
            return `<li>${post.title}</li>`;
        });
        var html = htmls.join('');
        ulElementPost.innerHTML = html;
    })
    .catch(function(err){
        console.log('Có lỗi!!!');
    })

var coursesAPI = 'http://localhost:3000/course';
fetch(coursesAPI)
    .then(function(response){
        return response.json();
    })
    .then(function(courses){
        var htmls = courses.map((course)=>{
            return `<li>
                <h2>${course.name}</h2>
                <p>${course.description}</p>
            </li>`
        });
        html = htmls.join('');
        document.querySelector('.course').innerHTML = html;
    })
    .catch((err)=> {
        console.log(err);
    })