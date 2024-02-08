import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res){
    const experiences = await prisma.experience.findMany()
    res.json(experiences);
}
