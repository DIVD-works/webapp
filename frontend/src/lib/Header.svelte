<script lang="ts">
    import Icon from "@iconify/svelte";
    import Navigation from "./Navigation.svelte";

    let menu_open: boolean = false;
    const menu_state: () => boolean = (): boolean => (menu_open = !menu_open);
</script>

<header class="w-full h-20 flex items-center justify-between px-5">
    <a href="/">
        <img
            src="src/lib/assets/works.svg"
            alt="works logo"
            class="w-40 h-40 sm:w-48 sm:h-48 invert-0 dark:invert"
        />
    </a>
    <button on:click={menu_state}>
        {#if !menu_open}
            <Icon
                icon="mdi:hamburger-open"
                class="w-10 h-10 sm:w-12 sm:h-12 text-black dark:text-white"
            />
        {:else}
            <Navigation />
        {/if}
    </button>
</header>
