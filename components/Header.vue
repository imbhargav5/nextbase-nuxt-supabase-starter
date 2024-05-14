<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>
<template>
  <div class="col-12 container px-4 lg:px-6 h-14 flex items-center py-10">
    <NuxtLink to="/" class="flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
      <span class="hidden lg:block ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        Nextbase Open Source
      </span>
      <span class="block lg:hidden ml-2 text-xl font-bold text-gray-900 dark:text-gray-100">
        Nextbase
      </span>
    </NuxtLink>
    <nav class="ml-auto hidden md:flex lg:flex gap-4 sm:gap-6 items-center">
      <NuxtLink
        class="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
        to="#"
      >
        Features
      </NuxtLink>
      <NuxtLink
        class="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
        to="#"
      >
        Pricing
      </NuxtLink>
      <NuxtLink
        class="text-sm hidden lg:block font-medium hover:underline underline-offset-4"
        to="#"
      >
        About
      </NuxtLink>
      <NuxtLink
        href="https://usenextbase.com"
        target="_blank"
        rel="noopener noreferrer"
        class="text-sm font-medium hover:underline underline-offset-4"
      >
        <Button class="inline-flex items-center gap-2 justify-center  bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-2 text-sm font-medium text-white shadow-lg transition-colors hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-[8px]">
          Premium Nextbase Starter Kits  <img src="/assets/images/ExternalLinkImg.png">
        </Button>
      </NuxtLink>
    </nav>
  </div>
</template>
<style lang="scss">
</style>
