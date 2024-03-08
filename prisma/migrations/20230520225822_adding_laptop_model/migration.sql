-- CreateTable
CREATE TABLE "Laptop" (
    "id" SERIAL NOT NULL,
    "price" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "displaySize" TEXT NOT NULL,
    "touchScreen" TEXT NOT NULL,
    "ssd" TEXT NOT NULL,
    "hdd" TEXT NOT NULL,
    "numberOfCores" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "os" TEXT NOT NULL,
    "videoCard" TEXT NOT NULL,
    "videoCardMemory" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Laptop_pkey" PRIMARY KEY ("id")
);
