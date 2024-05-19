<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'


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
          <Label for="name" class="text-sm text-right font-inter ">
            Name
          </Label>
          <Input id="name" value="" placeholder="Enter your name..." class="col-span-3 mt-3 font-inter" />
        </div>
        <div class=" gap-4">
          <Label for="username" class="text-sm text-right font-inter ">
            Description
          </Label>
          <Textarea for="username" value="" placeholder="Enter your description" class="col-span-3 mt-3 font-inter" />
        </div>
      </div>
      <DialogFooter>
     
        <Button type="submit"  class="bg-[#0F172A] w-[100%] font-inter font-semibold">
          <NuxtLink href="/private-item/item-id">
            Create Item
          </NuxtLink>
        </Button>
    
    
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>