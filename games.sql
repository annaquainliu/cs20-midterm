/* put all images in the images folder, and all txt (info) files in descriptions folder */

DROP TABLE IF EXISTS Games;
CREATE TABLE Games(
    gameID text, /* id for slides, usage: id="$gameID" */
    imgFile text, /* file name only, usage: style="background-image: url('images/$imgFile');" */
    gameColor text, /* style="background-color: $gamecolor;" */
    titleColor text, /* style="color: $titleColor;" */
    textColor text, /* style="color: $textColor;" */
    title text, /* name of the game */
    info text, /* important: this is the name of the txt file that holds the game description */
    pageBg text /* file name of the page background when the game is being displayed */
);

INSERT INTO Games (gameID, imgFile, gameColor, titleColor, textColor, title, info, pageBg)
VALUES ('overwatch', 'OW3.png', 'rgba(255, 255, 255, 0.45)', 'rgb(58, 67, 66)', 'rgb(58, 67, 66)', 'Overwatch 3', 'ow.txt', 'owbg.jpg');

INSERT INTO Games (gameID, imgFile, gameColor, titleColor, textColor, title, info, pageBg)
VALUES ('monsterHunter', 'monster_hunter_resize.png', 'rgba(9, 61, 165, 0.583)', 'rgba(255, 255, 255, 0.871)', 'rgba(171, 156, 22, 0.871)', 'Monster Hunter Paradise', 'MonsterHunter.txt', 'mhbg.jpg');

INSERT INTO Games (gameID, imgFile, gameColor, titleColor, textColor, title, info, pageBg)
VALUES ('apexLegends', 'apex.png', 'rgba(255, 0, 0, 0.45)', 'rgba(255, 255, 255, 0.871)', 'rgba(255, 255, 255, 0.871)', 'ERROR', 'apex.txt', 'apex.jpg');

INSERT INTO Games (gameID, imgFile, gameColor, titleColor, textColor, title, info, pageBg)
VALUES ('cod', 'cod.png', 'rgba(33, 225, 19, 0.615)', 'rgba(0, 0, 0, 0.976)', 'rgba(0, 0, 0, 0.976)', 'Call of Duty', 'cod.txt', 'cod.jpg');