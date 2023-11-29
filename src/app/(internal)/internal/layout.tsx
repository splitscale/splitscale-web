import "@/styles/globals.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { NextUiProvider } from "@/app/_components/nextui-provider";
import { SignInProvider } from "@/app/_components/signin-provider";
import { dark } from "@clerk/themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextUiProvider>
      <ClerkProvider
        appearance={{
          elements: { footer: { display: "none" } },
          baseTheme: dark,
        }}
      >
        <SignedIn>
          <TRPCReactProvider cookies={cookies().toString()}>
            {children}
          </TRPCReactProvider>
        </SignedIn>
        <SignedOut>
          <SignInProvider />
        </SignedOut>
      </ClerkProvider>
    </NextUiProvider>
  );
}
