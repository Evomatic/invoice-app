import type { Prisma } from '@prisma/client'

export type Address = {
  id: string;
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type InvoiceItem = {
  id: string;
  invoiceId: string;
  name: string;
  quantity: number;
  price: Prisma.Decimal;
  total: Prisma.Decimal;
};

export type Invoice = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddressId: string;
  clientAddressId: string;
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
};