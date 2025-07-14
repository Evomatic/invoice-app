<template>
  <div>
    <p>This is the invoices domain</p>
     <div>{{ hello?.greeting }}</div>
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from '#app'

const { $trpc } = useNuxtApp()

const { data: hello } = $trpc.hello.useQuery({ text: 'client'  })
</script>