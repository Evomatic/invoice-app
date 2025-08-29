import prisma from "../../../../lib/prisma"
import type { Invoice } from "~/domains/invoices/types"

interface IInvoiceRepository {
  getAll(): Promise<Invoice[]>
  getById(id: string): Promise<Invoice | null>
  create(data: Partial<Invoice>): Promise<Invoice>
  update(id: string, data: Partial<Invoice>): Promise<Invoice>
  delete(id: string): Promise<void>
}

export default class InvoiceRepository implements IInvoiceRepository {
  async getAll(): Promise<Invoice[]> {
    return await prisma.invoice.findMany<Invoice[]>({
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async getById(id: string): Promise<Invoice | null> {
    return await prisma.invoice.findUnique<Invoice>({
      where: { id },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async create(data: Partial<Invoice>): Promise<Invoice> {
    return await prisma.invoice.create<Invoice>({
      data,
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async update(id: string, data: Partial<Invoice>): Promise<Invoice> {
    return await prisma.invoice.update<Invoice>({
      where: { id },
      data,
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async delete(id: string): Promise<void> {
    return await prisma.invoice.delete({
      where: { id },
    })
  }
}
