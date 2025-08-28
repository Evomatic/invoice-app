import { $fetch } from 'ofetch';
import type { Invoice } from '../types';

export class InvoiceApiRepository {

  listInvoices() {
    return $fetch<Invoice[]>("api/v1/invoices");
  }

  getInvoiceById(id: string) {
    return $fetch<Invoice>(`api/v1/invoices/${id}`);
  }

  createInvoice(data: Partial<Invoice>) {
    return $fetch<Invoice>("api/v1/invoices", { method: 'POST', body: data });
  }

  updateInvoice(id: string, data: Partial<Invoice>) {
    return $fetch<Invoice>(`api/v1/invoices/${id}`, { method: 'PATCH', body: data });
  }

  deleteInvoice(id: string) {
    return $fetch<void>(`api/v1/invoices/${id}`, { method: 'DELETE' });
  }
}