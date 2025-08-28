import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import { InvoiceApiRepository } from "../domains/invoices/repositories/InvoiceApiRepository"

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      invoiceRepository: new InvoiceApiRepository(config.public.apiBaseUrl)
    }
  };
});