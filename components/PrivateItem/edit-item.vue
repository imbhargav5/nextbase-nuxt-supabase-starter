<!-- EditItem.vue -->
<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from 'vue';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const props = defineProps<{
  visible: boolean;
  item: {
    id: string | number;
    title: string;
    description: string;
    date: string;
  };
}>();

const emit = defineEmits(['updateItem', 'update:visible']);

const formData = ref({ ...props.item });

watch(() => props.item, (newItem) => {
  formData.value = { ...newItem };
});

const handleSubmit = () => {
  emit('updateItem', formData.value);
  closeModal();
};

const closeModal = () => {
  emit('update:visible', false);
};
</script>

<template>
  <Dialog :open="props.visible" @close="closeModal">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="text-lg font-inter">Edit private item</DialogTitle>
        <DialogDescription class="text-sm text-[#64748B] font-inter">
          Update the details of your private item.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-1">
        <div class="gap-4">
          <Label for="item-title" class="text-sm text-right font-inter">
            Title
          </Label>
          <Input v-model="formData.title" id="item-title" type="text" placeholder="Type your item title" class="col-span-3 mt-3 font-inter" />
        </div>
        <div class="gap-4">
          <Label for="item-description" class="text-sm text-right font-inter">
            Description
          </Label>
          <textarea v-model="formData.description" id="item-description" placeholder="Enter your description" class="col-span-3 mt-3 font-inter"></textarea>
        </div>
      </div>
      <DialogFooter>
        <Button type="button" class="bg-[#0F172A] w-[100%] font-inter font-semibold" @click="handleSubmit">
          Save Changes
        </Button>
        <Button type="button" class="w-[100%] font-inter font-semibold" @click="closeModal">
          Cancel
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
