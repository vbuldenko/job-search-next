import Footer from "@/components/shared/footer.tsx";
import Header from "@/components/shared/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-1 p-10 min-h-[60vh]">{children}</main>
      <Footer />
    </div>
  );
}
