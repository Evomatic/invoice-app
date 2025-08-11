import PrismaClient from '@prisma/client';
import data from './data.json';

const prisma = new PrismaClient();

async function main() {
  for (const invoice of data) {
    const { id, items, ...invoiceWithoutItems } = invoice;

    // Upsert the invoice
    const createdInvoice = await prisma.invoice.upsert({
      where: { id },
      update: invoiceWithoutItems,
      create: { id, ...invoiceWithoutItems },
    });

    // Upsert the items for the invoice
    for (const item of items) {
      await prisma.invoiceItem.upsert({
        where: { id: item.id },
        update: item,
        create: { ...item, invoiceId: createdInvoice.id },
      });
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });