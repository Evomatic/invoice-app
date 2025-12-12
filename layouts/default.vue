<template>
  <div class="flex flex-col md:flex-row h-screen bg-background">
    <aside
      class="w-full md:w-26 bg-[#373B53] border-b md:border-b-0 md:border-r flex flex-row md:flex-col"
    >
      <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3">
        <div class="grid items-center justify-center relative w-20 h-20 bg-primary rounded-r-3xl overflow-hidden">
          <img src="/svg/logo.svg" alt="The header logo." class="z-10" />
          <div class="absolute bottom-0 left-0 w-full h-1/2 bg-indigo-400 rounded-tl-3xl" />
        </div>
      </div>
    </aside>

    <main class="flex-1 grid place-items-center p-6 overflow-auto">
      <slot />
    </main>
  </div>
</template>
