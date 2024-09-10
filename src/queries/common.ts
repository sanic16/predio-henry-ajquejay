import prisma from "@/lib/prisma";

export const getAllPublishedCars = async () => {
  try {
    const cars = prisma.car.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return cars;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }
    console.error("Error getting all published cars");
    return null;
  }
};
