<template>
  <div class=" md:flex justify-around py-6">
     <div class="w-100 md:w-[2/5] pt-[10%]">
      <div class="container w-4/5 mx-auto">
        <h1 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-2">Forgot password</h1>
        <p class="leading-7 mb-6 text-base font-normal text-gray-400">Enter your email to recieve a Magic Link to reset your password.</p>
        <form @submit.prevent="resetPassword">
           <ErrorAlert :error-msg="authError" @clearError="clearError" />
           <SuccessAlert :success-msg="authSuccess" @clearSuccess="clearSuccess" />
           <div class="jGQTZC">
              <div class="grid w-full max-w-sm items-center gap-1.5">
                 <label for="email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Email address</label>
                 <Input id="email" type="email" placeholder="placeholder@gmail.com"  v-model="email"/>
              </div>
           </div>
           <AppBackToLogin class=" my-2 text-sm text-blue-600 "/>
           <Button type="submit" :disabled="loading" class="mt-3 w-[24rem]">Reset Password</Button>
        </form>
      </div>
       
     </div>
     <div class="hidden md:block w-[2/5]">
        <AuthenticationStaticSection/>
     </div>
  </div>
</template>
<script setup lang="ts">
  import { Input } from '@/components/ui/input'
import AppBackToLogin from '~/components/AppBackToLogin.vue';
  // import { Label } from '@/components/ui/label'
  definePageMeta({
    layout: "auth"
  })
  useHead({
    title: 'Forgot Password | supaAuth'
  })
  const email = ref('')
  const client = useSupabaseAuthClient()
  const loading = ref(false)
  const authSuccess = ref('')
  const authError = ref('')
  
  const resetPassword = async () => {
    loading.value = true
    const { error }  = await client.auth.resetPasswordForEmail(email.value, {
      redirectTo: `${window.location.origin}/new-password`
    })
    if (error) {
      loading.value = false
      authError.value = 'Invalid email credential'
      setTimeout(() => {
        authError.value = ''
      }, 5000)
    }
    else {
      loading.value = false
      authSuccess.value = `We've sent your an email.`
      setTimeout(() => {
        authSuccess.value = ''
      }, 5000)
    }
  }
  
  const clearError = () => {
    authError.value = '';
  };
  
  const clearSuccess = () => {
    authSuccess.value = '';
  };
</script>