import { createError, defineEventHandler, getRouterParam } from 'h3'
import InvoiceRepository from '../../../repositories/InvoiceRepository'

const invoiceRepo = new InvoiceRepository()

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')

   if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID parameter is required' })
  }

  const invoice = await invoiceRepo.getById(id)

  if (!invoice) {
    throw createError({ statusCode: 404, statusMessage: 'Invoice not found' })
  }

  return invoice
})
