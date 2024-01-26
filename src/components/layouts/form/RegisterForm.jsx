import Input from "@/components/elements/input";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const { push } = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const dataObject = {
      username: formData.get("username"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      password: formData.get("password"),
    };

    const result = await fetch("/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });

    if (result.status === 200) {
      event.target.reset();
      push("/auth/login");
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setIsError("Failed to register");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1>Register</h1>
      {isError && <h3 className="text-red-500">{isError}</h3>}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 border-2 border-white rounded-md p-2"
      >
        <Input id={"username"} label={"Username"} />
        <Input id={"email"} label={"Email"} />
        <Input id={"phone"} label={"Phone"} />
        <Input id={"password"} label={"Password"} type={"password"} />
        <button type="submit">{isLoading ? "Loading..." : "Register"}</button>
      </form>
      <p>
        Already have an account? <Link href="/auth/login">Login</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
