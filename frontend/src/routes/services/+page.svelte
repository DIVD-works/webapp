<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";

    import type { Cards } from "$lib/types";

    const service_cards: Cards<string>[] = [
        {
            title: "Cybersecurity",
            description: "Protects your data, prevents breaches.",
            icon: "mdi:encryption-check",
        },
        {
            title: "Vanilla Open-Source",
            description: "Simplifies adoption, boosts collaboration.",
            icon: "mdi:computer",
        },
        {
            title: "Talent Growth",
            description: "Expands knowledge, fuels progress.",
            icon: "mdi:chart-areaspline",
        },
    ];
</script>

<Header />
<main>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article">
            <h1 class="h1">Services</h1>
            <div class="card my-4">
                {#each service_cards as { title, description, icon }, _}
                    <article class="card-item">
                        <div class="w-full flex justify-center">
                            <Icon {icon} class="icon-medium card-icon" />
                        </div>
                        <h2 class="h2 !text-2xl md:!text-3xl my-3 text-center">
                            {title}
                        </h2>
                        <p class="p text-center">
                            {description}
                        </p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
