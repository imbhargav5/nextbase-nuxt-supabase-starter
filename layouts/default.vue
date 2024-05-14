<template>
  <main>
    <section class="min-h-screen flex flex-col justify-center">
      <div class=" w-full mx-auto ">
        <slot />
        <div class="absolute inset-0">
          <div class="background-gradient">
            <div class="background-gradient-pattern"></div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
