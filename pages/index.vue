<template>
  <div>
    <h2 class="bg-background dark:bg-background">
      Invoicess
    </h2>
    <Button
      class="bg-primary dark:bg-primary"
      @click="toggleTheme"
    >
      Button
    </Button>
    <ul>
      <li
        v-for="invoice in invoices"
        :key="invoice.id"
      >
        {{ invoice.description }} - {{ invoice.status }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import InvoicesApi from '../handler-api/InvoicesApi'
import type { Invoice } from '../types'
import { Button } from '@/components/ui/button'

const toggleTheme = () => {
  document.documentElement.classList.toggle('dark')
}

const invoiceApi = new InvoicesApi()
const invoices = ref<Invoice[]>([])

onMounted(async () => {
  try {
    invoices.value = await invoiceApi.listInvoices()
  }
  catch (error) {
    console.error('Failed to fetch invoices:', error)
  }
})

// Example: Get invoice by ID
async function fetchInvoice(id: string) {
  try {
    const invoice = await invoiceApi.getInvoiceById(id)
    // do something with invoice
    console.log('Fetched invoice:', invoice)
  }
  catch (error) {
    console.error('Failed to fetch invoice:', error)
  }
}
</script>
