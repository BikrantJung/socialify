import Button from "@/packages/components/button/Button";
import Dropzone from "@/packages/components/dropzone/Dropzone";
import Input from "@/packages/components/input/Input";
import { useCreateUser } from "@/packages/hooks/useCreateUser";
import { useForm } from "@/packages/hooks/useForm";
import { supabaseAuthClient } from "@/supabase/client";
import { IconAt, IconLock, IconTrash, IconUser } from "@tabler/icons-react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
function Register() {
  const [acceptedImages, setAcceptedImages] = useState([]);
  const [objectUrl, setObjectUrl] = useState("");
  console.log(acceptedImages);
  const router = useRouter();
  const { formValues, handleSubmit, handleChange } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
  });
  const { data, isLoading, mutate, isSuccess, isError, error } =
    useCreateUser(formValues);
  function registerUser() {
    mutate();
  }

  console.log("IS ERROR", isError);
  if (isSuccess) {
    console.log("DATA", data);
    router.replace("/");
  }

  useMemo(() => {
    if (acceptedImages.length) {
      setObjectUrl(URL.createObjectURL(acceptedImages[0]));
    }
  }, [acceptedImages]);

  return (
    // <RegisterPageLayout>
    <div className="flex h-screen items-center justify-center gap-3 bg-slate-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col rounded border bg-white p-4"
      >
        <div className="mb-6 flex flex-col gap-1">
          <h2 className="text-3xl">Welcome</h2>
          <p className="text-sm">
            Create an account to start using our service.
          </p>
        </div>
        <div className="mb-6 flex flex-col gap-2">
          <Input
            icon={<IconUser className="icon" />}
            name="username"
            type="text"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            required
          />
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

          {objectUrl ? (
            <div className="relative my-4 flex items-center justify-between rounded pr-2 shadow-md after:absolute after:top-0 after:left-0 after:h-full after:w-[3px] after:bg-purple-700 ">
              <div className="relative mr-4 h-[80px] w-[80px]">
                <Image
                  alt="profile picture"
                  src={objectUrl}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                onClick={() => setObjectUrl("")}
                className="rounded-none text-red-500"
              >
                <IconTrash className="icon" />
              </button>
            </div>
          ) : (
            <Dropzone setAcceptedImages={setAcceptedImages} />
          )}
        </div>
        <div className="mb-4 flex flex-col items-center gap-2">
          <Button type="submit" loading={isLoading}>
            Register
          </Button>
          <p className="ml-auto text-xs">
            Already have an account?{" "}
            <span className="text-blue-500 underline">
              <Link href="login">Login</Link>
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
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
