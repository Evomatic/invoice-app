import { $fetch } from 'ofetch';
import type { Invoice } from '../types';

interface IInvoiceApi {
  listInvoices(): Promise<Invoice[]>
  getInvoiceById(id: string): Promise<Invoice>
  createInvoice(data: Partial<Invoice>): Promise<Invoice>
  updateInvoice(id: string, data: Partial<Invoice>): Promise<Invoice>
  deleteInvoice(id: string): Promise<void>
}

export default class InvoiceApi implements IInvoiceApi {

  async listInvoices() {
    return $fetch<Invoice[]>("api/v1/invoices");
  }

  async getInvoiceById(id: string) {
    return $fetch<Invoice>(`api/v1/invoices/${id}`);
  }

  async createInvoice(data: Partial<Invoice>) {
    return $fetch<Invoice>("api/v1/invoices", { method: 'POST', body: data });
  }

  async updateInvoice(id: string, data: Partial<Invoice>) {
    return $fetch<Invoice>(`api/v1/invoices/${id}`, { method: 'PATCH', body: data });
  }

  async deleteInvoice(id: string) {
    return $fetch<void>(`api/v1/invoices/${id}`, { method: 'DELETE' });
  }
}