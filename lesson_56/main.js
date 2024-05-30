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
                    <button style = "color:red" onclick="deleteCourse(${course.id})">Xóa</button>
                    <button style = "color:blue" data-id = "${course.id}" data-name = "${course.name}" data-description = "${course.description}" class="update-course-${course.id}" onclick = "handleUpdateCourse(event)" >sửa</button>
                </li>`
    })
    listCoursesBlock.innerHTML = htmls.join('');
}

function handleCreateForm() {
    var createBtn = document.querySelector('#create');
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]');
        var description = document.querySelector('input[name="description"]');
        var formData = {
            name: name.value,
            description: description.value
        }
        createCourse(formData, function(course) {
            console.log(course);
            //getCourses(renderCourses);
            var listCourse = document.querySelector("#list-courses");
            // return listCourse.
            var newCourseHtml = `<li class="course-item-${course.id}">
                                    <h4>${course.name}</h4>
                                    <p>${course.description}</p>
                                    <button style = "color:red" onclick="deleteCourse(${course.id})">Xóa</button>
                                    <button style = "color:blue" data-id = "${course.id}" data-name = "${course.name}" data-description = "${course.description}" class="update-course-${course.id})"  onclick = "handleUpdateCourse(event)">sửa</button>
                                </li>`;
            listCourse.insertAdjacentHTML('beforeend', newCourseHtml);
            name.value = "";
            description.value = "";
        });

    }
}

function updateCourse(data, id, callBack) {
    var option = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data)
    }
    fetch(coursesApi + "/" + id, option)
        .then(function(response) {
            return response
        })
        .then(callBack)
}

function handleUpdateCourse(event) {
    console.log(event.target);

    console.log(event.target.getAttribute("data-description"));

}