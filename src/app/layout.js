import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
