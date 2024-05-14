<template>
  <Header />
   <div class="">
   
   <div class="flex flex-col md:flex-row">
   <div class="mt-[8%]">
     <LoginSignUpText title="Forget Password" description="Enter your email to recieve a Magic Link to reset your password." class="w-4/6 mx-auto"/>
      <ForgetPassword/>
   </div>
  
      <StaticTestimony class="hidden md:block lg:block"/>
   </div>
   </div>
  
  <Footer />
</template>
<script setup lang="ts">
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
