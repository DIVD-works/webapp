<script lang="ts">
    import Icon from "@iconify/svelte";
    import Navigation from "./Navigation.svelte";
    import User from "./User.svelte";

    let menu_open: boolean = false;
    const menu_state: () => boolean = (): boolean => (menu_open = !menu_open);
</script>

<header class="w-full h-20 flex items-center justify-between px-5">
    <a href="/" data-sveltekit-reload>
        <img
            src="src/lib/assets/works.svg"
            alt="works logo"
            class="w-40 h-12 sm:w-48 sm:h-14 invert-0 dark:invert"
        />
    </a>
    <article>
        <User />
        <button
            on:click={menu_state}
            class="hover:bg-purple-600 rounded-full p-1 duration-200 ease-out hover:ease-in cursor-pointer"
        >
            <Icon
                icon="mdi:hamburger-open"
                class="w-10 h-10 sm:w-12 sm:h-12 text-black dark:text-white"
            />
        </button>
    </article>
</header>
{#if menu_open}
    <Navigation menu_open />
{/if}
