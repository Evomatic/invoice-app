import { defineEventHandler } from "h3"
import InvoiceRepository from '~/domains/invoices/server/repositories/InvoiceRepository';

const invoiceRepo = new InvoiceRepository()

export default defineEventHandler(async () => {
  return await invoiceRepo.getAll()
})