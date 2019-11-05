'use strict'

function format(response) {
   return response.json()
}


function render1(posts) {
    console.log(posts)
    var html = '';
    for(var post of posts){
        console.log(post.title)
        html += '<div class ="post"> '
        html += '<h2>' + post.title + '</h2>'
        html += '<p>' + post.description + '</p>'
        html += '<p>' + post.data_create + '</p>'
        html += '</div>'
    }
    return html;
}

function render2(str) {
    var container = document.querySelector('#list-posts');
    container.innerHTML = str;
    console.dir(container);

}

function showPosts() {
    fetch('http://blog.api.axenov-it.com/posts')
    .then(format)
    .then(render1)
    .then(render2);

}

var btn = document.querySelector('#render-posts');
    console.dir(btn);

var isOpen = false;
    
function toggle () {
    var container = document.querySelector('#list-posts');
    if(isOpen) {
        container.innerHTML = "";
        isOpen = false;
    } else {
        showPosts();
        isOpen = true;
    }
}

btn.onclick = toggle;