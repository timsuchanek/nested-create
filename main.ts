import { PrismaClient } from '@prisma/client'

async function main() {
  const client = new PrismaClient()

  const link = await client.link.create({
    data: {
      url: 'prisma.io',
      article: {
        create: {
          text: 'Landingpage',
          title: 'Awesome',
        },
      },
    },
    include: { article: true },
  })

  console.log(link)

  client.disconnect()
}

main()
