<!-- edit-item.vue -->
<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps<{
  item: { id: string | number; title: string; description: string; date: string };
}>();

const emit = defineEmits(['updateItem', 'close']);

const itemName = ref(props.item.title);
const itemDescription = ref(props.item.description);

watch(() => props.item, (newItem) => {
  itemName.value = newItem.title;
  itemDescription.value = newItem.description;
});

const saveItem = () => {
  const updatedItem = {
    ...props.item,
    title: itemName.value,
    description: itemDescription.value,
  };

  emit('updateItem', updatedItem);
};

const closeModal = () => {
  emit('close');
};
</script>

<template>
  <Dialog :open="true" @close="closeModal">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="text-lg font-inter">Edit private item</DialogTitle>
        <DialogDescription class="text-sm text-[#64748B] font-inter">
          This item will be private and only you logged in will be able to edit it.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-1">
        <div class="gap-4">
          <Label for="item-name" class="text-sm text-right font-inter">Name</Label>
          <Input v-model="itemName" id="item-name" type="text" placeholder="Type your item name" class="col-span-3 mt-3 font-inter" />
        </div>
        <div class="gap-4">
          <Label for="item-description" class="text-sm text-right font-inter">Description</Label>
          <Textarea v-model="itemDescription" id="item-description" placeholder="Enter your description" class="col-span-3 mt-3 font-inter" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" class="bg-[#0F172A] w-[100%] font-inter font-semibold" @click="saveItem">Update Item</Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
