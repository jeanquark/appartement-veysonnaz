<script>
    import { base } from "$app/paths";
    import { browser } from "$app/environment";
    import CloseIcon from "@components/icons/CloseIcon.svelte";

    let { showModal = $bindable(), header } = $props();
    let dialog = $state();
    let loaded = $state([0, 1]);

    $effect(() => {
        if (showModal) dialog.showModal();
    });

</script>

<!-- svelte-ignore a11y_click_events_have_key_events,
a11y_no_noninteractive_element_interactions -->
<dialog
    bind:this={dialog}
    onclick={(e) => {
        if (e.target === dialog) dialog.close();
    }}
    onclose={() => (showModal = false)}
>
    <div class="row">
        {@render header?.()}
        <hr />
        <div class="col-12 text-center" style="">
            <div class="relative">
            <h2>
                <button
                    type="button"
                    class="close-btn"
                    onclick={() => dialog.close()}
                    ><CloseIcon width="2em" color="#B2B2B2" /></button
                >
            </h2>
            <br /><br />
            </div>
        </div>
        <div class="col-12 border-2">
            {#if browser}
            <img src="/images/domaine.jpg" width="100%" alt="domaine 4 vallées" />
            {/if}
        </div>
    </div>
    
    <div class="row justify-center my-0" style="padding: .5em;">
        <!-- svelte-ignore a11y_autofocus -->
        <button
            type="button"
            autofocus
            class="text-muted"
            onclick={() => dialog.close()}>Close</button
        >
    </div>
</dialog>

<style>
    dialog {
        /* max-width: 32em; */
        border-radius: 0.2em;
        border: none;
        padding: 0;
        width: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    dialog::backdrop {
        background: rgba(0, 0, 0, 0.3);
    }
    dialog > div {
        padding: 1em;
    }
    dialog[open]::backdrop {
        animation: fade 0.2s ease-out;
    }
    @keyframes fade {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    button {
        display: block;
        background: transparent;
        border: none;
    }
    .close-btn {
        position: absolute;
        top: 0;
        right: 0;
        background: none;
        border: none;
    }
    .close-btn:hover {
        cursor: pointer;
    }
</style>
