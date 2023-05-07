-- DropForeignKey
ALTER TABLE "Shoplist" DROP CONSTRAINT "Shoplist_usersId_fkey";

-- AlterTable
ALTER TABLE "Shoplist" ALTER COLUMN "usersId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Shoplist" ADD CONSTRAINT "Shoplist_usersId_fkey" FOREIGN KEY ("usersId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
