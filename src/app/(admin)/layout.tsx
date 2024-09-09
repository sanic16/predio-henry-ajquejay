import Footer from "@/components/footer/Footer";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import Navbar from "@/components/navbar/Navbar";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <AuthNavbar />
      <main className="container mx-auto max-w-[1280px]">{children}</main>
      <Footer />
    </>
  );
}
