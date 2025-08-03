import prisma from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const { invoices } = await readBody(event)
  setResponseStatus(event, 201)

  const result = await prisma.invoice.create({
    data: { invoices }
  })
  if (!result) {
    throw createError({ statusCode: 500, statusMessage: 'Failed to create invoices' })
  }
  return result
})
