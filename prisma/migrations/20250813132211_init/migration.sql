-- CreateTable
CREATE TABLE "public"."Invoice" (
    "id" CHAR(6) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paymentDue" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL,
    "paymentTerms" INTEGER NOT NULL,
    "clientName" TEXT NOT NULL,
    "clientEmail" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "senderAddressId" INTEGER NOT NULL,
    "clientAddressId" INTEGER NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Address" (
    "id" SERIAL NOT NULL,
    "street" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "postCode" TEXT NOT NULL,
    "country" TEXT NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."InvoiceItem" (
    "id" SERIAL NOT NULL,
    "invoiceId" CHAR(6) NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "price" DECIMAL(12,2) NOT NULL,
    "total" DECIMAL(12,2) NOT NULL,

    CONSTRAINT "InvoiceItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_senderAddressId_fkey" FOREIGN KEY ("senderAddressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Invoice" ADD CONSTRAINT "Invoice_clientAddressId_fkey" FOREIGN KEY ("clientAddressId") REFERENCES "public"."Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."InvoiceItem" ADD CONSTRAINT "InvoiceItem_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "public"."Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
