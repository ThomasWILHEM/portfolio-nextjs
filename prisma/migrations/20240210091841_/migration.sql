/*
  Warnings:

  - Made the column `level` on table `Tech` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Tech` MODIFY `level` INTEGER NOT NULL;
