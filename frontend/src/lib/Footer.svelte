<script lang="ts">
    import { Temporal } from "@js-temporal/polyfill";

    const copyright_year: () => number = (): number =>
        typeof Temporal !== "undefined"
            ? Temporal.Now.plainDateISO().year
            : new Date().getFullYear();
</script>

<footer
    class="w-full flex justify-start md:justify-center px-3 lg:px-0 py-10 bg-white dark:bg-black"
>
    <article
        class="w-full md:w-4/5 lg:w-7/10 grid grid-cols-12 justify-center items-start lg:gap-8 border-t
        border-purple-500 text-black dark:text-white"
    >
        <div class="col-span-12 lg:col-span-6">
            <h3 class="font-semibold text-3xl py-8">About DIVD.works</h3>
            <p class="text-gray-700 dark:text-gray-300 text-sm italic">
                We connect young digital talent with employers to support skill
                development and career-aligned internships or part-time roles.
                By simplifying the search process, it helps prevent talented
                individuals from feeling discouraged.
            </p>
            <p class="pt-4 text-sm">
                © {copyright_year()} DIVD.works, Inc. All rights reserved.
            </p>
        </div>
        <ul
            class="col-span-12 sm:col-span-6 lg:col-span-3 list-disc pt-8 text-sm marker:text-purple-500 pl-3"
        >
            <a href="/"><li class="underline">About DIVD.works</li></a>
            <a href="/"><li class="py-4 underline">Working at DIVD.works</li></a
            >
            <a href="/"><li class="underline">Privacy Statement</li></a>
            <a href="/"><li class="py-4 underline">Terms & Conditions</li></a>
            <a href="/"><li class="underline">Cookies</li></a>
        </ul>
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 pt-8 text-sm">
            <h3 class="font-semibold text-3xl pb-2">HQ Office</h3>
            <a href="/" class="underline text-gray-700 dark:text-gray-300"
                >Maanweg 174 2516 AB Den Haag</a
            >
            <p class="pt-2 text-purple-500">Tel: (+31) 70 41 90 309</p>
        </div>
    </article>
</footer>
