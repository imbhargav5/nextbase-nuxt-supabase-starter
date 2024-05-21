import type { ColumnDef } from '@tanstack/vue-table';
import DropdownAction from '@/components/PrivateItem/data-table-dropdown.vue';
import { h } from 'vue';

function truncateText(text: string, wordLimit: number): string {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
}

export interface PrivateItem {
  id: string | number;
  title: string;
  description: string;
  date: string;
}

export const columns: ColumnDef<PrivateItem>[] = [
  {
    accessorKey: 'title',
    header: () => h('div', { class: 'text-left text-sm font-inter font-medium text-[#64748B]' }, 'Title'),
    cell: ({ row }: any) => {
      const title = row.getValue("title");
      return h('div', {
        class: 'text-left text-sm font-normal text-[#020817] font-inter',
        onClick: (event) => handleRowClick(event, row.original) // Add onClick event
      }, title);
    },
  },
  {
    accessorKey: 'description',
    header: () => h('div', { class: 'text-left text-sm font-inter font-medium text-[#64748B]' }, 'Description'),
    cell: ({ row }: any) => {
      const description = row.getValue("description");
      const truncatedDescription = truncateText(description, 10); // Truncate description to 10 words
      return h('div', {
        class: 'text-left text-sm font-normal text-[#020817] font-inter',
        onClick: (event) => handleRowClick(event, row.original) // Add onClick event
      }, truncatedDescription);
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const privateItem = row.original;
      return h('div', { class: 'relative' }, h(DropdownAction, { privateItem }));
    },
  },
];

function handleRowClick(event: Event, item: PrivateItem) {
  event.stopPropagation(); // Prevent the row click event from firing
  // You will need to handle the navigation logic here.
  const router = useRouter();
  router.push({
    path: '/private-item/item-id',
    query: {
      id: item.id,
      title: item.title,
      description: item.description,
      date: item.date
    }
  });
}