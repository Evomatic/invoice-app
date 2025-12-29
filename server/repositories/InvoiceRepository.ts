import { v4 as uuidv4 } from 'uuid'
import type { Invoice } from '../../types'
import { prisma } from '../utils/db'

interface IInvoiceRepository {
  getAll(): Promise<Invoice[]>
  getById(id: string): Promise<Invoice | null>
  create(data: Partial<Invoice>): Promise<Invoice>
  update(id: string, data: Partial<Invoice>): Promise<Invoice>
  delete(id: string): Promise<void>
  generateUniqueInvoiceId(): string
}

export default class InvoiceRepository implements IInvoiceRepository {
  generateUniqueInvoiceId(): string {
    const uuid = uuidv4()

    // Extract alphanumeric characters and ensure proper format
    const alphanumeric = uuid.replace(/[^A-Z0-9]/g, '')

    // Take first 2 letters and first 4 numbers
    const letters = alphanumeric.match(/[A-Z]/g)?.slice(0, 2).join('') || 'AA'
    const numbers = alphanumeric.match(/[0-9]/g)?.slice(0, 4).join('') || '0000'

    // Pad if we don't have enough characters
    const paddedLetters = letters.padEnd(2, 'A')
    const paddedNumbers = numbers.padStart(4, '0')

    return paddedLetters + paddedNumbers
  }

  async getAll(): Promise<Invoice[]> {
    const invoices = await prisma.invoice.findMany({
      include: { items: true, clientAddress: true, senderAddress: true },
    })
    return invoices.map(invoice => ({
      ...invoice,
      createdAt: invoice.createdAt instanceof Date ? invoice.createdAt.toISOString() : invoice.createdAt,
      paymentDue: invoice.paymentDue instanceof Date ? invoice.paymentDue.toISOString() : invoice.paymentDue,
    }))
  }

  async getById(id: string): Promise<Invoice | null> {
    const invoice = await prisma.invoice.findUnique({
      where: { id },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
    if (!invoice) return null
    return {
      ...invoice,
      createdAt: invoice.createdAt instanceof Date ? invoice.createdAt.toISOString() : invoice.createdAt,
      paymentDue: invoice.paymentDue instanceof Date ? invoice.paymentDue.toISOString() : invoice.paymentDue,
    }
  }

  async create(data: Invoice): Promise<Invoice> {
    const createdInvoice = await prisma.invoice.create({
      data: {
        id: this.generateUniqueInvoiceId(),
        createdAt: data.createdAt,
        paymentDue: data.paymentDue,
        description: data.description,
        paymentTerms: data.paymentTerms,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        status: data.status,
        senderAddress: { create: data.senderAddress },
        clientAddress: { create: data.clientAddress },
        items: { create: data.items },
      },
      include: { items: true, clientAddress: true, senderAddress: true },
    })

    return {
      ...createdInvoice,
      createdAt: createdInvoice.createdAt instanceof Date ? createdInvoice.createdAt.toISOString() : createdInvoice.createdAt,
      paymentDue: createdInvoice.paymentDue instanceof Date ? createdInvoice.paymentDue.toISOString() : createdInvoice.paymentDue,
    }
  }

  async update(id: string, data: Invoice): Promise<Invoice> {
    const updatedInvoice = await prisma.invoice.update({
      where: { id },
      data: {
        id: data.id,
        createdAt: data.createdAt,
        paymentDue: data.paymentDue,
        description: data.description,
        paymentTerms: data.paymentTerms,
        clientName: data.clientName,
        clientEmail: data.clientEmail,
        status: data.status,
        senderAddress: { create: data.senderAddress },
        clientAddress: { create: data.clientAddress },
        items: { create: data.items },
      },
      include: { items: true, clientAddress: true, senderAddress: true },
    })

    return {
      ...updatedInvoice,
      createdAt: updatedInvoice.createdAt instanceof Date ? updatedInvoice.createdAt.toISOString() : updatedInvoice.createdAt,
      paymentDue: updatedInvoice.paymentDue instanceof Date ? updatedInvoice.paymentDue.toISOString() : updatedInvoice.paymentDue,
    }
  }

  async delete(id: string): Promise<void> {
    await prisma.invoice.delete({
      where: { id },
    })
  }
}
