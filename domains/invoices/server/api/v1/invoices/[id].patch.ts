import prisma from "~/prisma/db"

export default defineEventHandler(async(event) => {
  const id = event.context.params?.id
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID parameter is required' })
  }

  const { invoice } = await readBody(event)
  const updatedInvoice = await prisma.invoice.update({
    where: { id: id },
    data: {...invoice}
  })

  if (!updatedInvoice) {
    throw createError({ statusCode: 404, statusMessage: 'Invoice not found' })
  }

  return updatedInvoice
})