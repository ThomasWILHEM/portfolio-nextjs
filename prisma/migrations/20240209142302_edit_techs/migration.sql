/*
  Warnings:

  - Made the column `type` on table `Tech` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Tech` ADD COLUMN `level` INTEGER NULL,
    MODIFY `type` VARCHAR(191) NOT NULL;
