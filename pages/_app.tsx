import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "@next/font/google";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const router = useRouter();
  const showNavbar = router.pathname === "/auth/signin" ? false : true;

  return (
    <SessionProvider session={session}>
      <main className={`${inter.className} ${showNavbar && "pt-14"}`}>
        {showNavbar && <Navbar />}
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
