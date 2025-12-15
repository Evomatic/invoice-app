<template>
  <div class="flex flex-col md:flex-row h-screen bg-background" :data-theme="currentTheme">
    <aside
      class="flex justify-between md:rounded-tr-3xl md:rounded-br-3xl w-full md:w-26 bg-navy-600 border-b md:border-b-0 md:border-r lex-row md:flex-col"
    >
      <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3">
        <div
          class="
    relative
    w-20 h-20
    md:w-full md:h-26
    grid items-center justify-center
    bg-primary
    rounded-r-3xl md:rounded-none md:rounded-br-3xl md:rounded-tr-3xl
    overflow-hidden
  "
        >
          <img
            src="/svg/logo.svg"
            alt="The header logo."
            class="z-10 md:h-10 md:w-10"
          >
          <div
            class="
      absolute bottom-0 left-0 w-full h-1/2
      bg-indigo-400
      rounded-tl-2xl
    "
          />
        </div>
      </div>
      <div class="flex flex-col justify-center md:w-full w-20 h-20 md:h-22 ml-auto md:ml-0 md:mt-auto">
        <Button class="bg-navy-600 hover:bg-navy-600">
          <img
            src="/svg/icon-moon.svg"
            alt="The header moon theme button icon."
          >
        </Button>
      </div>
      <div class="relative md:w-full w-20 h-20 md:h-22 border-l-2 md:border-t-1 border-gray-600 md:border-l-0">
        <img
          class=" md:w-10 md:h-10 rounded-full h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/image-avatar.jpg"
          alt="The header avatar image."
        >
      </div>
    </aside>

    <main class="flex-1 grid place-items-center p-6 overflow-auto">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

const currentTheme = ref<'light' | 'dark'>('light' as const)


</script>
