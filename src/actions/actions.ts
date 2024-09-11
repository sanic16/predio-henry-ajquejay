"use server";

import * as z from "zod";
import { CarContactSchema } from "@/schemas";
import { compileContactTemplate, sendMail } from "@/mail/mail";

export const contactAction = async (
  values: z.infer<typeof CarContactSchema>,
  captchaToken: string
) => {
  const validatedFields = CarContactSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Por favor, revisa los campos",
    };
  }

  if (!captchaToken) {
    return {
      error: "Por favor, verifica que no eres un robot",
    };
  }

  const captchaResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
    {
      method: "POST",
    }
  );

  const captchaResult = await captchaResponse.json();

  if (!captchaResult.success) {
    return {
      error: "Captcha inválido",
    };
  }

  const { name, email, phone, message } = validatedFields.data;

  const htmlBody = compileContactTemplate(name, email, phone, message);

  try {
    await sendMail({
      to: "julio.sanic.gt.256@gmail.com",
      subject: "Nuevo mensaje de contacto",
      body: htmlBody,
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        error: "Error al enviar el correo",
      };
    }
    return {
      error: "Error al enviar el correo",
    };
  }

  console.log("Mensaje enviado");
  return {
    success: "Mensaje enviado",
  };
};
