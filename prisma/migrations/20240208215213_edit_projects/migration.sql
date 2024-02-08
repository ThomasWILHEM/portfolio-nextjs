/*
  Warnings:

  - Added the required column `short_description` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Project` ADD COLUMN `short_description` VARCHAR(191) NOT NULL;
