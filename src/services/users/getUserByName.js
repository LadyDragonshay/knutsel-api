import { PrismaClient } from "@prisma/client";

const getUserByName = async (name) => {
  try {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: { name },
    });
    return user;
  } catch (error) {
    throw new Error("Database failed.");
  }
};

export default getUserByName;
