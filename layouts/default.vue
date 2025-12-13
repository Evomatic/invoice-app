<template>
  <div class="flex flex-col md:flex-row h-screen bg-background">
    <aside class="md:rounded-tr-3xl md:rounded-br-3xl w-full md:w-26 bg-[#373B53] border-b md:border-b-0 md:border-r flex flex-row md:flex-col">
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
    </aside>

    <main class="flex-1 grid place-items-center p-6 overflow-auto">
      <slot />
    </main>
  </div>
</template>
