// DataTableDropDown.vue
<script setup lang="ts">
import { MoreHorizontal } from 'lucide-vue-next'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { useItems } from '~/composables/useItems'; 


// Define props
const props = defineProps<{
  privateItem: {
    id: string | number;
    title: string;
    description: string;
    date: string;
  }
}>();

const { deleteItem } = useItems();

const handleDelete = () => {
  deleteItem(props.privateItem.id);
};
function copy(id: string) {
  navigator.clipboard.writeText(id)
}
function editItem(){
  alert('edit button clicked')
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
      <!-- <DropdownMenuLabel>Actions</DropdownMenuLabel> -->
      <!-- <DropdownMenuSeparator /> -->
      <DropdownMenuItem @click="editItem">Edit Item</DropdownMenuItem>
      <DropdownMenuItem @click="handleDelete">Delete Item</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>