// populateDB.js

const { techsData, projectsData, experiencesData} = require('./data');
const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        await prisma.project.deleteMany();
        await prisma.experience.deleteMany();
        await prisma.tech.deleteMany();
        console.log(`Database dumped successfully.`);

        await prisma.$executeRaw`ALTER TABLE Project AUTO_INCREMENT = 0`;
        await prisma.$executeRaw`ALTER TABLE Experience AUTO_INCREMENT = 0`;
        await prisma.$executeRaw`ALTER TABLE Tech AUTO_INCREMENT = 0`;
        console.log(`Auto-increment IDs reset successfully.`);

        const techs = await prisma.tech.createMany({
            data: techsData,
        });
        console.log(`Techs added successfully.`);


        const projects = await prisma.project.createMany({
            data: projectsData,
        });
        console.log(`Projects added successfully.`);

        for (const experienceData of experiencesData) {
            const techIds = experienceData.techs;
            delete experienceData.techs;

            const experience = await prisma.experience.create({
                data: {
                    ...experienceData,
                    techs: {
                        connect: techIds.map(id => ({ id }))
                    }
                }
            });
        }
        console.log(`Experiences added successfully.`);

        console.log('Database seeded successfully !');
    } catch (error) {
        console.error('Error when seeding the database :', error);
    } finally {
        await prisma.$disconnect();
    }
}

seedDatabase();
