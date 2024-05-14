<template>
<div class="col-12">
<div class="w-4/5 md:ps-7 mx-auto  gap-2 text-center mb-2 ">
      <h1 class="text-xl text-start font-bold my-1">{{ title }}</h1>
      <p class="text-start text-base text-muted-foreground">{{ description }}</p>
    
</div>
</div>
</template>

<script>
export default {
   props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
       required: true
    }
    }
};
</script>


