import { createTRPCRouter, baseProcedure } from '../init';
import { z } from 'zod';

const invoiceSchema = z.object({
  clientName: z.string().min(1, 'Client name is required'),
  paymentTerms: z.number().min(1, 'Payment terms must be at least 1 day'),
  createdAt: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: 'Invalid date format',
  }),
  items: z.array(z.object({
    description: z.string().min(1, 'Description is required'),
    quantity: z.number().min(1, 'Quantity must be at least 1'),
    price: z.number().min(0, 'Price must be a positive number'),
  })),
});

const invoiceServiceRouter = createTRPCRouter({
  CreateInvoice: baseProcedure
    .input(z.object({
      formData: invoiceSchema,
    }))
    .mutation(({ input }) => {
      const { formData } = input;
      // Logic to create an invoice
      const newInvoice = {
        id: 'ZX1122', // Generate ID logic here
        ...formData,
        status: 'draft',
      };
      // Save newInvoice to database
      return newInvoice;
    }),

  ListInvoices: baseProcedure
    .input(z.object({
      id: z.string(),
      createdAt: z.string(),
      paymentDue: z.string(),
      description: z.string().optional(),
      clientEmail: z.string().email(),
      status: z.string(),
      clientName: z.string(),
      total: z.number(),
    }))
    .query(async ({ input, ctx }) => {
      const invoices: any[] = []; // Fetch invoices from database
      return invoices;
    }),
});

export default invoiceServiceRouter;