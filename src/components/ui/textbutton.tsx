import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";
import { MaterialSymbol } from "react-material-symbols";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TextButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "default" | "large";
  to: string;
};

const buttonVariants = cva(
  "group/text-button inline-flex w-fit items-center whitespace-nowrap border-blue-700 font-medium text-slate-900 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      size: {
        default: "gap-4 border-b-2 py-1 text-base",
        large: "gap-12 border-b-4 py-3 text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

const TextButton = React.forwardRef<HTMLButtonElement, TextButtonProps>(
  ({ className, to, size = "default", children, ...props }, ref) => {
    return (
      <Slot
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        <Link to={to}>
          {children}
          <div
            className={cn([
              size === "default" ? "size-6" : "size-8",
              "overflow-hidden",
            ])}
          >
            <MaterialSymbol
              className="-translate-x-full translate-y-full transition-transform duration-300 group-hover/text-button:translate-x-0 group-hover/text-button:translate-y-0"
              icon="arrow_outward"
              size={size === "default" ? 24 : 32}
            />
            <MaterialSymbol
              className="-translate-x-full translate-y-0 transition-transform duration-300 group-hover/text-button:-translate-y-full group-hover/text-button:translate-x-0"
              icon="arrow_outward"
              size={size === "default" ? 24 : 32}
            />
          </div>
        </Link>
      </Slot>
    );
  },
);

export default TextButton;
