import prisma from "@/lib/prisma";

export default async function DataPage() {
  const data = await prisma.user.findMany({});
  return <div>{JSON.stringify(data)}</div>;
}
