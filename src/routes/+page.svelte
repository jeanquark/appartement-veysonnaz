<script>
    import { _ } from "svelte-i18n";
</script>

<svelte:head>
    <title>A louer à Veysonnaz</title>
    <meta name="description" content="" />
</svelte:head>

<div class="row justify-center">
    <div class="col-6 border-3" style="font-size: 1.3em;">
        <h1 class="text-center">A louer à Veysonnaz</h1>
        <p>
            Très bel appartement à louer pour quatre ou cinq personnes. Il
            comprend deux chambres à coucher avec chacune deux lits, une chambre
            avec deux lits superposés, un salon/salle à manger et deux salles
            d'eau. L'appartement est bien situé avec une orientation sud-ouest,
            une très belle vue sur le village de Nendaz dans la vallée d'en face
            et un ensoleillement optimal. Il y a deux grands balcons où il est
            possible de se relaxer tranquillement et profiter du bon air de la
            montagne. Un parking privé est aussi à disposition.
        </p>
    </div>
    <div class="col-6 border-4">
        <img src="/images/domaine.jpg" width="100%" alt="domaine 4 vallées" />
    </div>
</div>

<div class="row">
    <div class="col-12 border-2">
        <h2>{$_("homepage")}</h2>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
        <div class="snowflake"></div>
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

<style lang="scss">
    // https://freefrontend.com/css-snow-effects/
    @use "sass:math";
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
            // transform: translate3d(var(--left-end), 100vh, 0);
        }
    }

    @for $i from 1 through 50 {
        .snowflake:nth-child(#{$i}) {
            --size: #{math.random(5) * 0.2}vw;
            // --left-ini: #{math.random(20) - 10}vw;
            // --left-end: #{math.random(20) - 10}vw;
            --left-ini: #{math.random(20) - 20}vw;
            --left-end: #{math.random(20) - 20}vw;
            left: #{math.random(100)}vw;
            animation: snowfall #{5 + math.random(10)}s linear infinite;
            animation-delay: -#{math.random(10)}s;
        }
    }

    .snowflake:nth-child(6n) {
        filter: blur(1px);
    }
</style>
