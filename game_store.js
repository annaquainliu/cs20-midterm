function display (games, curr) {
    for (i = 0; i < games.length; i++) {
        if (games[i].style.display == 'block') {
            crossFade(games[i], games[curr]);
            break;
        }
    }
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

function crossFade (curr, next) {
    $(next).css({'display': 'block', 'opacity': '0%'});
    $(curr).animate({opacity: '0%'}, {duration: 200, queue: false});
    $(next).animate({opacity: '100%'}, {duration: 200, queue: false});
    $(curr).hide();
}

function changeBackGround (images, to) {
    $background = $('#background');
    $background.animate({opacity: '0%'}, {duration: 100, queue: true});
    $background.css('background-image', `url('images/${images[to]}')`);
    $background.animate({opacity: '10%'}, {duration: 100, queue: true});
}

