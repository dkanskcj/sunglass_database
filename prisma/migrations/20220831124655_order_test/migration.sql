-- CreateTable
CREATE TABLE "Ordertest" (
    "orderNumber" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderName" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "stock" TEXT NOT NULL,
    "companyId" INTEGER,
    "notice" TEXT,
    "orderStatus" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "phoneNumber" INTEGER NOT NULL,
    "purchaseMethod" TEXT NOT NULL,
    "purchase" INTEGER NOT NULL,
    "shippingStatus" TEXT NOT NULL,
    "shipping" TEXT NOT NULL,
    "shipcost" INTEGER NOT NULL,
    "shipAddress" TEXT NOT NULL,
    "totalCost" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME,
    CONSTRAINT "Ordertest_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Shipping" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "orderId" INTEGER,
    "coupon" TEXT,
    "status" TEXT,
    CONSTRAINT "Shipping_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Ordertest" ("orderNumber") ON DELETE SET NULL ON UPDATE CASCADE
);
