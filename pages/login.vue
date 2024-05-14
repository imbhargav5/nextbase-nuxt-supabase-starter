<template>
   <Header />
   <div class="my-5">
   <LoginSignUpText title="Login to Nextbase" description="Login with the account you used to signup."/>
   <div class="flex flex-col md:flex-row">
      <EmailPassword/>
  <StaticTestimony class="hidden md:block lg:block"/>
   </div>

   </div>
  
  <Footer />
</template>
<script setup lang="ts">
   import { Button } from '@/components/ui/button'
   // import { Label } from '@/components/ui/label'
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