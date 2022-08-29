-- CreateTable
CREATE TABLE "Stocktest" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "company" TEXT NOT NULL,
    "products" TEXT NOT NULL,
    "now_stock" INTEGER NOT NULL,
    "stock" INTEGER NOT NULL,
    "stock_option" TEXT,
    "cost" INTEGER NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "reason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" DATETIME
);
