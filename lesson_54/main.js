var users = [{
        id: 1,
        name: 'Ninh Tran'
    },
    {
        id: 2,
        name: 'kien dam'
    },
    {
        id: 3,
        name: 'son dang'
    },

]

var comments = [{
        id: 1,
        user_id: 1,
        content: 'Ban da trung giai thuong 1',
    },
    {
        id: 2,
        user_id: 2,
        content: 'Ban da trung giai thuong 2',
    },
    {
        id: 3,
        user_id: 1,
        content: 'Thank you',
    },
]

// 1. Lấy comments
// 2. Từ comments lấy ra user_id
// 3. từ user_id lấy ra user tương ứng

// Fake API

function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000)
    })
}

function getUserByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            //console.log(result);
            resolve(result);
        }, 2000)
    })
}
getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comments) {
            return comments.user_id;
        })
        console.log(userIds);
        return getUserByIds(userIds).then(function(users) {
            console.log(users);
            return {
                users: users,
                comments: comments,
            };
        })
    })
    .then(function(data) {
        //console.log(data);
        var commentBlocks = document.querySelector('#comment-block');
        var html = '';
        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`
        });
        commentBlocks.innerHTML = html;
    });