<script lang="ts">
    import "../tailwind.css";
    import favicon from "$lib/assets/favicon.svg";

    let { children } = $props();
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}

<style>
    :global(body) {
        background:
            linear-gradient(rgba(0, 0, 0, 0.9)),
            url("src/lib/assets/banner.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        max-height: 100vh;
        z-index: 1;
    }
</style>
