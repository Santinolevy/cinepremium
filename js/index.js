<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/general.css">
</head>
<body>
    
    <header>
        <div class="myNavbar">
            <a href="index.html">
                <img class="logoNav" src="./img/imagenes tp/logo tp.png" alt="Logo de cinepremium"/>
            </a>
            <nav>
                <ul>
                <li> <a class="navigation"  href="./index.html">Home</a></li>
                  <li> <a class="navigation" href="./genres.html">Genero</a></li>
                  <li> <a class=" navigation" href="./favorite.html">Favoritos</a></li>
                  <li>
                    
                <form me class="buscador" action="./search-results.html" method="GET" >
                    <Input id="navigation" type="search" name="formularioDeBusqueda" placeholder="¿Qué querés buscar?">
                </form></li>
                </ul>
            </nav>
        </div>
</header>


<main>
    <section class="seccionPeliculas">
        <h2 class="title1"> PELÍCULAS RECOMENDADAS</h2>
        <div class="contenedorArticulosPeliculas">
           -----------------
        </div>
    </section>

    <section class="seccionSeries">
        <h2 class="title1"> SERIES</h2>
        <div class="contenedorArticulosSeries">
            --------------------
        </div>
    </section>

    <section class="seccionVistos">
        <h2 class="title1">LO MAS VISTO</h2>
        <div class="contenedorArticulosVisto">
            ------------------------
        </div>
    </section>

</main>


<footer class="footer">
    <p>Santino Tomas Levy - Ciro Perlberger - Florencio Moneta - Programación UdeSA 2022 -
    <a href = "mailto: cinepremiumdh@gmail.com">Mandanos un correo!</a>  <img class= "logocine" src="./img/imagenes tp/logo tp.png" alt="Logo de Cinepremium"></p>
</footer>

<script src="./js/index.js"></script>
</body>
</html>