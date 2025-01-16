<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    import { t, locales, locale } from "$lib/translations";

    let { children } = $props();

    onMount(() => {
        // console.log("$page.url.pathname: ", $page.url.pathname);
        window.onscroll = function () {
            scrollFunction();
        };

        function scrollFunction() {
            if (
                document.body.scrollTop > 40 ||
                document.documentElement.scrollTop > 40
            ) {
                document.getElementById("navbarSlide").style.top = "0";
                // document.getElementById("navbar").style.display = "none";
            } else {
                document.getElementById("navbarSlide").style.top = "-50px";
                // document.getElementById("navbar").style.display = "block";
            }
        }
    });

    const handleChange = ({ currentTarget }) => {
        const { value } = currentTarget;

        document.cookie = `lang=${value} ;`;
    };
</script>

<div id="navbar">
    <!-- <a href="{base}/" class={$page.url.pathname == "/" ? "active" : "active"}
        >Accueil</a
    > -->
    <a href="{base}/" class:active={$page.url.pathname === "/"}>Accueil</a>
    <a href="{base}/tarifs">Prix</a>
    <div class="">
        <select
            bind:value={$locale}
            onchange={handleChange}
            class="arrows"
            style=""
        >
            {#each $locales as value}
                <option {value} style="">{$t(`lang.${value}`)}</option>
            {/each}
        </select>
    </div>
</div>

<div id="navbarSlide">
    <a href="{base}/" class:active={$page.url.pathname === "/"}>Accueil</a>
    <a href="{base}/tarifs">Prix</a>
    <div class="">
        <select
            bind:value={$locale}
            onchange={handleChange}
            class="arrows"
            style=""
        >
            {#each $locales as value}
                <option {value} style="">{$t(`lang.${value}`)}</option>
            {/each}
        </select>
    </div>
</div>

<style>
    #navbar {
        width: 100%; /* Full width */
        display: flex;
        align-items: center;
        justify-content: center;
        /* position:relative; */
    }

    #navbar a {
        text-decoration: none;
        color: var(--color-text);
        padding: 15px;
        font-size: 1.2em;
    }

    #navbar a:hover {
        color: var(--color-theme-1);
    }

    #navbar a.active {
        /* background-color: #ddd; */
        color: black;
    }
    #navbarSlide {
        background-color: #333; /* Black background color */
        position: fixed; /* Make it stick/fixed */
        top: -50px; /* Hide the navbar 50 px outside of the top view */
        width: 100%; /* Full width */
        transition: top 0.3s; /* Transition effect when sliding down (and up) */
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }
    /* Style the navbar links */
    #navbarSlide a {
        float: left;
        display: block;
        color: white;
        text-align: center;
        padding: 15px;
        text-decoration: none;
    }
    #navbarSlide a:hover {
        background-color: #ddd;
        color: black;
    }
    #navbarSlide a.active {
        background-color: #ddd;
        color: black;
    }

    select {
        width: 100px;
        padding: 5px 10px;
        border: none;
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%3C!--!Font%20Awesome%20Free%206.7.2%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202025%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M137.4%20374.6c12.5%2012.5%2032.8%2012.5%2045.3%200l128-128c9.2-9.2%2011.9-22.9%206.9-34.9s-16.6-19.8-29.6-19.8L32%20192c-12.9%200-24.6%207.8-29.6%2019.8s-2.2%2025.7%206.9%2034.9l128%20128z%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: right 0.7em top 50%;
        background-size: 0.65em auto;
    }
    select:focus-within {
        /* border: 2px solid red; */
        background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%3C!--!Font%20Awesome%20Free%206.7.2%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202025%20Fonticons%2C%20Inc.--%3E%3Cpath%20d%3D%22M182.6%20137.4c-12.5-12.5-32.8-12.5-45.3%200l-128%20128c-9.2%209.2-11.9%2022.9-6.9%2034.9s16.6%2019.8%2029.6%2019.8l256%200c12.9%200%2024.6-7.8%2029.6-19.8s2.2-25.7-6.9-34.9l-128-128z%22%2F%3E%3C%2Fsvg%3E");
        background-repeat: no-repeat;
        background-position: right 0.7em top 50%;
        background-size: 0.65em auto;
    }
</style>
