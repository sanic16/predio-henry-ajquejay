import Footer from "@/components/footer/Footer";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import Navbar from "@/components/navbar/Navbar";
import { ContextSpinnerProvider } from "@/context/context-spinner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextSpinnerProvider>
      <AuthNavbar />
      <main className="container mx-auto max-w-[1280px] min-h-[calc(100vh-5rem)] mt-[5rem]">
        {children}
        angela mi amor bello
      </main>
      <Footer />
    </ContextSpinnerProvider>
  );
}
