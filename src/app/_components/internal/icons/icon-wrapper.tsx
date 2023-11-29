import { cn } from "@nextui-org/react";

interface SidebarBrandProps {
  children: React.ReactNode;
  className: string;
}

export function IconWrapper({ children, className }: SidebarBrandProps) {
  return (
    <div
      className={cn(
        className,
        "flex h-7 w-7 items-center justify-center rounded-small",
      )}
    >
      {children}
    </div>
  );
}
