import { SessionProvider } from "next-auth/react";
import Header from "@/components/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}
