"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const themes = [
  // {
  //   key: "system",
  //   icon: Monitor,
  //   label: "System theme",
  // },
  {
    key: "light",
    icon: Sun,
    label: "Light theme",
  },
  {
    key: "dark",
    icon: Moon,
    label: "Dark theme",
  },
];

export type ThemeSwitcherProps = {
  className?: string;
};

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleThemeClick = useCallback(
    (themeKey: "light" | "dark" | "system") => {
      setTheme(themeKey);
    },
    [setTheme]
  );

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative isolate flex rounded-full bg-background p-1 border dark:border-white border-black space-x-3",
        className
      )}
    >
      {themes.map(({ key, icon: Icon, label }) => {
        const isActive = theme === key;

        return (
          <Button
            variant={"ghost"}
            size={"icon"}
            aria-label={label}
            className="relative rounded-full"
            key={key}
            onClick={() => handleThemeClick(key as "light" | "dark" | "system")}
            type="button"
          >
            {isActive && (
              <motion.div
                className={`absolute inset-0 rounded-full  ${theme === "dark" ? "bg-zinc-600" : "bg-zinc-300"}`}
                layoutId="activeTheme"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <Icon
              className={cn(
                "relative z-10 m-auto size-5",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            />
          </Button>
        );
      })}
    </div>
  );
};
