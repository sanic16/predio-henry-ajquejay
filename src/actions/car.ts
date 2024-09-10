"use server";

import * as z from "zod";

import prisma from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { CarSchema } from "@/schemas/car";
import { revalidatePath } from "next/cache";
import { getAllPublishedCars } from "@/queries/common";
import { deleteImage } from "@/lib/cloudinary";

export const createCarAction = async (data: z.infer<typeof CarSchema>) => {
  const validatedData = CarSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Por favor, revisa los campos del formulario",
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    await prisma.car.create({
      data: {
        ...validatedData.data,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al crear el carro",
    };
  }

  const cars = await getAllPublishedCars();
  revalidatePath("/", "layout");
  console.log("Creating car");
  return {
    cars: cars || [],
  };
};

export const deleteCarAction = async (id: string) => {
  const session = await auth();

  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    const imagesCar = await prisma.car.findUnique({
      where: {
        id,
      },
      select: {
        images: true,
      },
    });

    if (!imagesCar) {
      return {
        error: "El carro no existe",
      };
    }

    for (const image of imagesCar.images) {
      await deleteImage(image);
    }

    await prisma.car.delete({
      where: {
        id,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al eliminar el carro",
    };
  }

  const cars = await getAllPublishedCars();
  revalidatePath("/", "layout");
  console.log("Deleting car with id", id);

  return {
    cars: cars || [],
  };
};

export const publishCarAction = async (id: string) => {
  const session = await auth();

  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const car = await prisma.car.findUnique({
    where: {
      id,
    },
  });

  if (!car) {
    return {
      error: "El carro no existe",
    };
  }

  if (car.images.length < 5) {
    return {
      error: "El carro debe tener al menos 5 imágenes para ser publicado",
    };
  }

  try {
    await prisma.car.update({
      where: {
        id,
      },
      data: {
        published: !car.published,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al publicar el carro",
    };
  }

  const cars = await getAllPublishedCars();
  revalidatePath("/", "layout");
  console.log("Publishing car with id", id);

  return {
    cars: cars || [],
  };
};

export const updateCarAction = async (
  id: string,
  data: z.infer<typeof CarSchema>
) => {
  const validatedData = CarSchema.safeParse(data);

  if (!validatedData.success) {
    return {
      error: "Por favor, revisa los campos del formulario",
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session.user.email as string,
    },
  });

  if (!user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    await prisma.car.update({
      where: {
        id,
      },
      data: {
        ...validatedData.data,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al actualizar el carro",
    };
  }

  const cars = await getAllPublishedCars();
  revalidatePath("/", "layout");
  console.log("Updating car with id", id);
  return {
    cars: cars || [],
  };
};
