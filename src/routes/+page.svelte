<script>
    import Navbar from "@components/Navbar.svelte";
    import Header from "@components/Header.svelte";
    import Footer from "@components/Footer.svelte";
</script>

<Navbar />
<Header />
<h1 class="text-center">A louer à Veysonnaz</h1>

<div class="row justify-center">
    <div class="col-6">
        <img src="/images/domaine.jpg" width="100%" alt="domaine 4 vallées" />
    </div>
</div>
<div class="row">
    <div class="col-12 border-2">
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <br /><br /><br /><br />
        <br /><br /><br /><br />
        <br /><br /><br /><br />
    </div>
</div>
<Footer />

<style lang="scss">
    .snowflake {
        --size: 1vw;
        width: var(--size);
        height: var(--size);
        background: white;
        border-radius: 50%;
        position: absolute;
        top: -5vh;
    }

    @keyframes snowfall {
        0% {
            transform: translate3d(var(--left-ini), 0, 0);
        }
        100% {
            transform: translate3d(var(--left-end), 110vh, 0);
        }
    }

    @for $i from 1 through 50 {
        .snowflake:nth-child(#{$i}) {
            --size: #{random(5) * 0.2}vw;
            --left-ini: #{random(20) - 10}vw;
            --left-end: #{random(20) - 10}vw;
            left: #{random(100)}vw;
            animation: snowfall #{5 + random(10)}s linear infinite;
            animation-delay: -#{random(10)}s;
        }
    }

    .snowflake:nth-child(6n) {
        filter: blur(1px);
    }
</style>
