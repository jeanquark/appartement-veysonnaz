<script>
    import { base } from "$app/paths";
    import { t } from "$lib/translations";
    import Modal from "@components/Modal.svelte";

    let showModal = $state(false);
    let imgSrc = $state("");
    let imgDescription = $state("");
</script>

<svelte:head>
    <title>A louer à Veysonnaz</title>
    <meta name="description" content="" />
</svelte:head>

<div class="row justify-center align-center mt-4">
    <div class="col-6 col-sm-12 border-3 px-4" style="font-size: 1.3em;">
        <h2 class="text-center py-2">{$t("home.title")}</h2>
        <p style="text-align: justify; line-height: 1.3em;">
            {$t("home.description")}
        </p>
    </div>
    <div class="col-6 col-sm-12 border-4 px-4">
        <img src="/images/vue4.jpg" width="100%" alt="Vue depuis la terrasse" />
    </div>
</div>

<div class="row">
    {#if showModal}
        <Modal bind:showModal>
            {#snippet header()}{/snippet}
            {#snippet content()}
                <img src={imgSrc} width="100%" alt={imgDescription} />
            {/snippet}
        </Modal>
    {/if}
</div>

<div class="row">
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="img-hover-zoom">
            <img src="{base}/images/salon_1024.jpg" width="100%" alt="Salon" />
        </div>
        <p class="text-center pt-2">Salon</p>
    </div>
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="img-hover-zoom">
            <img
                src="{base}/images/salle_a_manger_1024.jpg"
                width="100%"
                alt="Salle à manger"
            />
        </div>
        <p class="text-center pt-2">Salle à manger</p>
    </div>
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="img-hover-zoom">
            <img
                src="{base}/images/cuisine_1024.jpg"
                width="100%"
                alt="Cuisine"
            />
        </div>
        <p class="text-center pt-2">Cuisine</p>
    </div>
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="img-hover-zoom">
            <img src="{base}/images/salon3.jpg" width="100%" alt="Intérieur" />
        </div>
        <p class="text-center pt-2">Intérieur</p>
    </div>
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="img-hover-zoom">
            <img
                src="{base}/images/immeuble_1024.jpg"
                width="100%"
                alt="Immeuble"
            />
        </div>
        <p class="text-center pt-2">Immeuble</p>
    </div>
    <div class="col-4 col-sm-12 col-xs-12 border-4 pa-5">
        <div class="text-center">
            <button
                onclick={() => (
                    (imgSrc = `${base}/images/plan_1024.jpg`),
                    (imgDescription = "Plan"),
                    (showModal = true)
                )}
                class="btn"
                style=""
            >
                <img
                    src="{base}/images/plan_1024.jpg"
                    height="300px"
                    alt="Plan"
                />
            </button>
        </div>
        <p class="text-center pt-1">Plan (cliquez pour agrandir)</p>
    </div>
</div>

<div class="row align-center my-5 border-0">
    <div class="col-4 col-sm-12">
        <h2 class="text-center py-3">Info & Contact:</h2>
        <div class="text-center" style="font-size: 1.4em;">
            <a
                href="mailto:contact@veysonnaz-location.ch"
                style="color: var(--color-theme-1);"
                >contact@veysonnaz-location.ch</a
            >
        </div>
    </div>
    <div class="col-8 col-sm-12">
        <button
            onclick={() => (
                (imgSrc = `${base}/images/domaine_1024.jpg`),
                (imgDescription = "Domaine des 4 Vallées"),
                (showModal = true)
            )}
            class="btn"
            style=""
        >
            <img
                src="{base}/images/domaine_1024.jpg"
                width="100%"
                alt="domaine 4 vallées"
            />
        </button>
        <p class="text-center pt-1">
            Domaine des 4 Vallées (cliquez pour agrandir)
        </p>
    </div>
</div>

<div class="row">
    <div
        class="col-12 border-2"
        style="background: #ccc; position: relative; width: 100%; overflow: hidden;"
    >
        <!-- <h2>{$_("homepage")}</h2> -->
        <h2>{$t("common.homepage")}</h2>
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

<!--<style lang="scss">
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
            --left-ini: #{math.random(20) - 10}vw;
            --left-end: #{math.random(20) - 10}vw;
            // --left-ini: #{math.random(20) - 20}vw;
            // --left-end: #{math.random(20) - 20}vw;
            left: #{math.random(100)}vw;
            animation: snowfall #{5 + math.random(10)}s linear infinite;
            animation-delay: -#{math.random(10)}s;
        }
    }

    .snowflake:nth-child(6n) {
        filter: blur(1px);
    }

    .img-hover-zoom {
        // height: 300px; /* [1.1] Set it as per your need */
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }
    .img-hover-zoom img {
        transition: transform 0.5s ease;
    }
    .img-hover-zoom:hover img {
        transform: scale(1.15);
    }
    .btn {
        background: none;
        border: none;
    }
    .btn:hover {
        cursor: pointer;
        border: 2px solid var(--color-theme-1);
    }
</style>-->

<style>
    .img-hover-zoom {
        overflow: hidden; /* [1.2] Hide the overflowing of child elements */
    }
    .img-hover-zoom img {
        transition: transform 0.5s ease;
    }
    .img-hover-zoom:hover img {
        transform: scale(1.15);
    }
    .btn {
        background: none;
        border: none;
    }
    .btn:hover {
        cursor: pointer;
        border: 2px solid var(--color-theme-1);
    }
</style>
