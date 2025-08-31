import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import InvoiceApi from '~/domains/invoices/handler-api/InvoiceApi';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  return {
    provide: {
      invoiceRepository: new InvoiceApi(config.public.apiBaseUrl)
    }
  };
});