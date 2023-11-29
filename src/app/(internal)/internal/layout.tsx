import "@/styles/globals.css";
import { cookies } from "next/headers";
import { TRPCReactProvider } from "@/trpc/react";
import { ClerkProvider, SignedIn, SignedOut, SignIn } from "@clerk/nextjs";
import { UiProviders } from "@/app/_components/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UiProviders>
      <ClerkProvider
        appearance={{
          elements: { footer: { display: "none" } },
        }}
      >
        <SignedIn>
          <html lang="en">
            <body className="bg-background text-foreground dark">
              <TRPCReactProvider cookies={cookies().toString()}>
                {children}
              </TRPCReactProvider>
            </body>
          </html>
        </SignedIn>
        <SignedOut>
          <SignIn redirectUrl={"/internal"} />
        </SignedOut>
      </ClerkProvider>
    </UiProviders>
  );
}
