// server/api/v1/invoices/index.post.ts
import { defineEventHandler, readBody, createError, setResponseStatus } from 'h3'
import InvoiceRepository from '../../../repositories/InvoiceRepository'

const invoiceRepo = new InvoiceRepository()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const invoice = await invoiceRepo.create(body)
    setResponseStatus(event, 201)
    return invoice
  }
  catch (e: unknown) {
    console.error('[API:createInvoice]', e)
    throw createError({ statusCode: 500, statusMessage: 'Failed to create invoice' })
  }
})
