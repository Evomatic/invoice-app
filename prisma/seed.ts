import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs';

const prisma = new PrismaClient()

const data = JSON.parse(
  readFileSync(new URL('./data.json', import.meta.url), 'utf-8')
);

async function main() {
  for (const invoice of data) {
    await prisma.invoice.create({
      data: {
        id: invoice.id,
        createdAt: new Date(invoice.createdAt),
        paymentDue: new Date(invoice.paymentDue),
        description: invoice.description,
        paymentTerms: invoice.paymentTerms,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        status: invoice.status,
        senderAddress: {
          create: invoice.senderAddress,
        },
        clientAddress: {
          create: invoice.clientAddress,
        },
        items: {
          create: invoice.items,
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
