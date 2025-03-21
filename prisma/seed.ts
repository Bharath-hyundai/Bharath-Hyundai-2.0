import { PrismaClient } from '@prisma/client';

const db = new PrismaClient();
async function main() {
  const data = await db.interest.createMany({
    data: [
      {
        id: '74b786ef-5eed-4b2c-b5c0-db02c156360d',
        name: '*Garvit',
        mobile: '9876625088',
        email: 'garvit19@gmail.com',
        model: 'VERNA',
        createdAt: '2025-03-18 05:04:49.906',
      },
    ],
  });
}

main();

