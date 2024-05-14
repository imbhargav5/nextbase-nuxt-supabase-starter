<script setup lang="ts">
   import { Button } from '@/components/ui/button'
</script>
<template>
   <!-- section 1 -->
   <div class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div class="container px-4 md:px-6">
         <div class="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <img
               alt="Hero"
               class="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
               height="550"
               src="https://generated.vusercontent.net/placeholder.svg"
               width="550"
               />
            <div class="flex flex-col justify-center space-y-4">
               <div class="space-y-2">
                  <h1 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                     The complete platform for building the Web
                  </h1>
                  <p class="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                     Give your team the toolkit to stop configuring and start
                     innovating. Securely build, deploy, and scale the best web
                     experiences.
                  </p>
               </div>
               <div class="flex flex-col gap-2 min-[400px]:flex-row">
                  <NuxtLink
                     class="inline-flex h-10 items-center justify-center bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 rounded-[8px]" 
                     href="/login"
                     >
                     Login
                  </NuxtLink>
                  <NuxtLink
                     class="inline-flex h-10 items-center justify-center rounded-[8px] border border-gray-200  bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                     href="#"
                     >
                     Contact Sales
                  </NuxtLink>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- section 1 -->
   <!-- section 2 -->
   <div class="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div class="container px-4 md:px-6">
         <div class="flex flex-col items-center justify-center space-y-4 text-center">
            <div class="space-y-2">
               <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  New Features
               </div>
               <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Faster iteration. More innovation.
               </h2>
               <p class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  The platform for rapid progress. Let your team focus on shipping
                  features instead of managing infrastructure with automated
                  CI/CD, built-in testing, and integrated collaboration.
               </p>
            </div>
            <div class="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
               <img
                  alt="Image"
                  class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                  height="310"
                  src="https://generated.vusercontent.net/placeholder.svg"
                  width="550"
                  />
               <div class="flex flex-col justify-center space-y-4">
                  <ul class="grid gap-6">
                     <li>
                        <div class="grid gap-1">
                           <h3 class="text-xl font-bold">Collaboration</h3>
                           <p class="text-gray-500 dark:text-gray-400">
                              Make collaboration seamless with built-in code review
                              tools.
                           </p>
                        </div>
                     </li>
                     <li>
                        <div class="grid gap-1">
                           <h3 class="text-xl font-bold">Automation</h3>
                           <p class="text-gray-500 dark:text-gray-400">
                              Automate your workflow with continuous integration.
                           </p>
                        </div>
                     </li>
                     <li>
                        <div class="grid gap-1">
                           <h3 class="text-xl font-bold">Scale</h3>
                           <p class="text-gray-500 dark:text-gray-400">
                              Deploy to the cloud with a single click and scale with
                              ease.
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   <!-- section 2 -->
   <!-- section 3 -->
   <div class="w-full py-12 md:py-24 lg:py-32">
      <div class="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
         <div class="space-y-2">
            <h2 class="text-3xl font-bold tracking-tighter md:text-4xl/tight">
               Experience the workflow the best frontend teams love.
            </h2>
            <p class="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
               Let your team focus on shipping features instead of managing
               infrastructure with automated CI/CD.
            </p>
         </div>
         <div class="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
            <NuxtLink
               class="inline-flex h-10 items-center justify-center rounded-[8px] bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
               href="#"
               >
               Contact Sales
            </NuxtLink>
            <NuxtLink
               class="inline-flex h-10 items-center justify-center rounded-[8px] border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
               href="#"
               >
               Learn more
            </NuxtLink>
         </div>
      </div>
   </div>
   <!-- section 3 -->
   <!-- section 4 -->
   <div class="w-full py-12 md:py-24 lg:py-32 border-t">
      <div class="container px-4 md:px-6">
         <div class="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
            <div class="space-y-4">
               <div class="inline-block rounded-[10px] bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Performance
               </div>
               <h2 class="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Traffic spikes should be exciting, not scary.
               </h2>
               <NuxtLink
                  class="inline-flex h-9 items-center justify-center rounded-[8px] bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/login"
                  >
                  Login
               </NuxtLink>
            </div>
            <div class="flex flex-col items-start space-y-4">
               <div class="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Security
               </div>
               <p class="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                  Fully managed infrastructure designed to scale dynamically with
                  your traffic, a global edge to ensure your site is fast for
                  every customer, and the tools to monitor every aspect of your
                  app.
               </p>
               <NuxtLink
                  class="inline-flex h-9 items-center justify-center rounded-[8px] border border-gray-200  bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  href="#"
                  >
                  Contact Sales
               </NuxtLink>
            </div>
         </div>
      </div>
   </div>
   <!-- section 4 -->
</template>