// DataTableDropDown.vue
<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useItems } from '~/composables/useItems';
import type { PrivateItem } from '@/components/PrivateItem/columns'; // Adjust the path as necessary

// Define props
const props = defineProps<{
  privateItem: PrivateItem
}>();

const emit = defineEmits(['editItem']);

const { deleteItem } = useItems();

const handleDelete = () => {
  deleteItem(props.privateItem.id);
};

const handleEdit = () => {
  emit('editItem', props.privateItem);
};

function copy(id: string) {
  navigator.clipboard.writeText(id);
}
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button variant="ghost" class="w-8 h-8 p-0">
        <span class="sr-only">Open menu</span>
        <MoreHorizontal class="w-4 h-4" />
      </Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end">
      <DropdownMenuItem @click="">Edit Item</DropdownMenuItem>
      <DropdownMenuItem @click="handleDelete">Delete Item</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>