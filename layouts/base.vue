<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>



<template>
    <main class="min-h-screen overflow-x-hidden bg-navy-blue text-gray-100 font-zen-maru-gothic">
        <header class="w-full py-4 bg-navy-purple">
            <div class="flex justify-between items-center px-8">
                <NuxtLink to="/"
                    class="bg-clip-text text-transparent bg-gradient-to-t from-amber-400 via-orange-400 to-rose-400 text-6xl font-zen-dots italic tracking-wider">
                    S.I's Statistics
                </NuxtLink>
                <div class="flex items-center gap-8">
                    <NuxtLink to="https://si-library.net" target="_blank" rel="noopener noreferer" >
                        S.I's Library
                    </NuxtLink>
                    <NuxtLink to="https://bellcurve.jp/statistics/course/#step1" target="_blank" rel="noopener noreferer" >
                        統計WEB/BellCurve
                    </NuxtLink>
                </div>
            </div>
        </header>
        <div class="py-6 px-12">
            <slot />
        </div>
    </main>
    <footer class="w-full bg-navy-purple">
        <p class="font-zen-dots text-gray-100 text-xs text-center py-4">&copy; {{ year }} SHOTA INOUE</p>
    </footer>
</template>