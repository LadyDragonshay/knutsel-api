import { PrismaClient } from "@prisma/client";

const getUserByUsername = async (username) => {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { username },
    });
    return user;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getUserByUsername;
