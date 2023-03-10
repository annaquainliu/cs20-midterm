window.onload = () => {
    const likes = document.getElementsByClassName('likes');
    Array.prototype.forEach.call(likes, like => {
        const heartDiv = like.children[0];
        const likeVal = like.children[1];
        heartDiv.addEventListener('click', () => {
            heartListener(heartDiv, likeVal);
        });
    });

    function heartListener(heartDiv, likeVal) {
        let value = parseInt(likeVal.innerText);
            heartDiv.liked = !heartDiv.liked;
            if (heartDiv.liked) {
                heartDiv.style.backgroundImage = 'url(images/heart.png)';
                likeVal.innerText = value + 1;
            }
            else {
                heartDiv.style.backgroundImage = 'url(images/heartUnliked.png)';
                likeVal.innerText = value - 1;
        }
    }

    const submitComment = document.getElementById('submitComment');
    const comment = document.getElementById('makeComment').querySelector('textarea');
    const username = document.querySelector("input[class='username']");
    const comments = document.getElementById('comments');
    const topComment = comments.children;

    submitComment.addEventListener('click', () => {
        if (comment.value == "" || comment.value == null) {
            alert("Please enter a comment!");
        }
        else if (username.value == "" || username.value == null) {
            alert("Please enter a username!");
        }
        else {
            makeComment(comment.value, username.value);
        }
    });

    function makeComment(comment, username) {
        let components = {'comment': null, 'userinfo': null, 'yourPfp pfp': null, 'username': null, 'time': null,
                            'commentText': null, 'likes': null, 'heart': null};
        let likesVal = document.createElement('span');
        likesVal.innerText = 0;
        for (let className in components) {
            let componentDiv = document.createElement('div');
            componentDiv.className = className;
            if (className == 'username') {
                componentDiv.innerText = username;
            }
            else if (className == 'time') {
                componentDiv.innerText = getDate();
            }
            else if (className == 'commentText') {
                componentDiv.innerText = comment;
            }
            else if (className == 'likes') {
                componentDiv.setAttribute('liked', false);
            }
            else if (className == 'heart') {
                componentDiv.addEventListener('click', () => {heartListener(componentDiv, likesVal)});
            }
            console.log(componentDiv);
            components[className] = componentDiv;
        };
        components['likes'].append(components['heart'], likesVal);
        components['userinfo'].append(components['yourPfp pfp'], components['username'], components['time']);
        components['comment'].append(components['userinfo'], components['commentText'], components['likes']);
        comments.insertBefore(components['comment'], topComment[1]);
    }

    function getDate() {
        let d = new Date();
        let hours = d.getHours();
        let minutes = d.getMinutes();
        let time = "";
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours > 12) {
            if (hours % 12 == 0) {
                //midnight special case
                time = "12:" + minutes + " AM";
            }
            time += (hours % 12) + ":" + minutes + " PM";
        }
        else {
            //noon special case
            if (hours == 12) {
                time = "12:" + minutes + " PM";
            }
            time += hours + ":" + minutes + " AM";
        }
        return "Today at " + time;
    }
}