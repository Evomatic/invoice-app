import { type FetchOptions } from 'ofetch';
import { defineNuxtPlugin, useRuntimeConfig } from 'nuxt/app';
import { InvoiceRepository } from '../server/repositories/InvoiceRepository';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiBaseUrl
  };

  return {
    provide: {
       invoiceRepository: new InvoiceRepository()
    }
  };
});