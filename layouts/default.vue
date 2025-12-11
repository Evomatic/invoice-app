<template>
  <div class="flex flex-col md:flex-row h-screen bg-background">
    <aside
      class="w-full md:w-26 bg-gray-200 p-4 border-b md:border-b-0 md:border-r border-gray-300 flex flex-row md:flex-col justify-between"
    >
      <div class="h-[39px] bg-gray-400 rounded" />
      <div class="flex flex-row md:flex-col space-x-3 md:space-x-0 md:space-y-3">
        <div class="h-8 w-8 md:w-auto bg-gray-300 rounded" />
        <div class="h-8 w-8 md:w-auto bg-gray-300 rounded" />
      </div>
    </aside>

    <main class="flex-1 grid place-items-center p-6 overflow-auto">
      <slot />
    </main>
  </div>
</template>
