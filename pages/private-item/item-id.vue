<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
const itemId = route.query.id || 'Unknown ID';
const itemName = route.query.title || 'Unnamed Item';
const itemDescription = route.query.description || 'No description provided';
const itemCreationDate = route.query.date || 'Unknown date';
</script>

<template>
  <div class="w-2/5 mx-auto my-5">
    <div class="w-100">
      <NuxtLink to="/private-item">
        <div class="flex">
          <PrivateItemBackArrowSvg class="w-[16px] me-3 my-auto"/>
          <span class="font-inter font-semibold text-sm">Back to dashboard</span>
        </div>
      </NuxtLink>
      <div class="w-100 my-5">
        <p class="font-geist text-[#020817] text-xl font-extrabold my-3">
          {{ itemName }}
        </p>
        <div class="w-100 flex my-2">
          <PrivateItemCalenderSvg class="w-[16px] me-3"/>
          <span class="text-[#64748B] text-xs font-geist">
            {{ itemCreationDate }}
          </span>
        </div>
        <p class="font-inter text-[#020817] font-normal text-base my-3">
          {{ itemDescription }}
        </p>
      </div>
    </div>
  </div>
</template>
