<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const itemId = route.params.id || 'Unknown ID'; // Using params for dynamic routing

const itemName = ref('Unnamed Item');
const itemDescription = ref('No description provided');
const itemCreationDate = ref('Unknown date');

onMounted(() => {
  try {
    const storedItem = localStorage.getItem('selectedItem');
    console.log('Retrieved item from local storage:', storedItem); // Debug log
    if (storedItem) {
      const parsedItem = JSON.parse(storedItem);
      console.log('Parsed item:', parsedItem); // Debug log
      console.log('Route item id:', itemId); // Debug log
      if (parsedItem.id === itemId) {
        itemName.value = parsedItem.title || 'Unnamed Item';
        itemDescription.value = parsedItem.description || 'No description provided';
        itemCreationDate.value = parsedItem.date || 'Unknown date';
        console.log('Item values set:', itemName.value, itemDescription.value, itemCreationDate.value); // Debug log
      } else {
        console.warn('Mismatched item id');
      }
    } else {
      console.warn('No item found in local storage');
    }
  } catch (error) {
    console.error('Error fetching item from local storage:', error);
  }
});
</script>

<template>
  <div class="w-2/5 mx-auto my-5">
    <div class="w-100">
      <NuxtLink to="/private-item">
        <div class="flex">
          <PrivateItemBackArrowSvg class="w-[16px] me-3 my-auto"/>
          <span class="font-inter font-semibold text-sm">Back to dashboard</span>
        </div>
      </NuxtLink>
      <div class="w-100 my-5">
        <p class="font-geist text-[#020817] text-xl font-extrabold my-3">
          {{ itemName }}
        </p>
        <div class="w-100 flex my-2">
          <PrivateItemCalenderSvg class="w-[16px] me-3"/>
          <span class="text-[#64748B] text-xs font-geist">
            {{ itemCreationDate }}
          </span>
        </div>
        <p class="font-inter text-[#020817] font-normal text-base my-3">
          {{ itemDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
