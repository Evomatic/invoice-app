import prisma from "~/prisma/db"

export default defineEventHandler(async () => {
  const invoices = await prisma.invoice.findMany({})
  return invoices
})