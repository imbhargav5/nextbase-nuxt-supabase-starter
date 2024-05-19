<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { columns } from '../components/PrivateItem/columns';
import type { PrivateItem } from '../components/PrivateItem/columns'; 
import DataTable from '../components/PrivateItem/data-table.vue'; 
import AddItem from '../components/PrivateItem/add-item.vue'; 

const data = ref<PrivateItem[]>([]);

async function getData(): Promise<PrivateItem[]> {
  const item = {
    title: "Whispers of Eternity",
    description: "A haunting tale of lost love and..."
  };

  return Array(10).fill(item);
}


onMounted(async () => {
  data.value = await getData();
});
</script>

<template>
  <div class="container py-10 mx-auto">
    <div class="w-100 md:w-3/6 mx-auto">
      <div class="w-full flex justify-between mb-5">
        <div class="w-full md:w-3/5">
          <p class="text-[#09090B] text-3xl font-bold font-geist">Private Item</p>
          <p class="text-[#64748B] text-base my-3 font-geist">This is the list of the private items you have created. </p>
        </div>
        <div class="w-1/5">
                    <AddItem/>
        </div>
      </div>
      <DataTable :columns="columns" :data="data"  class=""/>
    </div>
  </div>
</template>
