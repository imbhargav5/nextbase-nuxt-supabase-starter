// composables/useItems.ts
import { ref } from 'vue';

interface Item {
  id: string | number;
  title: string;
  description: string;
  date: string;
}

const items = ref<Item[]>([]);

const loadItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem('privateItems');
  if (storedItems) {
    items.value = JSON.parse(storedItems);
  }
};

const saveItemsToLocalStorage = () => {
  localStorage.setItem('privateItems', JSON.stringify(items.value));
};

const addItem = (newItem: Item) => {
  items.value.push(newItem);
  saveItemsToLocalStorage();
};

const deleteItem = (itemId: string | number) => {
  items.value = items.value.filter(item => item.id !== itemId);
  saveItemsToLocalStorage();
};

export const useItems = () => {
  return {
    items,
    loadItemsFromLocalStorage,
    saveItemsToLocalStorage,
    addItem,
    deleteItem
  };
};
