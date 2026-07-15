import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.settings.upsert({
    where: {
      id: 1
    },
    update: {},

    create: {
      minimumAge: 14,
      minimumWeight: 40,
      maximumWeight: 120,

      ticketPrice: 50,
      dronePrice: 150,
      handCameraPrice: 80
    }
  });


  await prisma.operatingDay.create({
    data: {
      date: new Date("2026-07-20"),
      capacity: 50,
      isOpen: true
    }
  });


  console.log("Dados iniciais criados com sucesso!");
}


main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });