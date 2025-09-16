<script lang="ts">
    import { goto } from "$app/navigation";
    import Header from "$lib/Header.svelte";
</script>

<Header />
<main>
    <section
        class="w-full h-[calc(100vh-5rem)] flex justify-start md:justify-center px-3 lg:px-0"
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
    <!-- section class => "bg-purple-100 dark:bg-purple-900" -->
</main>
