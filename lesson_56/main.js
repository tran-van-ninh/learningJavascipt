//TOdo json-server: Api server (Fake) / Mock Api ==> OK
//!CRUD
/**
 * ! Create : Tạo mới       --> POST
 * ! Read : Lấy dữ liệu     --> GET
 * ! Update : Chỉnh sửa     --> PUT/ PATCH
 * ! Delete : xóa           --> DELETE
 */


//Todo postMan

var coursesApi = 'http://localhost:3000/courses'


function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

start()

function getCourses(callBack) {
    fetch(coursesApi)
        .then(function(response) {
            return response.json();
        })
        .then(callBack)
}

function createCourse(data, callBack) {
    var option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi, option)
        .then(function(response) {
            return response.json();
        })
        .then(callBack);
}

function deleteCourse(id) {
    var option = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },

    }
    fetch(coursesApi + "/" + id, option)
        .then(function(response) {
            return response;
        })
        .then(function() {
            var courseItem = document.querySelector(".course-item-" + id);
            if (courseItem) {
                courseItem.remove();
            }
        })
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses')
    var htmls = courses.map(function(course) {
        return `<li class = "course-item-${course.id}">
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                    <button onclick = "deleteCourse(${course.id})">Xóa</button>
                </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        var formData = {
            name: name,
            description: description
        }
        createCourse(formData, function(course) {
            console.log(course);
            //getCourses(renderCourses);
            var listCourse = document.querySelector("#list-courses");
            // return listCourse.
            var newCourseHtml = `<li class="course-item-${course.id}">
                                    <h4>${course.name}</h4>
                                    <p>${course.description}</p>
                                    <button onclick="deleteCourse(${course.id})">Xóa</button>
                                </li>`;
            listCourse.insertAdjacentHTML('beforeend', newCourseHtml);
        });

    }
}