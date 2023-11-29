import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <div>This is a protected page</div>
      <UserButton afterSignOutUrl="/internal" />
    </div>
  );
}
