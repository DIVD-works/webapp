<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";
    import Icon from "@iconify/svelte";

    import type { Cards } from "$lib/types";

    const internship_cards: Cards<string>[] = [
        {
            title: "Skill Development",
            description:
                "Engage in hands-on projects that enhance both technical and soft skills crucial for the global digital landscape.",
            icon: "mdi:tool-clock",
        },
        {
            title: "International Exposure",
            description:
                "Collaborate with peers from around the world, gaining insights into diverse cultures and global practices.",
            icon: "mdi:globe",
        },
        {
            title: "Career Advancement",
            description:
                "Build a robust foundation that prepares you for opportunities in international organizations and the broader digital economy.",
            icon: "mdi:stairs-up",
        },
    ];
</script>

<Header />
<main>
    <section class="section bgdefault">
        <article class="article !items-start md:!items-center !gap-0">
            <h1 class="h1">Internships</h1>
            <p class="p mt-8 mb-4">
                At DIVD.works, we are committed to nurturing the next generation
                professionals through our comprehensive Internship Program. This
                initiative is designed to equip participants with essential
                skills, practical experience, and a global network, paving the
                way for a successful career in the digital world.
            </p>
            <p class="p">
                Discover new skills, gain real-world experience, build
                international connections and take your first step toward an
                exciting career in the global digital landscape.
            </p>
        </article>
    </section>
    <section class="section bgcolor">
        <article class="article">
            <h2 class="h2">Skill trajectory</h2>
            <div class="card">
                {#each internship_cards as { title, description, icon }, _}
                    <article class="card-item">
                        <div class="w-full flex justify-center">
                            <Icon {icon} class="icon-medium card-icon" />
                        </div>
                        <h3 class="h3 my-3 text-center">
                            {title}
                        </h3>
                        <p class="p text-center">
                            {description}
                        </p>
                    </article>
                {/each}
            </div>
        </article>
    </section>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article !items-start">
            <h2 class="h2">Benefits of joining</h2>
            <ol class="p list-decimal pl-4">
                <li>
                    Acquire and enhance essential hard and soft skills vital for
                    a career in cybersecurity.
                </li>
                <li class="py-2">
                    Gain practical experience working within an international
                    organization.
                </li>
                <li>
                    Receive a certificate upon successful completion of the
                    program.
                </li>
                <li class="py-2">
                    Connect with a network of motivated and like-minded
                    individuals worldwide.
                </li>
                <li>
                    Improve your English proficiency in a professional setting.
                </li>
            </ol>
            <a
                href="https://form.jotform.com/250672969917070"
                class="bg-black dark:bg-white ctabutton"
                target="_blank"
            >
                {"Apply!".toUpperCase()}
            </a>
        </article>
    </section>
</main>
<Footer />
