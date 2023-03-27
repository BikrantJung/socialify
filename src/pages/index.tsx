import Button from "@/packages/components/button/Button";
import SidebarLayout from "@/packages/layouts/SidebarLayout";
import { supabaseAuthClient } from "@/supabase/client";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Link from "next/link";

export default function Home(props: any) {
  const supabase = useSupabaseClient();
  async function logout() {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      window.location.reload();
    }
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SidebarLayout>a</SidebarLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = supabaseAuthClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/register",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};
