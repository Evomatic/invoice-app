import prisma from "~/prisma/db"

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  setResponseStatus(event, 204)

  if (!id) {
    throw createError({ statusCode: 400, statusMessage: 'ID parameter is required' })
  }
  await prisma.invoice.delete({
    where: { id: id }
  })
})