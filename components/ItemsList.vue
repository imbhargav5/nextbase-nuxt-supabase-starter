<template>
  <div class="mb-5 w-[90%] mx-auto md:mx-0 md:w-3/5 ">
     <form @submit.prevent="addItem">
      <div class="b  md:w-4/5  mx-auto">
     <h1 class="text-[30px] md:text-[50px] 
        font-black">Create Private Item</h1>
     <p class="text-sm font-base">This item will be private and only you logged in will be able to create it.
     </p>
     
        <div class="grid   items-center gap-1.5 mt-3">
           <label for="name">Name</label>
           <Input id="name" type="text" v-model="newItemName" placeholder="" required  class="w-100" />
           <label for="message">Description</label>
           <Textarea id="message"  v-model="newItemDescription" placeholder="" class="w-100" />
           <Button type="submit" class="mt-5 w-100">Create Item</Button>
           
        </div>
     </div>
    </form>
  </div>
  <template v-if="pending">
     <div>Loading...</div>
  </template>
  <template v-else-if="error">
     <div>Failed to load tasks. Please try again later.</div>
  </template>
  <template v-else-if="items && items.length">
     <div class="space-2">
        <div v-for="item in items" :key="item.id" >
           <div class="border-2 border-gray-300 rounded-md p-4 w-full max-w-48" v-if="editingItemId === item.id">
              <input class="w-full" v-model="item.name" />
              <input class="w-full" v-model="item.description" />
              <button @click="saveItem(item)">Save</button>
              <button @click="cancelEdit">Cancel</button>
           </div>
           <div class="border-2 border-gray-300 rounded-md p-4 w-full max-w-48" v-else>
              <h2>{{ item.name }}</h2>
              <p>{{ item.description }}</p>
              <button @click="editItem(item.id)">Edit</button>
           </div>
        </div>
     </div>
  </template>
  <!-- <div v-else>No tasks available</div> -->
 
</template>
<script setup lang="ts">
  import { Textarea } from '@/components/ui/textarea';
  import type { Database } from '~/lib/database.types';
  const editingItemId = ref<string | null>(null);
  const supabaseClient =  useSupabaseClient<Database>();
  const {data: items, pending, error, refresh} = await useAsyncData<Array<Table<'items'>>>('items', async () => {
    const { data, error } = await supabaseClient.from('items').select('*')
    .order('created_at', { ascending: false })
    if (error) {
      throw error
    }
    return data; 
  })
  
  const newItemName = ref('');
    const newItemDescription = ref('');
  
  const addItem = async () => {
    if (!newItemName.value || !newItemDescription.value) {
        return;
    }
  const { error } = await supabaseClient
    .from('items')
    .insert({ name: 
      newItemName.value, description: newItemDescription.value
    });
  if (error) {
    alert('Error adding item: ' + error.message);
  } else {
    newItemName.value = ''; // Reset the input after successful insertion
    newItemDescription.value = ''; // Reset the input after successful insertion
    // Optionally, refresh the list
    refresh();
  
  }
  };
  
  const deleteItem = async (id: string) => {
  const { error } = await supabaseClient.from('items').delete().match({ id });
  if (error) {
    alert('Error deleting item: ' + error.message);
  } else {
    refresh();
  }
  };
  
  const editItem = (id: string) => {
  editingItemId.value = id;
  };
  
  const cancelEdit = () => {
  editingItemId.value = null;
  };
  
  const saveItem = async (item: Table<'items'>) => {
  const { error } = await supabaseClient.from('items')
    .update({ name: item.name, description: item.description })
    .match({ id: item.id });
  if (error) {
    alert('Error updating item: ' + error.message);
  } else {
    editingItemId.value = null;
    refresh();
  }
  };
  
</script>