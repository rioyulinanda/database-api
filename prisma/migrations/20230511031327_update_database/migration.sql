-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'customer');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL DEFAULT '12345',
ADD COLUMN     "role" "Role" DEFAULT 'customer';
