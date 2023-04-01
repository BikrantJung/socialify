import Button from "@/packages/components/shared/button/Button";
import Input from "@/packages/components/shared/input/Input";
import { useCreateUser } from "@/packages/hooks/useCreateUser";
import { useForm } from "@/packages/hooks/useForm";
import { IUserRegister } from "@/packages/types/auth/register.types";
import { supabaseAuthClient } from "@/supabase/client";
import {
  IconAt,
  IconLock,
  IconPhoto,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
function Register() {
  const [image, setImage] = useState<IUserRegister["profile_picture"]>(null);
  const router = useRouter();
  const { formValues, handleSubmit, handleChange } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
  });
  const { data, isLoading, mutate, isSuccess, isError, error } = useCreateUser({
    ...formValues,
    profile_picture: image,
  });

  async function registerUser() {
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
          {image ? (
            <div className="relative my-4 flex items-center rounded pr-2 shadow-md after:absolute after:top-0 after:left-0 after:h-full after:w-[3px] after:bg-purple-500 ">
              <div className="relative mr-4 h-[80px] w-[80px]">
                <Image
                  alt="profile picture"
                  src={URL.createObjectURL(image)}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="mr-auto w-[100px] truncate text-xs  ">
                {image.name}
              </p>
              <p className="mx-4 rounded border-0 bg-purple-300 p-1 text-xs text-slate-800">
                {(image.size / (1024 * 1024)).toFixed(2)} MB
              </p>
              <button
                type="button"
                onClick={() => setImage(null)}
                className="rounded-none text-red-500"
              >
                <IconTrash className="icon" />
              </button>
            </div>
          ) : (
            <div>
              <label
                htmlFor="profile_picture"
                className="flex h-8 w-fit min-w-[2.5] items-center gap-1 rounded bg-purple-500 px-2 text-white focus-within:shadow-ring hover:bg-purple-600"
              >
                <input
                  className="sr-only"
                  id="profile_picture"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const files = e.target.files;

                    if (files) {
                      setImage(files[0]);
                    }
                  }}
                />{" "}
                <IconPhoto className="icon h-4 w-4" />
                <p className="text-xs">Choose an image</p>
              </label>
            </div>
          )}
        </div>
        <div className="flex flex-col items-center gap-2">
          <Button type="submit" loading={isLoading}>
            Register
          </Button>
          <p className="mt-4 ml-auto text-xs">
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
