<template>
  <div
    class="flex flex-col lg:flex-row h-screen bg-background dark:bg-navy-900"
    :data-theme="currentTheme"
  >
    <aside
      class="border-none flex justify-between lg:rounded-tr-3xl lg:rounded-br-3xl w-full lg:w-26 bg-navy-600 border-b lg:border-b-0 lg:border-r lex-row lg:flex-col"
    >
      <div class="flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-3">
        <div
          class="
    relative
    w-20 h-20
    lg:w-full lg:h-26
    grid items-center justify-center
    bg-primary
    rounded-r-3xl lg:rounded-none lg:rounded-br-3xl lg:rounded-tr-3xl
    overflow-hidden
  "
        >
          <img
            src="/svg/logo.svg"
            alt="The header logo."
            class="z-10 lg:h-10 lg:w-10"
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
      <div class="flex flex-col justify-center lg:w-full w-20 h-20 lg:h-22 ml-auto lg:ml-0 lg:mt-auto">
        <Button
          class="bg-navy-600 hover:bg-navy-600"
          @click="toggleTheme"
        >
          <img
            src="/svg/icon-moon.svg"
            alt="The header moon theme button icon."
          >
        </Button>
      </div>
      <div class="relative lg:w-full w-20 h-20 lg:h-22 border-l-2 lg:border-t-1 border-gray-600 lg:border-l-0">
        <img
          class=" lg:w-10 lg:h-10 rounded-full h-8 w-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/image-avatar.jpg"
          alt="The header avatar image."
        >
      </div>
    </aside>

    <main class="flex-1 grid place-items-center p-6 overflow-auto dark:bg-navy-900">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Button } from '../components/ui/button/index'

const currentTheme = ref<'light' | 'dark'>('light' as const)

const toggleTheme = () => {
  currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
  console.log(`Current theme: ${currentTheme.value}`)
}
</script>
