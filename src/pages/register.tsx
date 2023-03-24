import Button from "@/packages/components/button/Button";
import Input from "@/packages/components/input/Input";
import { useCreateUser } from "@/packages/hooks/useCreateUser";
import { useForm } from "@/packages/hooks/useForm";
import { IconAt, IconLock, IconUser } from "@tabler/icons-react";
import { useRouter } from "next/router";
import Link from "next/link";
function Register() {
  const router = useRouter();
  const { formValues, handleSubmit, handleChange } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
  });
  const { isLoading, mutate, isSuccess, isError, error } =
    useCreateUser(formValues);

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
        className="flex flex-col rounded border bg-white px-4 py-8"
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
        </div>
        <div className="flex flex-col gap-2">
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
    // </RegisterPageLayout>
  );
}

export default Register;
