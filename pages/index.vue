<template>
  <div class="container">
    <Home/>
    
    <!-- <p v-if="user" >Hi {{ user.user_metadata.first_name }}</p>
    <p v-else >unauthenticated</p> -->
   
    <!-- <div>
      <AnonItemsList/>
    </div> -->

    <!-- <div v-if="user">
      <Button @click="logout"  :disabled="loading">
        <span  :class="{loading: loading}">
          Log out
        </span>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" :class="{loading: loading}">
          <g fill="none" stroke-width="1.5" stroke-linecap="round" style="stroke: var(--icon-color);">
            <circle stroke-opacity=".2" cx="8" cy="8" r="6"></circle>
            <circle cx="8" cy="8" r="6" class="VFMrX"></circle>
          </g>
        </svg>
      </Button>

      <NuxtLink  to="/dashboard">
        <span>
          Dashboard 
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path class="chevron" d="M8 13L13 8L8 3" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
            <path class="stem" d="M12 8L2 8" stroke-width="1.5"></path>
          </svg>
        </span>
      </NuxtLink>
    </div>
    <div class="uQxNj" v-else>
      <Button  to="/login">
        <span >
          Login 
          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <path class="chevron" d="M8 13L13 8L8 3" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round"></path>
            <path class="stem" d="M12 8L2 8" stroke-width="1.5"></path>
          </svg>
        </span>
      </Button>
      <NuxtLink to="/register">
        <Button>
          <span >
            Sign up
          </span>
        </Button>
      </NuxtLink>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import HomeBlackBgButton from '@/components/Home/BlackBgButton.vue';
import HomeBlackOutlineButton from '@/components/Home/BlackOutlineButton.vue';

const client = useSupabaseAuthClient()
const user = useSupabaseUser()
const loading = ref(false)

const logout = async () => {
  loading.value = true
  const { error } = await client.auth.signOut()
  if (error) {
    loading.value = false
    return alert('Something went wrong !')
  }
}

useHead({
  title: 'Nextbase Starter Template',
  meta: [
    { name: 'description', content: 'Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.' }
  ]
})
</script>
