function display (games, curr) {
    for (i = 0; i < games.length; i++) {
        games[i].style.display = 'none';
    }
    games[curr].style.display = 'block';
}

function nextGame (games, index) {
    if (++index >= games.length) {
        index = 0;
    }
    return index;
}

function prevGame (games, index) {
    if (--index < 0) {
        index = games.length - 1;
    }
    return index;
}
