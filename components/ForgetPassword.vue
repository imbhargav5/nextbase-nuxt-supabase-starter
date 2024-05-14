<template>
<div class="flex justify-center mt-5 lg:w-[45vw]">
      <form @submit.prevent="login" class="grid gap-6">
            <div class="mx-auto">
               <ErrorAlert :error-msg="authError" @clearError="clearError" />
             
               <div class="grid gap-4 mb-4">
                  <div class="grid gap-2">
                     <label> Email address
                     </label>
                     <Input id="email" type="email" placeholder="Email address" v-model="email" required class="rounded-[8px]"/>
                  </div>
                  <NuxtLink href="/" class=" text-blue-700 "> Login instead?</NuxtLink>
                  <CustomButtonLogin buttonText="Reset Password" />
               </div>
              
            </div>
         </form>
      </div>
</template>
<script setup lang="ts">
   import { Input } from '@/components/ui/input'

</script>