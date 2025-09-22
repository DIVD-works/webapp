<script lang="ts">
    import Footer from "$lib/Footer.svelte";
    import Header from "$lib/Header.svelte";

    import type { Projects } from "$lib/types";
    import PGU from "$lib/assets/projects/project-global-universities.png";
    import ICY from "$lib/assets/projects/project-icy.png";
    import VLAM from "$lib/assets/projects/vlamai.png";

    const projects: Projects<string>[] = [
        {
            location:
                "https://csirt.substack.com/p/project-global-universities-pgu",
            image: PGU,
            title: "Project Global Universities",
            description:
                "CSIRT.global's Global Universities project aims to identify and mitigate cybersecurity vulnerabilities affecting universities worldwide. We work closely with talented cybersecurity students who contribute their skills through hands-on research and analysis. These students investigate exposed systems, analyze threats, and support responsible disclosure processes. The goal is to enhance digital resilience in the academic sector while nurturing the next generation of cybersecurity professionals.",
        },
        {
            location: "https://github.com/SSC-ICT-Innovatie/ICY",
            image: ICY,
            title: "Project ICY",
            description:
                "An open-source survey application designed as an alternative solution for use by the Dutch Government.",
            tags: [
                "Programming Language: Dart",
                "Framework: Flutter",
                "Supported Platforms: Fully multi-platform, including mobile (iOS & Android), web, and desktop environments.",
            ],
        },
        {
            location: "https://vlam.ai/",
            image: VLAM,
            title: "vlam.ai",
            description:
                "Project vlam.ai (Veilige, Lokale AI Modellen – “Safe, Local AI Models”) is a Dutch government initiative by BZK, VRO, and SSC-ICT that delivers secure, locally hosted, and scalable AI solutions for the Dutch government, enabling private AI application deployment, confidential generative AI chat, and efficient AI-powered search across public-sector data.",
        },
    ];
</script>

<Header />
<main>
    <section class="section !p-0 !pt-5 lg:!pt-10 bgdefault">
        <article class="article !items-start md:!items-center">
            <h1 class="h1">Projects</h1>
            <p class="p my-3 text-left md:text-center">
                At DIVD.works, we build projects that help us learn and grow
                with the open to work principle. We believe in sharing our work
                to the outside world and learning from others. Open source
                projects is a great way to do this. Making us on of the first
                companies in the Netherlands to openly share about how we to
                things and what makes us stand out.
            </p>
            <div class="w-full grid grid-cols-12 gap-8">
                {#each projects as { location, image, title, description, tags }, _}
                    <article class="projects">
                        <a
                            href={location}
                            class="col-span-12 xl:col-span-4"
                            target="_blank"
                        >
                            <img src={image} alt={title} fetchpriority="high" />
                        </a>
                        <div class="col-span-12 xl:col-span-8">
                            <h2 class="h2 !text-3xl md:!text-4xl">
                                {title}
                            </h2>
                            <p class="p mt-8 mb-4">
                                {description}
                            </p>
                            <ol class="p pl-4" style="list-style-type:square">
                                {#each tags as tag}
                                    <li class="marker:text-purple-500">
                                        {tag}
                                    </li>
                                {/each}
                            </ol>
                        </div>
                    </article>
                {/each}
            </div>
        </article>
    </section>
</main>
<Footer />
