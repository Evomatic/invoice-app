import { $fetch } from 'ofetch';
import type { Invoice } from '../types';

export class InvoiceApiRepository {
  constructor(private baseURL: string) {}

  getAll() {
    return $fetch<Invoice[]>(`${this.baseURL}api/v1/invoices`);
  }

  getById(id: string) {
    return $fetch<Invoice>(`${this.baseURL}/invoices/${id}`);
  }

  create(data: Partial<Invoice>) {
    return $fetch<Invoice>(`${this.baseURL}/invoices`, { method: 'POST', body: data });
  }

  update(id: string, data: Partial<Invoice>) {
    return $fetch<Invoice>(`${this.baseURL}/invoices/${id}`, { method: 'PUT', body: data });
  }

  delete(id: string) {
    return $fetch<void>(`${this.baseURL}/invoices/${id}`, { method: 'DELETE' });
  }
}