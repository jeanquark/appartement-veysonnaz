<script>
    import { onMount } from "svelte";
    import Navbar from "@components/Navbar.svelte";
    import Footer from "@components/Footer.svelte";
    import { initGA } from "@lib/analytics.js";

    let { children } = $props();

    onMount(() => {
        initGA();
    });
</script>

<div class="app">
    <Navbar />
    <main class="main">
        <div class="container border-5">
            {@render children()}
        </div>
    </main>
    <Footer />
</div>

<style>
    .app {
        min-height: 100vh;
        margin: 0;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }
</style>
