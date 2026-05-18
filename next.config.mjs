import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/components/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "default" | "lg" | "icon";
};

export function Button({ className, asChild = false, variant = "default", size = "default", ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50",
        variant === "outline" ? "border bg-transparent" : "",
        size === "lg" ? "h-12 px-6 text-base" : size === "icon" ? "h-11 w-11" : "h-10 px-4 py-2",
        className
      )}
      {...props}
    />
  );
}
