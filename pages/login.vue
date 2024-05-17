<template>
  <div class=" md:flex justify-around py-6">
     <div class="w-100 md:w-[2/5]">
        <div class="container w-5/5 mx-auto">
           <h1 class="mt-8 scroll-m-20 text-xl font-semibold tracking-tight mb-2">Login to Nextbase</h1>
           <p class="leading-7 mb-6 text-base font-normal text-gray-400">Login with the account you used to signup.</p>
           <div>
              <form @submit.prevent="login">
                 <ErrorAlert :error-msg="authError" @clearError="clearError" />
                 <!-- Third party Authentication -->
                 <ThirdPartyAuthenticatioBtns/>
                 <hr class=" my-8 ">
                 <!-- Magic Link -->
                 <div class="jGQTZC">
                 <div class="grid w-full max-w-sm items-center gap-1.5">
                    <label for="magiclink-email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Email address</label>
                    <Input id="magiclink-email" type="email" placeholder="placeholder@gmail.com"  v-model="email"/>
                 </div>
              </div>
                <Button type="button" :disabled="loading" class="mt-3 w-[24rem]">Login with Magic Link</Button>
                 <hr class="my-8">
                 <!-- Email Password Login-->
                 <div class="grid w-full max-w-sm items-center gap-1.5 my-3">
                    <label for="email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Email address</label>
                    <Input id="email" type="email" placeholder="placeholder@gmail.com" v-model="email"/>
                 </div>
                 <div class="grid w-full max-w-sm items-center gap-1.5 my-3">
                    <label for="email" class="text-sm font-normal leading-none peer-disabled:cursor-not-allowed text-gray-400 ">Password</label>
                    <Input id="email" type="email" placeholder="Type your password" v-model="password"/>
                 </div>
                 <div>
                 </div>
                 <div class="flex justify-between">
                    <button type="submit" :disabled="loading" class=" my-2 text-sm text-blue-600 ">
                       <div :class="{loading: loading}">Sign up instead? </div>
                    </button>
                    <NuxtLink to="/forgot-password" class=" my-2 text-sm text-gray-400 ">Forgot your password?</NuxtLink>
                 </div>
                 <Button type="submit" :disabled="loading" class="mt-3 w-[24rem]">Login</Button>
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
    const { error }  = await client.auth.signInWithPassword({
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