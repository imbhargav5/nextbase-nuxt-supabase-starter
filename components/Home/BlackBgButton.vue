<template>
    <Button class="inline-flex h-10 items-center justify-center rounded-[8px] bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 w-[8rem]" :to="buttonLink">
    {{ buttonText }}
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