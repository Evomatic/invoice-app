<template>
  <div>
    <h2>Invoices</h2>
    <ul>
      <li v-for="invoice in invoices" :key="invoice.id">
        {{ invoice.description }} - {{ invoice.status }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import InvoiceApi from '../handler-api/InvoiceApi';
import type { Invoice } from '../types';

const invoiceApi = new InvoiceApi();
const invoices = ref<Invoice[]>([]);

onMounted(async () => {
  try {
    invoices.value = await invoiceApi.listInvoices();
  } catch (error) {
    console.error('Failed to fetch invoices:', error);
  }
});

// Example: Get invoice by ID
async function fetchInvoice(id: string) {
  try {
    const invoice = await invoiceApi.getInvoiceById(id);
    // do something with invoice
    console.log('Fetched invoice:', invoice);
  } catch (error) {
    console.error('Failed to fetch invoice:', error);
  }
}
</script>