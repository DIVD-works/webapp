<script lang="ts">
    import Icon from "@iconify/svelte";
    import { slide } from "svelte/transition";
    import User from "./User.svelte";
    import { navigation_routes } from "./types";

    export let menu_open: boolean;
    const menu_state: () => boolean = (): boolean => (menu_open = !menu_open);
</script>

{#if menu_open}
    <section class="fixed inset-0 bg-[#95389E] z-0" transition:slide>
        <article class="w-full h-20 flex items-center justify-between px-5">
            <a href="/" data-sveltekit-reload>
                <img
                    src="src/lib/assets/works.svg"
                    alt="works logo"
                    class="w-40 h-12 sm:w-48 sm:h-14 invert"
                />
            </a>
            <div>
                <User />
                <button
                    on:click={menu_state}
                    class="hover:bg-purple-600 rounded-full p-1 duration-200 ease-out hover:ease-in cursor-pointer"
                >
                    <Icon
                        icon="mdi:hamburger-close"
                        class="w-10 h-10 sm:w-12 sm:h-12 text-white cursor-pointer"
                    />
                </button>
            </div>
        </article>
        <nav
            class="w-full flex flex-col items-center px-5 text-white my-1 font-semibold text-2xl sm:text-3xl"
        >
            {#each navigation_routes as routes}
                <a
                    href={routes.url}
                    class="h-17.75 flex items-center duration-200 ease-out hover:ease-in hover:text-gray-300"
                    data-sveltekit-reload
                >
                    {routes.item.toUpperCase()}
                </a>
            {/each}
        </nav>
    </section>
{/if}
