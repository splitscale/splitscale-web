"use client";

import React, { useEffect, useState } from "react";
import { useSwitch, VisuallyHidden, SwitchProps } from "@nextui-org/react";
import { SunIcon } from "./icons/sunIcon";
import { MoonIcon } from "./icons/moonIcon";
import { useTheme } from "next-themes";

export function ThemeSwitcher(props: SwitchProps) {
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (isSelected) setTheme("light");
  if (!isSelected) setTheme("dark");

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "h-8 w-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
}
