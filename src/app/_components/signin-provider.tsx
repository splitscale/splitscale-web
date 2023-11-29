import { SignIn } from "@clerk/nextjs";

export function SignInProvider() {
  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <SignIn redirectUrl={"/internal"} />
    </div>
  );
}
