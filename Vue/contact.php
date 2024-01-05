<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="UTF-8">
        <title>Contact - Béatrice GARCIA CEGARRA</title>

        <link rel="icon" href="img/fox.png">
        <link href="css/style.css" rel="stylesheet" type="text/css" />
        <link href="css/contact.css" rel="stylesheet" type="text/css" />

        <script src="js/main.js" type="text/javascript"></script>
        <script src="js/SubmitForm.js" type="text/javascript"></script>
        <script src="https://kit.fontawesome.com/bbbd59159e.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <header>
            <div id="name">
                <img src="img/fox.png" alt="Renard ">
                <span>&nbsp Béatrice GARCIA CEGARRA</span>
                <br>
                <label id="label_lang" for="language"></label>
                <select name="label_lang" id="select_lang">
                    <option value="fr">&nbsp Français</option>
                    <option value="en">&nbsp English</option>
                </select>
            </div>
            <div id="button-wrapper">
                <br>
                <a id="about_button" href="index.php"></a>
                <a href="cv.php">C.V.</a>
                <a href="portfolio.php">Portfolio</a>
                <a href="contact.php">Contact</a>
                <br>
            </div>
        </header>

        <div id="contact-wrapper" class="wrapper">
            <div id="title-form">
                <h1 class="text"></h1>
                <span class="text"></span>
            </div>

            <form class="input-field" id="form">
                <div id="cara-inputs">
                    <div class="input-field">
                        <input type="text" name="nom" id="nom" required spellcheck="false">
                        <label for="nom" class="text"></label>
                    </div>

                    <div class="input-field">
                        <input type="email" name="email" id="email" required spellcheck="false">
                        <label for="email" class="text"></label>
                    </div>

                    <div class="input-field">
                        <input type="text" name="company" id="company" required spellcheck="false">
                        <label for="company" class="text"></label>
                    </div>
                </div>
                <div class="input-field" id="sujet-div">
                    <input type="text" name="sujet" id="sujet" required spellcheck="false">
                    <label for="sujet" class="text"></label>
                </div>
                <div class="input-field" id="contenu-div">
                    <textarea name="contenu" id="contenu" required spellcheck="false"></textarea>
                    <label for="contenu" class="text"></label>
                </div>
                <div id="send-form">
                    <input id="button" type="submit" value="">
                    <i class="fa-solid fa-circle-check"></i>
                    <i class="fa-solid fa-circle-xmark"></i>
                </div>
            </form>
        </div>

        <div id="networks-wrapper">
            <a href="mailto:beatrice.garcia-cegarra1@uqac.ca"><i class="fa-solid fa-envelope"></i></a>
            <a href="https://www.facebook.com/beatrice.garcia.54966"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://discord.com/users/260009296153149440"><i class="fa-brands fa-discord"></i></a>
            <a href="https://github.com/BeatriceGC"><i class="fa-brands fa-github"></i></a>
            <a href="https://www.linkedin.com/in/béatrice-garcia-cegarra-bb6a841a2/"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://www.instagram.com/bea.titude.gc/"><i class="fa-brands fa-square-instagram"></i></a>
        </div>
        <footer></footer>
    </body>
</html>