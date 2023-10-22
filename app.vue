<script setup lang="ts">
const config = useRuntimeConfig()
useHead({ title: `${config.public.appName}` })
</script>



<template>
  <NuxtLayout name="base">
    <NuxtPage />
  </NuxtLayout>
</template>
