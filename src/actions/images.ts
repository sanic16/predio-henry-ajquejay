"use server";
import prisma from "@/lib/prisma";
import { uploadImage } from "@/lib/cloudinary";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];

interface uploadImageState {
  errors: {
    _form?: string[];
  };
}

export async function uploadImageAction(
  id: string,
  formState: uploadImageState,
  formData: FormData
): Promise<uploadImageState> {
  const image = formData.get("image");

  if (!(image instanceof File) || image.size === 0) {
    return {
      errors: {
        _form: ["La image no es válida"],
      },
    };
  }

  if (!allowedImageTypes.includes(image.type)) {
    return {
      errors: {
        _form: ["El tipo de imagen no es válido"],
      },
    };
  }

  const session = await auth();
  if (!session || !session.user) {
    return {
      errors: {
        _form: ["No tienes permisos para realizar esta acción"],
      },
    };
  }

  let imageUrl: string;
  try {
    imageUrl = await uploadImage(image);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
    return {
      errors: {
        _form: ["Ha ocurrido un error al subir la imagen"],
      },
    };
  }

  try {
    const prevImagesCar = await prisma.car.findUnique({
      where: {
        id,
      },
      select: {
        images: true,
      },
    });

    if (!prevImagesCar) {
      return {
        errors: {
          _form: ["El carro no existe"],
        },
      };
    }

    prevImagesCar.images.push(imageUrl);

    await prisma.car.update({
      where: {
        id,
      },
      data: {
        images: prevImagesCar.images,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    }
    return {
      errors: {
        _form: ["Ha ocurrido un error al subir la imagen"],
      },
    };
  }

  revalidatePath(`/`, "layout");

  return {
    errors: {},
  };
}

export async function deleteImageAction(id: string, imageId: string) {
  const session = await auth();
  if (!session || !session.user) {
    return {
      error: "No tienes permisos para realizar esta acción",
    };
  }

  try {
    const car = await prisma.car.findUnique({
      where: {
        id,
      },
      select: {
        images: true,
      },
    });

    if (!car) {
      return {
        error: "El carro no existe",
      };
    }

    if (!car.images.includes(imageId)) {
      return {
        error: "No puedes eliminar esta imagen",
      };
    }

    if (car.images.length <= 5) {
      return {
        error: "No puedes tener menos de 5 imágenes",
      };
    }

    const newImages = car.images.filter((image) => image !== imageId);

    await prisma.car.update({
      where: {
        id,
      },
      data: {
        images: newImages,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: error.message,
      };
    }
    return {
      error: "Ha ocurrido un error al eliminar la imagen",
    };
  }

  revalidatePath(`/`, "layout");

  return {
    success: "Imagen eliminada con éxito",
  };
}
