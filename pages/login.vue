<template>
  <div>
    <h1>Sign in</h1>
    <form @submit.prevent="login">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <div>
        <label>
          <div>
            <input type="text" placeholder="Email address" v-model="email" />
          </div>
        </label>
        <label>
          <div>
            <input type="password" placeholder="Password" v-model="password" />
          </div>
        </label>
      </div>
      <div>
        <button type="submit" :disabled="loading">
          <div :class="{loading: loading}">Sign in</div>
          
        </button>
        <NuxtLink to="/forgot-password">Forgot your password?</NuxtLink>
      </div>
    </form>
    <div>
      <p>Don’t have a SupaAuth account?</p>
      <NuxtLink to="/register">
        <button>
          <div>Create new account</div>
        </button>
      </NuxtLink>
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
