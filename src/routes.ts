/**
 * Ann array of routes that are accessible to the public.
 * These routes do not require authentication.
 * @type (string[])
 */
export const publicRoutes = ["/", "/nosotros", "/contacto", /^\/autos\/.*/];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to the /profile
 * @type (string[])
 */
export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for the API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type (string)
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect route after a successful login.
 * @type (string)
 */
export const DEFAULT_LOGIN_REDIRECT = "/perfil";
