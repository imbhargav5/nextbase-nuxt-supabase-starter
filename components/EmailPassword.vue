<template>
<div class="flex justify-center mt-5 lg:w-[45vw]">
      <form @submit.prevent="login" class="grid gap-6">
            <div class="mx-auto">
               <ErrorAlert :error-msg="authError" @clearError="clearError" />
               
                <div style="flex flex-col">
                <div class="my-2">
                <CustomButtonOtherAuth buttonText="Google" />
                </div>
                <div class="my-2" >
               <CustomButtonOtherAuth buttonText="LinkedIn" />
                </div>
               <div class="my-2">
                <CustomButtonOtherAuth buttonText="Github" />
                </div>
               </div>
               <!-- Other Authentication Method -->
               <div class="grid gap-4 mb-4">
                  <div class="grid gap-2">
                     <label> Email address
                     </label>
                     <Input id="email" type="email" placeholder="Email address" v-model="email" required class="rounded-[8px]"/>
                  </div>
                  <CustomButtonLogin buttonText="Login With MagicLink" />
               </div>
               <hr>
               <div class="grid gap-4 mt-4">
                  <div class="grid gap-2">
                     <label> Email address
                     </label>
                     <Input id="email" type="email" placeholder="Email address" v-model="email" required class="rounded-[8px]"/>
                  </div>
                  <div class="grid gap-2">
                     <label>Password</label>
                     <Input id="password" type="password" placeholder="Password" v-model="password" class="rounded-[8px]" required />
                  </div>
                  <div class="flex justify-between">
                     <NuxtLink to="/register" class="fTZPOV">Register</NuxtLink>
                     <NuxtLink to="/forgot-password" class="fTZPOV">Forgot your password?</NuxtLink>
                  </div>
                   <CustomButtonLogin buttonText="Login" />
                    <CustomButtonLogin buttonText="Login with Google" />
                 
               </div>
               <div class="mt-4 text-center text-sm">
                  Don't have an account? <a href="#" class="underline">Sign up</a>
               </div>
            </div>
         </form>
      </div>
</template>
<script setup lang="ts">
   import { Input } from '@/components/ui/input'
   definePageMeta({
     layout: "auth"
   })
   useHead({
     title: 'Login | Nextbase'
   })
   const user = useSupabaseUser()
   const loading = ref(false)
   const authError = ref('')
   const email = ref('')
   const password = ref('')
   const client = useSupabaseAuthClient()
   
   watchEffect(async () => {
     if (user.value) {
       await navigateTo('/')
     }
   });
   
   const login = async () => {
     loading.value = true
     const { error } = await client.auth.signInWithPassword({
       email: email.value,
       password: password.value
     })
     if (error) {
       loading.value = false
       authError.value = 'Invalid login credentials'
       setTimeout(() => {
         authError.value = ''
       }, 5000)
     }
   }
   
   const clearError = () => {
     authError.value = '';
   };
</script>