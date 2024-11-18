import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./component/MuiTheme";
import Header from "./component/Header";
import localFont from "next/font/local";
import { LanguageSetter } from "./internationalization/i18";
import Footer from "./component/Footer";
import Providers from "./StoreProvider";

const montserrat = Alexandria({
  weight: ["500", "400", "300", "200"],
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Sikka",
  description: "Generated by Omer Mamoro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={`${montserrat.className}`}>
        <Providers>
          <ThemeProvider theme={theme}>
            <LanguageSetter />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  );
}
