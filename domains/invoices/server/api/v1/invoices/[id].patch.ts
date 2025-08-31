// server/api/v1/invoices/[id].patch.ts
import { defineEventHandler, readBody, createError } from 'h3'
import InvoiceRepository from '~/domains/invoices/server/repositories/InvoiceRepository';

const invoiceRepo = new InvoiceRepository()

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID parameter is required' })
  }

  const body = await readBody(event)

  try {
    return await invoiceRepo.update(id, body)
  } catch (e: any) {
    if (e.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Invoice not found' })
    }
    throw createError({ statusCode: 500, statusMessage: 'Failed to update invoice' })
  }
})
