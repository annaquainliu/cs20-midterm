window.onload = () => {
    const likes = document.getElementsByClassName('likes');
    Array.prototype.forEach.call(likes, like => {
        const heartDiv = like.children[0];
        const likeVal = like.children[1];
        heartDiv.addEventListener('click', () => {
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
        });
    });
}