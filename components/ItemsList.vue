<template>
    <div class="text-center flex flex-col items-center">
      <div>Tasks</div>
      <form @submit.prevent="addItem">
        <h1>Add a new task</h1>
        <input v-model="newItemName" placeholder="Enter new task name" required />
        <input v-model="newItemDescription" placeholder="Enter new task description" required />
        <button type="submit">Add Task</button>
      </form>
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
      <div v-else>No tasks available</div>
    </div>
  </template>
  
  <script setup lang="ts">
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
  