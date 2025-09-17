<script lang="ts">
    import "../tailwind.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <metadata>
        <title>Home - DIVD.works</title>
    </metadata>
    <meta
        name="description"
        content="Powered by Purpose - The goal of the DIVD.works project is to create a platform that brings
        together young digital talent and employers."
    />
</svelte:head>

{@render children?.()}

<style>
    :global(.banner) {
        background:
            linear-gradient(rgba(0, 0, 0, 0.9)),
            url("src/lib/assets/banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        z-index: 1;
    }
</style>
