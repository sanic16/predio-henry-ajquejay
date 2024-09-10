import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-[1280px] min-h-[calc(100vh-5rem)] mt-[5rem]">
        {children}
      </main>
      <Footer />
    </>
  );
}
