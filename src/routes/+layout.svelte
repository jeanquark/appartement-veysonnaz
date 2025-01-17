<script>
    import { onMount } from "svelte";
    import Navbar from "@components/Navbar.svelte";
    import Footer from "@components/Footer.svelte";
    import SnowFlake from "@components/SnowFlake.svelte";
    import { initGA } from "@lib/analytics.js";

    let { children } = $props();

    onMount(() => {
        initGA();
    });
</script>

<svelte:head>
    <!-- Google tag (gtag.js) -->
    <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-MD6LWG1B1G"
    ></script>
</svelte:head>

<div class="app">
    <Navbar />
    <SnowFlake />
    <main class="main" style="">
        <div class="container border-0">
            {@render children()}
        </div>
    </main>
    <Footer />
</div>

<style>
    .app {
        /* min-height: 100vh;
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start; */
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
        position: relative;
        width: 100%;
        overflow: hidden;
    }
    .main {
        position: relative;
        width: 100%;
        overflow: hidden;
        flex: 1;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        margin: 0;
    }
    .container {
        /* position: relative;
        width: 100%;
        overflow: hidden;
        flex: 1; */
    }
</style>
