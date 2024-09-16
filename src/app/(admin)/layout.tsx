import Footer from "@/components/footer/Footer";
import AuthNavbar from "@/components/navbar/AuthNavbar";
import { ContextSpinnerProvider } from "@/context/context-spinner";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ContextSpinnerProvider>
      <AuthNavbar />
      <main className="container mx-auto max-w-[1280px] min-h-[calc(100vh-5rem)] mt-[5rem] pt-8">
        {children}
      </main>
      <Footer />
    </ContextSpinnerProvider>
  );
}
