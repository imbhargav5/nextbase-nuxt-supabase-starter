<script setup="">
const navItems = ref([
    {
        title: "Features",
        path: "/"
    },
    {
        title: "Pricing",
        path: "/pricing"
    },
    {
        title: "About",
        path: "/about"
    }
])
</script>
<template>
    <div class="container px-4 lg:px-6 h-14 flex items-center py-10">
        <Logo/>
        <nav class="ml-auto hidden md:flex lg:flex gap-4 sm:gap-6 mx-3 items-center">
            <div v-for='(item, index) in navItems' :key="index" class="text-sm hidden lg:block font-medium hover:underline underline-offset-4 cursor-pointer">
            <span> {{item.title}}</span>
            </div>
         
        </nav>
        <Button class="inline-flex items-center gap-2 justify-center  bg-gradient-to-r from-blue-500 to-purple-500 md:px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-[8px]">
            Premium Nextbase 
            <br class="md:hidden lg:hidden">Starter Kits  <img src="/assets/images/header-img/ExternalLinkImg.png">
          </Button>
    </div>
</template>