import prisma from "@/lib/prisma";

export const getUserByEmail = async (email: string) => {
  try {
    const user = prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }
    console.error("Error getting user by email");
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = prisma.user.findUnique({
      where: {
        id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }
    console.error("Error getting user by id");
    return null;
  }
};
