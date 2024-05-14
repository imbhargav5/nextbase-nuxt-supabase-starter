<template>
  <Header />
   <div class="my-5 ">
   <LoginSignUpText title="Signup to Nextbase" description="How would you like to signup?"/>
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


