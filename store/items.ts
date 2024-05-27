import { ref } from 'vue';

interface Item {
    id: string | number;
    name: string;
    description: string;
    date: string;
  }
  

export const items = ref<Item[]>([]);

export const addItem = (item: Item) => {
  items.value.push(item);
};
