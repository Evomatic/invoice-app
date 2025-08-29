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
      id: this.generateUniqueInvoiceId(), ...data,
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
