<script>
    // window.onscroll = function () {
    //     scrollFunction();
    // };

    // function scrollFunction() {
    //     if (
    //         document.body.scrollTop > 40 ||
    //         document.documentElement.scrollTop > 40
    //     ) {
    //         document.getElementById("navbar").style.top = "0";
    //     } else {
    //         document.getElementById("navbar").style.top = "-50px";
    //     }
    // }
</script>

<!-- <h2>Navbar</h2> -->
<div id="navbar">
    <a href="#home">Accueil</a>
    <a href="#news">L'appartement</a>
    <a href="#contact">Veysonnaz</a>
    <a href="#contact">Galerie</a>
    <a href="#contact">Disponibilités</a>
    <a href="#contact">Contact - réservation</a>
</div>

<style>
    #navbar {
        background-color: #333; /* Black background color */
        position: fixed; /* Make it stick/fixed */
        top: -50px; /* Hide the navbar 50 px outside of the top view */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Style the navbar links */
    #navbar a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 15px;
        text-decoration: none;
    }

    #navbar a:hover {
        background-color: #ddd;
        color: black;
    }
</style>
