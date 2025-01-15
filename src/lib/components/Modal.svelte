<script>
    import { base } from "$app/paths";
    import { browser } from "$app/environment";
    import { t } from "$lib/translations";
    import CloseIcon from "@components/icons/CloseIcon.svelte";

    let { showModal = $bindable(), header, content } = $props();
    let dialog = $state();
    let loaded = $state([0, 1]);
    let isHovered = $state(false);

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
        <div class="col-12 text-center relative" style="margin-bottom: 10px;">
            <button
                type="button"
                class="close-btn"
                onmouseover={() => (isHovered = true)}
                onmouseout={() => (isHovered = false)}
                onfocus={() => {}}
                onblur={() => {}}
                onclick={() => dialog.close()}
                ><CloseIcon
                    width="2em"
                    color={isHovered ? "#ccc" : "#B2B2B2"}
                /></button
            >
        </div>
    </div>
    <div class="row">
        <div class="col-12 border-2">
            {@render header?.()}
            {#if browser}
                {@render content?.()}
            {/if}
        </div>
    </div>

    <div class="row justify-center my-0" style="padding: .5em;">
        <!-- svelte-ignore a11y_autofocus -->
        <button
            type="button"
            autofocus
            class="btn"
            onclick={() => dialog.close()}>{$t("common.close")}</button
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
    .btn {
        padding: 0.5em 1em;
        background: none;
        border: 1px solid #ccc;
        border-radius: 0.5em;
    }
    .btn:hover {
        cursor: pointer;
        border: 1px solid #b7b7b7;
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
