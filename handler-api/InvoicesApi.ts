import type { Invoice } from '../types'
import { useFetch } from 'nuxt/app'


export default class InvoiceApi {
  listInvoices() {
    return useFetch<Invoice[]>('api/v1/invoices')
  }

  async getInvoiceById(id: string) {
    return useFetch<Invoice>(`api/v1/invoices/${id}`)
  }

  async createInvoice(data: Partial<Invoice>) {
    return useFetch<Invoice>('api/v1/invoices', { method: 'POST', body: data })
  }

  async updateInvoice(id: string, data: Partial<Invoice>) {
    return useFetch<Invoice>(`api/v1/invoices/${id}`, { method: 'PATCH', body: data })
  }

  async deleteInvoice(id: string) {
    return useFetch(`api/v1/invoices/${id}`, { method: 'DELETE' })
  }
}
