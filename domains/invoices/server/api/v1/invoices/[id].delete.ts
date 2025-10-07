// server/api/v1/invoices/[id].delete.ts
import { defineEventHandler, createError, setResponseStatus } from 'h3'
import InvoiceRepository from '../../../repositories/InvoiceRepository';

const invoiceRepo = new InvoiceRepository()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID parameter is required' })
  }

  try {
    await invoiceRepo.delete(id)
    setResponseStatus(event, 204)
    return null
  } catch (e: any) {
    if (e.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Invoice not found' })
    }
    throw createError({ statusCode: 500, statusMessage: 'Failed to delete invoice' })
  }
})
