<template>
  <ItemsList/>
  </template>
  
  <script setup lang="ts">

  definePageMeta({
    layout: "user",
    middleware: "auth"
  })


  useHead({
    title: 'Dashboard | Nextbase'
  })

  </script>
  