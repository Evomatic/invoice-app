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
import { ref, onMounted } from 'vue';

const { $invoiceRepository } = useNuxtApp();
const invoices = ref([]);

onMounted(async () => {
  invoices.value = await $invoiceRepository.getAll();
});

// Example: Get invoice by ID
async function fetchInvoice(id: string) {
  const invoice = await $invoiceRepository.getById(id);
  // do something with invoice
}
</script>