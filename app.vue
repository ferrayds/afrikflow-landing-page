<script setup lang="ts">
const color = computed(() => ("dark" === "dark" ? "#17706E" : "white"));
const config = useRuntimeConfig().public;

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [
    { rel: "icon", href: "/favicon.png" },
    { rel: "manifest", href: "/manifest.json" },
  ],
  htmlAttrs: {
    lang: "fr",
    class: "bg-light",
  },
});

useSeoMeta({
  title: "AfrikFlow",
  description:
    "AfrikFlow est une application web et mobile révolutionnaire conçue pour faciliter les transactions financières en Afrique.",
  ogTitle: "AfrikFlow",
  ogDescription:
    "AfrikFlow est une application web et mobile révolutionnaire conçue pour faciliter les transactions financières en Afrique.",
  ogImage: "",
  twitterImage: "",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <div class="lg:p-3 lg:mx-3 pb-0 lg:pb-0">
    <NuxtRouteAnnouncer />
    <NuxtLoadingIndicator color="#F6B339" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
</style>