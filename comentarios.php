
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Shop Homepage - Start Bootstrap Template</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <!-- Bootstrap icons-->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="css/styles.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/style.css"> 
    </head>
    <body>
    <?php
    //menu arriba
    include("templates/menu.php");
    ?>

    <?php
    //encabezado
    include ("templates/encabezado.php");
    ?>

<div class="container">
        <h2>Su opinión es importante</h2>
        <form id="commentForm">
            <label for="name">Su nombre</label>
            <input type="text" id="name" name="name" required>
            <label for="comment">Comentario</label>
            <textarea id="comment" name="comment" required></textarea>
            <button type="submit">Enviar</button>
        </form>
        <div id="comments">
            <div id="commentCounter" class="comment-counter">0 comentarios</div>
            <h3>Comentarios recibidos</h3>
            <div id="commentList"></div>   
        </div>
    </div>
    <script src="script.js"></script>
               
        
        <?php
            //Pie de pagina
            include ("templates/pie.php");
            ?>
       
        <!-- Bootstrap core JS-->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        <!-- Core theme JS-->
        <script src="js/scripts.js"></script>
    </body>
</html>
