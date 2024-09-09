import CredentialsProvider from "next-auth/providers/credentials";
import { LoginSchema } from "./schemas/login";
// import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import { getUserByEmail } from "./queries/auth";

export default {
  providers: [
    CredentialsProvider({
      name: "Credenciales",
      credentials: {
        username: {
          label: "Correo electrónico",
          type: "email",
          placeholder: "Correo Electrónico",
        },
        password: {
          label: "Contraseña",
          type: "password",
        },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) {
            return null;
          }

          // const passwordsMatch = await bcrypt.compare(password, user.password);
          const passwordsMatch = password === user.password;

          if (passwordsMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
