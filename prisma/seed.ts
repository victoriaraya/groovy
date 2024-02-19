import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { artists } from "./artists";

async function main() {
  for (let artist of artists) {
    await prisma.artist.create({
      data: artist,
    });
  }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
