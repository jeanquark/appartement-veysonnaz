<script>
    import { onMount } from "svelte";
    import { base } from "$app/paths";
    import { page } from "$app/stores";
    // import { locale, locales } from "svelte-i18n";
    import { t, locales, locale } from "$lib/translations";

    let { children } = $props();
    // locale.set("fr");
    // $: ({ route } = $page.data);

    onMount(() => {
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
    <a href="{base}/">Accueil</a>
    <a href="{base}/appartement">L'appartement</a>
    <a href="{base}/veysonnaz">Veysonnaz</a>
    <a href="{base}/galerie">Galerie</a>
    <a href="{base}/dispo">Disponibilités</a>
    <a href="{base}/contact">Contact - réservation</a>
    <a href="/{$locale}/about">About</a>
    $locale: {$locale}<br />
    <select bind:value={$locale} onchange={handleChange}>
        {#each $locales as value}
            <option {value}>{$t(`lang.${value}`)}</option>
        {/each}
    </select>

    <!-- $locales: {$locales}
    $locale: {$locale}
    <select bind:value={$locale}>
        {#each $locales as locale}
            <option value={locale}>{locale}</option>
        {/each}
    </select> -->

    <!-- <select
        onchange={({ target }) => {
            goto(`/${target.value}${route}`);
            document.querySelector("html").setAttribute("lang", target.value);
        }}
    >
        {#each $locales as lc}
            <option value={lc} selected={lc === $locale}
                >{$t(`lang.${lc}`)}</option
            >
        {/each}
    </select> -->
</div>

<div id="navbarSlide">
    <a href="{base}/">Accueil</a>
    <a href="{base}/appartement">L'appartement</a>
    <a href="{base}/veysonnaz">Veysonnaz</a>
    <a href="{base}/galerie">Galerie</a>
    <a href="{base}/dispo">Disponibilités</a>
    <a href="{base}/contact">Contact - réservation</a>
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
        padding: 15px;
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
</style>
