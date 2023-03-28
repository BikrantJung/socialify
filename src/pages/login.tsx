import Button from "@/packages/components/shared/button/Button";
import Input from "@/packages/components/shared/input/Input";
import { useForm } from "@/packages/hooks/useForm";
import { useLoginUser } from "@/packages/hooks/useLoginUser";
import { supabaseAuthClient } from "@/supabase/client";
import { IconAt, IconLock } from "@tabler/icons-react";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
function LoginPage() {
  const router = useRouter();
  const { formValues, handleSubmit, handleChange } = useForm(registerUser, {
    email: "",
    password: "",
  });
  const { data, isLoading, mutate, isSuccess, isError } =
    useLoginUser(formValues);

  function registerUser() {
    mutate();
  }

  if (isSuccess) {
    router.replace("/");
  }
  return (
    // <RegisterPageLayout>
    <div className="flex h-screen items-center justify-center gap-3 bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded border bg-white p-4"
      >
        <div className="mb-6 flex flex-col gap-1">
          <h2 className="text-3xl">Login to Socialify</h2>
          <p className="text-sm">
            Login to your account to start using socialify
          </p>
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <Input
            icon={<IconAt className="icon" />}
            name="email"
            placeholder="Email"
            type="email"
            value={formValues.email}
            required
            onChange={handleChange}
          />
          <Input
            icon={<IconLock className="icon" />}
            name="password"
            type="password"
            placeholder="Password"
            value={formValues.password}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button type="submit" loading={isLoading}>
            Login
          </Button>
          <p className="ml-auto mt-4 text-xs">
            New to socialify?{" "}
            <span className="text-blue-500 underline">
              <Link href="register">Register</Link>
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
    // </RegisterPageLayout>
  );
}

export default LoginPage;
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client
  const supabase = supabaseAuthClient(ctx);
  // Check if we have a session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
