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

function toggleHeight (elem, fstClick, height) {
    if (fstClick) {
        $(elem).css('display', 'flex');
        $(elem).animate({opacity: '100%', height: height}, {duration: 200, queue: false})
    } else {
        $(elem).animate({opacity: "0%", height: '0px'}, {duration: 200, queue: false})
        $(elem).delay(200).hide(0);
    }
    return !fstClick;
}

function toggleWidth (elem, fstClick, width) {
    if (fstClick) {
        $(elem).css('display', 'block');
        $(elem).animate({opacity: '100%', width: width }, {duration: 200, queue: false})
    } else {
        $(elem).animate({opacity: "0%", width: '0px'}, {duration: 200, queue: false})
        $(elem).delay(200).hide(0);
    }
    return !fstClick;
}

function changeWidth (elem, to) {
    $(elem).animate({width: to}, {duration: 200, queue: false});
}

function hideTitle (title) {
    $(title).delay(500).animate({opacity: '0%', height: '0px', 'margin-top': '0px'});
    $(title).delay(800).hide(0);
}

function toggleShade (shade, opacS, game, opacG) {
    $(shade).animate({opacity: opacS}, {duration: 200, queue: false});
    $(game).animate({opacity: opacG}, {duration: 200, queue: false});
}

