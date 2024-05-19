// Assuming PrivateItems is defined somewhere in your code
export interface PrivateItem {
    title: string ; // Adjust this type according to your actual data structure
    // Other fields...
    description: string ;
  }
  
  // Your table column definition
  import type { ColumnDef } from '@tanstack/vue-table';
  import DropdownAction from '@/components/PrivateItem/data-table-dropdown.vue';
  import { h } from 'vue'

export const columns: ColumnDef<PrivateItem>[] = [
  {
    accessorKey: 'title',
    header: () => h('div', { class: 'text-left text-sm font-inter font-medium text-[#64748B]' }, 'Title'),
    cell: ({ row }:any) => {
      const title = row.getValue("title");
      return h('div', {class:'text-left text-sm font-normal text-[#020817] font-inter'}, title)

    },
  },
  {
    accessorKey: 'description',
    header: () => h('div', { class: 'text-left text-sm font-inter font-medium text-[#64748B]' }, 'Description'),
    cell: ({ row }:any) => {
      const description = row.getValue("description");
      return h('div', {class:'text-left text-sm font-normal text-[#020817] font-inter'}, description)

    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
        const privateItem = row.original

        return h('div', { class: 'relative' }, h(DropdownAction, {
          privateItem,
        }))
    },
},

]