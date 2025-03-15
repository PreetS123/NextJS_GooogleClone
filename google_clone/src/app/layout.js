import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Google Clone",
  description: "Creating goolge clone for learning purpose",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative min-h-screen antialiased`}
      >
        {children}
        <Footer/>
        
      </body>
    </html>
  );
}
