import { v4 as uuidv4 } from 'uuid'
import type { Invoice } from "~/domains/invoices/types"
import prisma from "../../../../lib/prisma"

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
    const uuid = uuidv4();

    // Extract alphanumeric characters and ensure proper format
    const alphanumeric = uuid.replace(/[^A-Z0-9]/g, '');

    // Take first 2 letters and first 4 numbers
    const letters = alphanumeric.match(/[A-Z]/g)?.slice(0, 2).join('') || 'AA';
    const numbers = alphanumeric.match(/[0-9]/g)?.slice(0, 4).join('') || '0000';

    // Pad if we don't have enough characters
    const paddedLetters = letters.padEnd(2, 'A');
    const paddedNumbers = numbers.padStart(4, '0');

    return paddedLetters + paddedNumbers;
  }

  async getAll(): Promise<Invoice[]> {
    return await prisma.invoice.findMany({
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async getById(id: string): Promise<Invoice | null> {
    return await prisma.invoice.findUnique({
      where: { id },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async create(data: Invoice): Promise<Invoice> {
    return await prisma.invoice.create({
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
        items: { create: data.items }
      },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async update(id: string, data: Invoice): Promise<Invoice> {
    return await prisma.invoice.update({
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
        items: { create: data.items }
      },
      include: { items: true, clientAddress: true, senderAddress: true },
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.invoice.delete({
      where: { id },
    })
  }
}
