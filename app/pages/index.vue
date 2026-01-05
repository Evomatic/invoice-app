<template>
  <div class="h-full lg:h-[90%] max-w-183 grid grid-cols-1 grid-rows-12 w-full">
    <div class="row-end-4 h-14 border-2 row-span-full col-span-full">
      one
    </div>
    <div class="row-start-2 row-span-full border-2 col-span-full">
      two
    </div>
  </div>
</template>

<script setup lang="ts">
// import { onMounted, ref } from 'vue'
// import InvoicesApi from '../handler-api/InvoicesApi'
// import type { Invoice } from '../types'
// import { Button } from '@/components/ui/button'

// const toggleTheme = () => {
//   document.documentElement.classList.toggle('dark')
// }

// const invoiceApi = new InvoicesApi()
// const invoices = ref<Invoice[]>([])

// onMounted(async () => {
//   try {
//     invoices.value = await invoiceApi.listInvoices()
//   }
//   catch (error) {
//     console.error('Failed to fetch invoices:', error)
//   }
// })

// // Example: Get invoice by ID
// async function fetchInvoice(id: string) {
//   try {
//     const invoice = await invoiceApi.getInvoiceById(id)
//     // do something with invoice
//     console.log('Fetched invoice:', invoice)
//   }
//   catch (error) {
//     console.error('Failed to fetch invoice:', error)
//   }
// }
</script>
