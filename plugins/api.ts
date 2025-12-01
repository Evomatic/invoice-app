import { defineNuxtPlugin } from 'nuxt/app';
import InvoicesApi from '../handler-api/InvoicesApi'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      invoiceRepository: new InvoicesApi()
    }
  };
});
