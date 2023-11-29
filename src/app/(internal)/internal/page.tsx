import NavigationBar from "@/app/_components/internal/navbar";
import { UserButton } from "@clerk/nextjs";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <body>
      <NavigationBar />
    </body>
  );
}
