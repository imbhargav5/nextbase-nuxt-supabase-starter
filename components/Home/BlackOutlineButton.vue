<template>
    <Button class="w-[8rem] inline-flex h-10 items-center justify-center rounded-[8px] border border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300" :to="buttonLink" variant="outline">
      {{buttonText}} 
    </Button>
  </template>
  <script>
  export default {
    props: {
      buttonText: {
        type: String
      },
      buttonLink: {
        type: String
      }
    }
  };
  </script>