<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { columns } from '../components/PrivateItem/columns';
import type { PrivateItem } from '../components/PrivateItem/columns';
import DataTable from '../components/PrivateItem/data-table.vue';
import AddItem from '../components/PrivateItem/add-item.vue'; // Use the AddItem component
import { useItems } from '~/composables/useItems';

const { data, loadItemsFromLocalStorage, deleteItem, saveItemsToLocalStorage } = useItems();

const selectedItem = ref<PrivateItem | null>(null);
const modalVisible = ref(false);

const addItemToData = (newItem: PrivateItem) => {
  data.value.push(newItem);
  saveItemsToLocalStorage();
};

const handleEditItem = (item: PrivateItem) => {
  selectedItem.value = item;
  modalVisible.value = true;
};

const updateItemInData = (updatedItem: PrivateItem) => {
  const index = data.value.findIndex(item => item.id === updatedItem.id);
  if (index !== -1) {
    data.value[index] = updatedItem;
    saveItemsToLocalStorage();
  }
  modalVisible.value = false;
};

onMounted(() => {
  loadItemsFromLocalStorage();
});
</script>

<template>
  <div class="container py-10 mx-auto">
    <div class="w-100 md:w-3/6 mx-auto">
      <div class="w-full flex justify-between mb-5">
        <div class="w-full md:w-3/5">
          <p class="text-[#09090B] text-3xl font-bold font-geist">Private Item</p>
          <p class="text-[#64748B] text-base my-3 font-geist">This is the list of the private items you have created.</p>
        </div>
        <div class="w-1/5">
          <AddItem @addItem="addItemToData" :visible="modalVisible" :item="selectedItem" @updateItem="updateItemInData" @update:visible="modalVisible = $event" />
        </div>
      </div>
      <DataTable :columns="columns" :data="data" class="cursor-pointer" @editItem="handleEditItem" />
    </div>
  </div>
</template>
