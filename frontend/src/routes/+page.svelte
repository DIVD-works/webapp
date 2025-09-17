<script lang="ts">
    import { goto } from "$app/navigation";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <!-- Banner section -->
    <section
        class="banner w-full h-[calc(100vh-5rem)] flex justify-start md:justify-center px-3 lg:px-0"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8 md:gap-20"
        >
            <h1
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Powered by Purpose
            </h1>
            <p class="text-white text-base sm:text-lg md:text-xl font-base">
                The goal of the DIVD.works project is to create a platform that
                brings together young digital talent and employers. We help you
                not only further develop your skills, but also find an
                internship or (part-time) job that suits you. Finding an
                internship or later a graduation internship turns out to be
                quite a challenge, causing more and more young people to give
                up. A shame, isn’t it? We aim to change that! Click the buttons
                below to get started and find your search for an internship or
                project.
            </p>
            <div
                class="w-full flex flex-col sm:flex-row text-white gap-5 md:gap-10 text-xl sm:text-2xl
                font-semibold"
            >
                <button
                    class="bg-purple-500 w-full h-16 rounded-2xl cursor-pointer"
                    on:click={(): Promise<void> => goto("/")}
                    >{"Apply now!".toUpperCase()}</button
                >
                <button
                    class="w-full h-16 rounded-2xl border-1 cursor-pointer hover:bg-gray-800 duration-200 ease-out
                    hover:ease-in"
                    on:click={(): Promise<void> => goto("/")}
                    >{"Internships".toUpperCase()}</button
                >
            </div>
        </article>
    </section>
    <!-- Definement section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Our Definement
            </h2>
            <p class="text-gray-700 dark:text-gray-300 text-base sm:text-lg">
                At DIVD.works we take our time to build meaningfull projects
                that really have an impact. No promises we know we can't make or
                half baked solutions. We are working with a set of experienced
                people who have a lot of experience in the field. Whether this
                are applications, Cyber Security, Databases or other IT related
                things, we have the experience. As the first profit organization
                from the DIVD family, we really want to stand out and change the
                way how the industry works. If you want to read more you can
                click the button below for more information about how work.
            </p>
            <button
                class="bg-purple-500 w-full sm:w-50 h-12 rounded-2xl cursor-pointer text-black dark:text-white
                text-xl font-semibold hover:bg-purple-400 dark:hover:bg-purple-600 duration-200 ease-out
                hover:ease-in"
                on:click={(): Promise<void> => goto("/")}
            >
                Learn more
            </button>
        </article>
    </section>
    <!-- Why choose us section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50
        dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8 md:gap-20"
        >
            <h2
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Why choose us?
            </h2>
        </article>
    </section>
    <!-- Technlogy section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8 md:gap-20"
        >
            <h2
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Technlogy
            </h2>
        </article>
    </section>
    <!-- Newsletter section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-slate-50
        dark:bg-slate-950"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8 md:gap-20"
        >
            <h2
                class="text-purple-500 text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Newsletter
            </h2>
        </article>
    </section>
    <!-- Looking for opportunities section -->
    <section
        class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white
        dark:bg-black"
    >
        <article
            class="w-full md:w-4/5 lg:w-7/10 flex justify-center items-center flex-col gap-8"
        >
            <h2
                class="text-black dark:text-white text-3xl sm:text-5xl md:text-6xl font-extrabold"
            >
                Looking for opportunities?
            </h2>
            <button
                class="bg-purple-500 w-full sm:w-60 h-12 rounded-2xl cursor-pointer text-black dark:text-white
                text-xl font-semibold hover:bg-purple-400 dark:hover:bg-purple-600 duration-200 ease-out
                hover:ease-in"
                on:click={(): Promise<void> => goto("/")}
            >
                Ask on Discord
            </button>
        </article>
    </section>
</main>
