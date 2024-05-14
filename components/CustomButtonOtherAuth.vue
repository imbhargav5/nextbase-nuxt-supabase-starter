<template>
  <NuxtLink
    :class="buttonClasses"
    :href="link" 
  >
    {{ buttonText }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true
    },
    link: {
      type: String,
      default: '/login'
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClasses() {
      return 'w-[20rem] md:w-[20rem] inline-flex h-9 items-center justify-center rounded-[8px] px-4 py-2 text-sm font-medium text-gray-900 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 border-2 border-gray-200';
    }
  }
};
</script>


