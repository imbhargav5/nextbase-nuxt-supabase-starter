<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import { useRouter } from 'vue-router';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { generateId } from '@/utils/idGenerator';

const router = useRouter();
const itemName = ref('');
const itemDescription = ref('');
const emit = defineEmits(['addItem']);

const addItem = () => {
  const itemCreationDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  try {
    const itemId = generateId();
    const newItem = {
      id: itemId,
      title: itemName.value,
      description: itemDescription.value,
      date: itemCreationDate
    };

    emit('addItem', newItem);

    router.push({
      path: `/private-item/item-id`,
      query: {
        id: newItem.id,
        title: newItem.title,
        description: newItem.description,
        date: newItem.date
      }
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      alert("Unable to generate a new ID. Please try again later.");
    } else {
      console.error("An unknown error occurred");
    }
  }
};
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <Button class="bg-[#0F172A] text-sm text-white px-4 py-2">
        <PrivateItemPlusSvg class="me-3 w-[16px] text-sm text-[#F1F5F9] font-inter"/>Add item
      </Button>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle class="text-lg font-inter">Create private item</DialogTitle>
        <DialogDescription class="text-sm text-[#64748B] font-inter">
          This item will be private and only you logged in will be able to create in.
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-1">
        <div class="gap-4">
          <Label for="item-name" class="text-sm text-right font-inter">
            Name
          </Label>
          <Input v-model="itemName" id="item-name" type="text" placeholder="Type your item name" class="col-span-3 mt-3 font-inter" />
        </div>
        <div class="gap-4">
          <Label for="item-description" class="text-sm text-right font-inter">
            Description
          </Label>
          <Textarea v-model="itemDescription" id="item-description" placeholder="Enter your description" class="col-span-3 mt-3 font-inter" />
        </div>
      </div>
      <DialogFooter>
        <Button type="submit" class="bg-[#0F172A] w-[100%] font-inter font-semibold" @click="addItem">
          Create Item
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>