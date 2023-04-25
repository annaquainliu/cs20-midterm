<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="home.css">
    <link rel="stylesheet" href="game_store.css">
    <title>Game Store | Non-Nintendo</title>
    <script src="game_store.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <?php

        function gameSlide ($id, $file, $color) {
            $path = "images/$file";
            return "<div class='slide' id='$id' style='background-image: url(\"$path\"); background-color: $color;'></div>";
        }
        
        function buyIcon () {
            return "<div class='buy'><b>BUY</b></div>";
        }

        function description ($title, $text, $titleColor, $textColor) {
            $fp = "descriptions/$text";
            $content = file_get_contents($fp);
            return "<div class='discription'>" .
                   "<h2 style='color: $titleColor;'>$title</h2>" .
                   "<p style='color: $textColor;'>" . nl2br($content) . "</p>" .
                   "</div>";
        }

        ?>
</head>
<body>
    <div id="page">
        <div id="navbar">
            <div id="logo" onclick="window.location.href='index.html'"></div>
            <div class="category" id="dropdown">
                CATALOGS
                <div id="options">
                    <span class="category" onclick="window.location.href='catalog_nintendo.html'">Nintendo</span>
                    <span class="category" onclick="window.location.href='game_store.html'">Non-Nintendo</span>
                </div>
            </div>
            <div class="category" onclick="window.location.href='faq.html';">FAQ</div>
            <div class="category" onclick="window.location.href='forum.html';">FORUM</div>
            <div class="category" onclick="window.location.href='checkout.html';">CHECKOUT</div>
            <div class="category" onclick="window.location.href='contact.html'">CONTACTS</div>
        </div>
        <h1 id="title">Shop Other Games!</h1>
        <?php

            $server = "35.212.97.71";// your server
            $userid = "unnwyocfg0iz0"; // your user id
            $pw = "nebsttljblib"; // your pw
            $db= "dbvacoigyhy1qy"; // your database
                    
            // Create connection
            $conn = new mysqli($server, $userid, $pw);

            // Check connection
            if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
            }
                
            //select the database
            $conn->select_db($db);

            //run query
            $sqlSlide = "SELECT gameID, imgFile, gameColor FROM Games";
            $slides = $conn->query($sqlSlide);

            $sqlInfo = "SELECT gameColor, titleColor, textColor, title, info, pageBg FROM Games";
            $gameInfos = $conn->query($sqlInfo);

            // print game slides
            echo "<div id='gameSlider'>";

            if ($slides->num_rows > 0) 
            {
                while($game = $slides->fetch_assoc()) 
                {
                    echo gameSlide($game['gameID'], $game['imgFile'], $game['gameColor']) . 
                         buyIcon();
                }
            } 
            else 
            echo "no slides";

            echo "<div class='shade'> </div>" .
                 "<a id='next'>&#10095;</a>" .
                 "<a id='prev'>&#10094;</a>" . 
                 "</div>";

            // print game description
            echo "<div id='gameInfo'>";

            if ($gameInfos->num_rows > 0) 
            {
                while($info = $gameInfos->fetch_assoc()) 
                {
                    $gameColor = $info['gameColor'];
                    echo "<div class='game' style='background-color: $gameColor;'>" . 
                         description($info['title'], $info['info'], $info['titleColor'], $info['textColor']) . 
                         "</div>";
                }
            } 
            else 
            echo "no descriptions";

            echo "</div>";
            
            

            ?>
    </div>
    <script>
        $(document).ready(function () {
            hideTitle($('#title'));
            // const gameCompany = {"OverWatch": "Blizzard", "MonsterHunter": "Capcom", "ApexLegends": "EA", "CallofDuty": "Activision"};
            // const gamePrice = {"OverWatch": 0, "MonsterHunter": 59.99, "ApexLegends": 0, "CallofDuty": 69.99};
            var heightInfo = '35vh'
            const imgs = ["owbg.jpg", "mhbg.jpg", "apex.jpg", "cod.jpg"];
            var index = 0;
            var games = document.getElementsByClassName('slide');
            $(games[0]).css('display', 'block');
            var info = document.getElementsByClassName('game');
            var fstClick = true;
            var buyBtns = document.getElementsByClassName('buy');
            var discript = document.getElementsByClassName('discription');
            var shade = document.querySelector('.shade');
            $("#next").click(function () {
                if (!fstClick) {
                    fstClick = toggleHeight(info[index], fstClick, heightInfo);
                    toggleWidth(buyBtns[index], !fstClick, $(buyBtns[index]).parent().width() / 2);
                    toggleWidth(discript[index], !fstClick, $(discript[index]).parent().width() * 3 / 4);
                    toggleShade(shade, '0%', games[index], '100%');
                }
                index = nextGame(games, index);
                display(games, index);
                changeBackGround(imgs, index);
            });
            $("#prev").click(function () {
                if (!fstClick) {
                    fstClick = toggleHeight(info[index], fstClick, heightInfo);
                    toggleWidth(buyBtns[index], !fstClick, $(buyBtns[index]).parent().width() / 2);
                    toggleWidth(discript[index], !fstClick, $(discript[index]).parent().width() * 3 / 4);
                    toggleShade(shade, '0%', games[index], '100%');
                }
                index = prevGame(games, index);
                display(games, index);
                changeBackGround(imgs, index);
            });
            $(window).resize(function () {
                if (!fstClick) {
                    changeWidth(buyBtns[index], $(buyBtns[index]).parent().width() / 2);
                    changeWidth(discript[index], $(discript[index]).parent().width() * 3 / 4);
                }
            });
            for (let i = 0; i < games.length; ++i) {
                $(games[i]).click(function () {
                    if (fstClick) {
                        fstClick = false;
                        toggleShade(shade, '70%', games[i], '30%');
                    } else {
                        fstClick = true;
                        toggleShade(shade, '0%', games[i], '100%');
                    }
                    toggleHeight(info[i], !fstClick, heightInfo);
                    toggleWidth(buyBtns[index], !fstClick, $(buyBtns[index]).parent().width() / 2);
                    toggleWidth(discript[index], !fstClick, $(discript[index]).parent().width() * 3 / 4);
                });
            }
            for (let j = 0; j < buyBtns.length; ++j) {
                $(buyBtns[j]).mouseenter(function () {
                    changeWidth(buyBtns[j], $(buyBtns[j]).parent().width() * 3 / 4);
                });

                $(buyBtns[j]).mouseleave(function () {
                    changeWidth(buyBtns[j], $(buyBtns[j]).parent().width() / 2);
                });

                $(buyBtns[j]).click(function () {
                    window.open(`checkout.html?game=${games[j].id}`,"_self");
                });
            }
        });

    </script>

    <div id="background"></div>
    <!-- <script src="home.js"></script> -->
</body>
</html>