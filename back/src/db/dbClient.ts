import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export const createNewPlayer = async (userName: string) => {
  const newUser = await prisma.user.create({
    data: {
      nick: userName,
    }
  })
}

export const searchPlayer = async (userNick: string) => {
  const player = await prisma.user.findUnique({
    where: {
      nick: userNick
    }
  })

  return player
}

export const updatePlayer = async (userNick: string, newPoints: number) => {
  const updatedPlayer = await prisma.user.update({
    where: {
      nick: userNick
    },
    data: {
      points: newPoints
    }
  })

  console.log(updatedPlayer)
}

export const getAll = async () => {
  return await prisma.user.findMany()
}