<script setup lang="ts">
const { data: nav } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>



<template>
    <ul class="flex flex-wrap gap-32">
        <li v-for="link in nav![0].children" :key="link._path">
            <NuxtLink :to="`${link._path}`" class="text-xl">{{ link.title }}</NuxtLink>
        </li>
    </ul>
</template>