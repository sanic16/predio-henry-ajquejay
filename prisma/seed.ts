import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const carData: Prisma.CarCreateInput[] = [
  {
    title: "Nissan Versa Advance",
    images: [
      "ticlgy3b3dzfjxnaz6we",
      "ufc8muleowmamdcimuxj",
      "q3jmbsjrrdaullocymxd",
      "ycrynvjlg0p3nfiezwd3",
      "spphiebivjkxdb0rvkoy",
    ],
    modelYear: 2020,
    modelMake: "Nissan",
    price: 55000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 10000,
    engineType: "PETROL",
    engineCapacity: 1.6,
  },
  {
    title: "Ford F150 XLT Cabina Sencilla",
    images: [
      "jnue21p5orr6khnumzjb",
      "d91z67naj3l5cpgerau8",
      "szrou6335hxskxdcxhav",
      "xwoic8gg9u2du08wksle",
      "fwsyaw56vgmnifzsiqdg",
    ],
    modelYear: 2019,
    modelMake: "Ford",
    price: 250000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 50000,
    engineType: "PETROL",
    engineCapacity: 3.5,
    location: "Chimaltenango",
  },
  {
    title: "Volkswagen Nivus Highline",
    images: [
      "fwsyaw56vgmnifzsiqdg",
      "yopti3al8sndspthby3d",
      "ayucn9zdhje3vs22typf",
      "kvjsw9aaaggqcwjxsy2f",
      "i6aklya6vbc89nvhtz5m",
    ],
    modelYear: 2021,
    modelMake: "Volkswagen",
    price: 300000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 20000,
    engineType: "DIESEL",
    engineCapacity: 1.0,
    location: "Chimaltenango",
  },
  {
    title: "Renault Kwid Intense",
    images: [
      "kutoovgjggriazzqdch5",
      "qitso131tudepq3x3b0q",
      "adfhyxylwekgzs6qiuc3",
      "yujw0kkph0jrq5hzhvvc",
      "rfmpspcxpggpephmspa7",
    ],
    modelYear: 2023,
    modelMake: "Renault",
    price: 200000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 10000,
    engineType: "PETROL",
    engineCapacity: 1.0,
    location: "Chimaltenango",
  },
  {
    title: "Renault Stepway Intense",
    images: [
      "gix7gqbn0x1xhabusefz",
      "wtes3hffoijhiejymwl9",
      "dfvgieizizwifjhoaesf",
      "rishsex2klhq0mzddppt",
      "jhktxsl8tt94uxxwxegi",
    ],
    modelYear: 2020,
    modelMake: "Renault",
    price: 150000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 30000,
    engineType: "PETROL",
    engineCapacity: 1.6,
    location: "Chimaltenango",
  },
  {
    title: "Kia Picanto X-Line 1.25 MT",
    images: [
      "hphzfs1yqfolj16nh8hv",
      "sjpcaqr3b6vnccdrc1jo",
      "tejtex4go0tho1sgvc0n",
      "frhldpfg04r35be1pgdz",
      "rpgc1quu1nww3pbuqcvk",
    ],
    modelYear: 2023,
    modelMake: "Kia",
    price: 100000,
    condition: "USED",
    transmission: "AUTO",
    mileage: 10000,
    engineType: "PETROL",
    engineCapacity: 1.25,
    location: "Chimaltenango",
  },
];

async function main() {
  console.log(`Deleting data...`);
  await prisma.car.deleteMany({});

  console.log(`Seeding database...`);

  for (const car of carData) {
    await prisma.car.create({
      data: car,
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
