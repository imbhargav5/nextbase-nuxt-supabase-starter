// useItems.ts
import { ref } from 'vue';
import type { PrivateItem } from '@/components/PrivateItem/columns'; // Adjust the path as necessary

const data = ref<PrivateItem[]>([]);

const loadItemsFromLocalStorage = () => {
  const storedItems = localStorage.getItem('privateItems');
  if (storedItems) {
    data.value = JSON.parse(storedItems);
  }
};

const saveItemsToLocalStorage = () => {
  localStorage.setItem('privateItems', JSON.stringify(data.value));
};

const deleteItem = (id: string | number) => {
  data.value = data.value.filter(item => item.id !== id);
  saveItemsToLocalStorage();
};

export const useItems = () => {
  return {
    data,
    loadItemsFromLocalStorage,
    saveItemsToLocalStorage,
    deleteItem,
  };
};
