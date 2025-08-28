import prisma from "../../../../lib/prisma"

export class InvoiceRepository {
  async getAll() {
    return await prisma.invoice.findMany({
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async getById(id: string) {
    return await prisma.invoice.findUnique({
      where: { id },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async create(data: any) {
    return await prisma.invoice.create({
      data,
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async update(id: string, data: any) {
    return await prisma.invoice.update({
      where: { id },
      data,
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async delete(id: string) {
    return await prisma.invoice.delete({
      where: { id },
    })
  }
}
