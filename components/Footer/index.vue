<script setup="">
const connectItems = ref([
    {
        title: "Discord",
        path: "https://discord.com/invite/RxNDVewS74"
    },
    {
        title: "Twitter",
        path: "https://twitter.com/usenextbase"
    },
    {
        title: "LinkedIn",
        path: "https://www.linkedin.com/in/codewithbhargav/"
    }
]);

const followUs = ref([
    {
        title: "Github",
        path: "https://github.com/imbhargav5"
    },
    {
        title: "Twitter",
        path: "https://twitter.com/usenextbase"
    }
]);

const legal = ref([
    {
        title: "Privacy Policy",
        path: "/login"
    },
    {
        title: "Terms & Conditions",
        path: "/terms"
    }
]);
</script>

<template>
    <div class="col-12 p-4 bg-gray-50 sm:p-6 dark:bg-slate-800">
        <div class="mx-auto md:container pt-16 md:pt-24">
            <div class="md:flex md:justify-between pb-16 md:pb-24">
                <div class="mb-6 md:mb-0">
                    <NuxtLink href="/login" class="flex items-center">
                        <img
                          src="/assets/images/footer-logo/acme-logo-dark.png"
                          class="mr-3 h-8 dark:hidden block"
                          alt="NextBase Logo"
                        />
                        <img
                          src="/assets/images/footer-logo/acme-logo-light.png"
                          class="mr-3 h-8 hidden dark:block"
                          alt="NextBase Logo"
                        />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                          Acme
                        </span>
                      </NuxtLink>
            
                      <p class="mt-4 mb-8 text-gray-600 dark:text-gray-400">
                        Acme Inc. 123 Acme Street, London,<br class="md:hidden"> UK, SW1A 1AA
                      </p>
                    
                    <!-- Connect items -->
                    <div class="mt-4 space-x-4 pt-4 border-t dark:border-slate-700">
                        <NuxtLink v-for="(cItem, index) in connectItems" :key="index" :to="cItem.path" class="text-gray-600 dark:text-gray-400 hover:underline">
                            <span>{{ cItem.title }}</span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <!-- Resources -->
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <NuxtLink href="https://usenextbase.com" class="hover:underline">
                      NextBase
                    </NuxtLink>
                  </li>
                </ul>
              </div>
                    <!-- Follow us -->
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4" v-for="(fItem, index) in followUs" :key="index">
                                <NuxtLink :to="fItem.path" class="text-gray-600 dark:text-gray-400 hover:underline">
                                    <span>{{ fItem.title }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <!-- Legal -->
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class="mb-4" v-for="(legalItem, index) in legal" :key="index">
                                <NuxtLink :to="legalItem.path" class="text-gray-600 dark:text-gray-400 hover:underline">
                                    <span>{{ legalItem.title }}</span>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023
                    <NuxtLink href="https://usenextbase.com" class="hover:underline">Arni Creative Private Limited</NuxtLink>. All Rights Reserved.
                </span>
             
                <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <FooterFacebookSvg/>
                    <FooterTwitterSvg/>
                    <FooterInstagramSvg/>
                    <FooterDribbleSvg/>
                    <FooterGithubSvg/>
                </div>
            </div>
        </div>
    </div>
</template>
  <style lang="scss">
  </style>
  