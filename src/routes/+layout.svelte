<script>
    import Navbar from "@components/Navbar.svelte";
    import Header from "@components/Header.svelte";
    import Footer from "@components/Footer.svelte";

    let { children } = $props();
</script>

<div class="app">
    <Navbar />
    <Header />
    <main class="main">
        {@render children()}
        <Footer />
    </main>
</div>

<style lang="scss">
</style>
