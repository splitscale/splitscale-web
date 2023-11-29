import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { NavbarLogo } from "./icons/navbar-logo";
import { ThemeSwitcher } from "./theme-switcher";
import { ChevronRightIcon } from "./icons/chevron-right-icon";
import { IconWrapper } from "./icons/icon-wrapper";
import { JSX, SVGProps } from "react";

export function Sidebar() {
  const sidebarItems: SidebarItemProps[] = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      link: "/dashboard",
    },
    {
      name: "Blog",
      icon: <BlogIcon />,
      link: "/blog",
    },
  ];

  return (
    <div className="flex h-screen w-[320px] flex-col place-content-between gap-5 rounded-r-3xl bg-foreground-50 p-5">
      <div className="flex flex-grow-0">
        {/* row 1 */}
        <SidebarBrand logo={<NavbarLogo />} title={"Splitscale"} />
      </div>
      <div className="flex flex-grow flex-col justify-start gap-3">
        {/* row 2 */}
        {sidebarItems.map((props, index) => (
          <SidebarItem key={index} {...props} />
        ))}
      </div>
      <div className=" flex flex-col justify-end ">
        {/* row 3 */}
        <div className="flex flex-row place-content-between gap-2">
          <div className="item-center flex flex-row gap-2">
            <UserButton afterSignOutUrl="/internal" />
            <div className="flex flex-col justify-center text-center">
              <p className="font-normal text-inherit">kasutu</p>
            </div>
          </div>
          <div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
  );
}

interface SidebarBrandProps {
  logo: React.ReactNode;
  title: string;
}

function SidebarBrand({ logo, title }: SidebarBrandProps) {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col justify-center">{logo}</div>
      <div className="flex flex-col justify-center text-center">
        <p className="font-bold text-inherit">{title}</p>
      </div>
    </div>
  );
}

type SidebarItemProps = {
  name: string;
  icon: JSX.Element;
  link: string;
};

function SidebarItem({ icon, name, link }: SidebarItemProps) {
  return (
    <Link href={link}>
      <div className="flex flex-row place-content-between gap-2 rounded-lg bg-foreground-100 p-3">
        <div className="item-center flex flex-row gap-2">
          <IconWrapper className="bg-success/10 text-success">
            {icon}
          </IconWrapper>
          <div className="flex flex-col justify-center text-center">
            <p className="font-normal text-inherit">{name}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center">
          <ChevronRightIcon className="text-xl" />
        </div>
      </div>
    </Link>
  );
}

function DashboardIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-foreground-900"
    >
      <path
        d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function BlogIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-foreground-900"
    >
      <path
        d="M20.954 10.667c-.072-.322-.272-.621-.502-.745-.07-.039-.522-.088-1.004-.109-.809-.036-.898-.052-1.152-.201-.405-.237-.516-.493-.518-1.187-.002-1.327-.554-2.559-1.646-3.67-.776-.793-1.645-1.329-2.634-1.629-.236-.072-.768-.097-2.545-.118-2.787-.033-3.405.024-4.356.402-1.748.697-3.008 2.166-3.465 4.05-.087.353-.103.92-.124 4.177-.025 4.08.004 4.68.258 5.488.212.668.425 1.077.861 1.657.835 1.108 2.083 1.907 3.334 2.133.595.107 7.931.135 8.683.032 1.306-.178 2.331-.702 3.293-1.684.694-.71 1.129-1.479 1.414-2.499.117-.424.127-.63.149-3.117.017-1.878.002-2.758-.046-2.98zM8.007 8.108c.313-.316.399-.329 2.364-.329 1.764 0 1.822.004 2.081.134.375.189.538.456.538.88 0 .384-.153.653-.493.869-.184.115-.293.123-2.021.133-1.067.007-1.916-.013-2.043-.048-.669-.184-.918-1.143-.426-1.639zm7.706 8.037-.597.098-3.114.035c-2.736.033-3.511-.018-3.652-.08-.288-.124-.554-.472-.602-.78-.042-.292.104-.696.33-.9.285-.257.409-.266 3.911-.27 3.602-.002 3.583-.003 3.925.315.482.45.381 1.251-.201 1.582z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
