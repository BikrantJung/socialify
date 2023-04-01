import type { AppProps } from "next/app";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import {
  DehydratedState,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { root } from "@/styles/fonts";
import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Navbar from "@/packages/components/shared/navbar/Navbar";
import { useRouter } from "next/router";
import { navbarHideLocations } from "@/packages/components/shared/navbar/hideLocations";
import { Hydrate } from "@tanstack/react-query";
export default function App({ Component, pageProps }: AppProps) {
  const [staleTime, setStaleTime] = useState(0);
  useEffect(() => {
    setStaleTime(5 * 30 * 1000);
  }, []);
  const router = useRouter();
  const pageName = router.pathname.split("/").pop();

  const [supabaseClient] = useState(() =>
    createBrowserSupabaseClient({
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_HOST,
      supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON,
    })
  );

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            staleTime: 300000,
          },
        },
      })
  );
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
              <div className="sticky top-0 z-20">
                <Navbar />
              </div>
            )
          ) : (
            <div className="sticky top-0 z-20">
              <Navbar />
            </div>
          )}

          <div className="px-8">
            <Component {...pageProps} />
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionContextProvider>
  );
}
