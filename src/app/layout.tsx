import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";

const notoSerifBengali = Noto_Serif_Bengali({
  weight: ["400", "500", "600", "700"],
  subsets: ["bengali"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Management System",
  description: "A comprehensive management system for managing madrasahs",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="bn">
      <body className={`${notoSerifBengali.className} bg-[#EDEDE9]`}>
        <AppRouterCacheProvider>
          <>
            {children}
          </>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
};

export default RootLayout;
