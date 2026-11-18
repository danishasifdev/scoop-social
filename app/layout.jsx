import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
import CartProvider from "@/components/cart/CartProvider";
import ScrollReveal from "@/components/ScrollReveal";
import WheelSnap from "@/components/WheelSnap";
import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "Scoop Social - Small batch. Big personality.",
  description:
    "An independent ice cream studio. Six small-batch flavors, made with real ingredients and zero boring scoops.",
  icons: { icon: "/icon.svg" },
};

export const viewport = { themeColor: "#F7F1E7" };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-clip">
      <body className="overflow-x-clip">
        <CartProvider>
          <TransitionProvider>
            <ScrollReveal />
            <WheelSnap />
            <SiteShell>{children}</SiteShell>
          </TransitionProvider>
        </CartProvider>
      </body>
    </html>
  );
}
