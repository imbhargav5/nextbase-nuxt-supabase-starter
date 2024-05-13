<template>
    <div class="text-center">
      <div>Tasks</div>
      <template v-if="pending">
        <div>Loading...</div>
      </template>
      <template v-else-if="error">
        <div>Failed to load tasks. Please try again later.</div>
      </template>
      <template v-else-if="items && items.length">
        <div v-for="item in items" :key="item.id">
          <div>{{ item.name }}</div>
        </div>
      </template>
      <div v-else>No tasks available</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import type { Database } from '~/lib/database.types';

  definePageMeta({
    layout: "user",
    middleware: "auth"
  })
  const supabaseClient =  useSupabaseClient<Database>();
  const {data: items, pending, error} = await useAsyncData<Array<Table<'items'>>>('items', async () => {
    const { data, error } = await supabaseClient.from('items').select('*')
    if (error) {
      throw error
    }
    return data; 
  })

  

  useHead({
    title: 'Dashboard | Nextbase'
  })

  </script>
  