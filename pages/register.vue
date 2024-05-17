<template>
   <div class=" md:flex justify-around pt-3 pb-6">
     <div class="w-100 md:w-[2/5]">
        <div class="container w-4/5 mx-auto">
           <h1 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-2">Signup to Nextbase</h1>
           <p class="leading-7 mb-6 text-sm font-normal text-gray-800">How would you like to signup?</p>
           <div>
              <form @submit.prevent="signUp">
                 <ErrorAlert :error-msg="authError" @clearError="clearError" />
                 <!-- Third party Authentication -->
                 <ThirdPartyAuthenticatioBtns/>
                 <hr class=" my-8  w-[24rem]">
                 <!-- Magic Link -->
                 <div class="jGQTZC">
                 <div class="grid w-full max-w-sm items-center gap-1.5">
                    <label for="magiclink-email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Email address</label>
                    <Input id="magiclink-email" type="email" placeholder="placeholder@gmail.com" class="w-[24rem]"   v-model="email"/>
                 </div>
              </div>
                <Button type="button" :disabled="loading" class="mt-3 w-[24rem]">Sign up</Button>
                 <hr class="my-8 w-[24rem]">
                 <!-- Email Password Login-->
                 <div class="grid w-full max-w-sm items-center gap-1.5 my-3">
                    <label for="email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Email address</label>
                    <Input id="email" type="email" placeholder="placeholder@gmail.com" class="w-[24rem]"  v-model="email"/>
                 </div>
                 <div class="grid w-full max-w-sm items-center gap-1.5 my-3">
                    <label for="email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Password</label>
                    <Input id="email" type="email" placeholder="Type your password" class="w-[24rem]"  v-model="password"/>
                 </div>
                 <div>
                 </div>
                 <div class="flex justify-between">
                    <NuxtLink to="/login"  class=" my-2 text-sm text-blue-600 ">
                       Login instead?
                    </NuxtLink>
                    
                 </div>
                 <Button type="submit" :disabled="loading" class="mt-3 w-[24rem]">Sign up</Button>
              </form>
              <div class="hidden">
                 <p>Don’t have a SupaAuth account?</p>
                 <NuxtLink to="/register">
                    <button>
                       <div>Create new account</div>
                    </button>
                 </NuxtLink>
              </div>
           </div>
        
        </div>
     </div>
     <div class="hidden md:block w-[2/5]">
        <AuthenticationStaticSection/>
     </div>
  </div>
 
</template>

<script setup lang="ts">
definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Register | supaAuth'
})
const email = ref('')
const password = ref('')
const name = ref('')
const lastname = ref('')
const company = ref('')
const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const signUp = async () => {
  if (!name.value) return authError.value = 'First name required';
  if (!lastname.value) return authError.value = 'Last name required';
  loading.value = true
  const { error }  = await client.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: {
        first_name: name.value,
        last_name: lastname.value,
        company: company.value
      }
    }
  })
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
  }
}

const clearError = () => {
  authError.value = ''
}
</script>
