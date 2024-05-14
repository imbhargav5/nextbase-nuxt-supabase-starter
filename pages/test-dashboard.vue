<template>
<Header/>
<div class=" mb-5 w-100 md:w-[90vw] mx-auto">
    <h1 class="text-[50px] 
font-black">Create Private Item</h1>
    <p class="font-semibold">This item will be private and only you logged in will be able to create it.
    </p>
    <div class="">
    <div class="grid w-100 max-w-sm items-center gap-1.5 mt-3">
    <label for="name">Name</label>
    <Input id="name" type="name" placeholder="" class="w-100 rounded-[10px]" />
    <label for="message">Description</label>
    <Textarea id="message" placeholder="" class="w-100 rounded-[10px]" />
    <CustomButtonLogin buttonText="Create Item" class="mt-5 w-[30rem]"/>
    </div>
  </div>
    
</div>
<Footer/>
</template>
<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

</script>
