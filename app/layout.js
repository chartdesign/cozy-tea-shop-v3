import { ShopContextProvider } from "./components/shop-context";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Cozy Tea Shop",
  description: "World's best Herbal Tea",
};

export default function RootLayout({ children }) {
  return (
    <ShopContextProvider>
      <html lang='en'>
        <body className={poppins.className}>{children}</body>
      </html>
    </ShopContextProvider>
  );
}
