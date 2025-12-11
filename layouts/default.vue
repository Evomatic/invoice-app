<template>
  <div class="flex h-screen bg-background">
    <aside
      class="w-64 bg-gray-200 p-4 border-r border-gray-300 flex flex-col justify-between"
    >
      <slot name="sidebar" />

      <div class="h-12 bg-gray-400 rounded"></div>

      <div class="space-y-3">
        <div class="h-8 bg-gray-300 rounded"></div>
        <div class="h-8 bg-gray-300 rounded"></div>
      </div>
    </aside>

    <main class="flex-1 grid place-items-center p-6">
      <slot />
    </main>
  </div>
</template>
