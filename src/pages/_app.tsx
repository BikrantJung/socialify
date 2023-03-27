import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { root } from "@/styles/fonts";
import "@/styles/globals.css";
import { useState } from "react";
import Navbar from "@/packages/components/navbar/Navbar";
import { useRouter } from "next/router";
import { navbarHideLocations } from "@/packages/components/navbar/hideLocations";

export default function App({
  Component,
  pageProps,
}: AppProps<{ initialSession: Session }>) {
  const router = useRouter();
  const pathname = router.pathname;
  const pageName = router.pathname.split("/").pop();
  console.log(pageName);
  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_HOST,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON,
    })
  );
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
      },
    },
  });
  if (pageName) {
  }
  console.log(pageName);
  console.log({
    pageName,
  });
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <style jsx global>
          {root}
        </style>
        <div className="flex flex-col">
          {pageName ? (
            navbarHideLocations.includes(pageName) ? (
              ""
            ) : (
              <div>
                <Navbar />
              </div>
            )
          ) : (
            <div>
              <Navbar />
            </div>
          )}

          <div>
            <Component {...pageProps} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionContextProvider>
  );
}
