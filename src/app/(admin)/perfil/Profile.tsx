import prisma from "@/lib/prisma";
import { auth } from "@/auth";

const Profile = async () => {
  const session = await auth();
  const numCars = await prisma.car.count({});
  const numPublishedCars = await prisma.car.count({
    where: { published: true },
  });
  if (!session || !session.user) {
    return <div>Acceso denegado</div>;
  }
  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-semibold tracking-wider mb-4">
        Perfil
      </h1>
      <p>Nombre: {session.user.name}</p>
      <p>Email: {session.user.email}</p>
      <p>Cantidad de autos: {numCars}</p>
      <p>Cantidad de autos publicados: {numPublishedCars}</p>
    </div>
  );
};

export default Profile;
