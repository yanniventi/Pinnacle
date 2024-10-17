import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type TextButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  size?: "default" | "large";
  send?: boolean;
  to: string;
};

const buttonVariants = cva(
  "group/text-button inline-flex w-fit items-center whitespace-nowrap border-blue-700 fill-slate-900 font-medium text-slate-900 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
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

const TextButton = React.forwardRef<HTMLAnchorElement, TextButtonProps>(
  (
    { className, to, send = false, size = "default", children, ...props },
    ref,
  ) => {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        <div
          className={cn([
            size === "default" ? "size-6" : "size-8",
            !send && "overflow-hidden",
          ])}
        >
          {!send &&
            (size === "default" ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="translate-x-0 translate-y-0 fill-inherit transition-transform duration-300 group-hover/text-button:-translate-y-full group-hover/text-button:translate-x-full"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="-translate-x-full translate-y-0 fill-inherit transition-transform duration-300 group-hover/text-button:-translate-y-full group-hover/text-button:translate-x-0"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
              </>
            ) : (
              <>
                <svg
                  className="translate-x-0 translate-y-0 fill-inherit transition-transform duration-300 group-hover/text-button:-translate-y-full group-hover/text-button:translate-x-full"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                >
                  <path d="m248.74-237.38-53.28-53.29 398.12-398.12H233.37v-75.75h489.25v489.08H646.7v-360.05L248.74-237.38Z" />
                </svg>
                <svg
                  className="-translate-x-full translate-y-0 fill-inherit transition-transform duration-300 group-hover/text-button:-translate-y-full group-hover/text-button:translate-x-0"
                  xmlns="http://www.w3.org/2000/svg"
                  height="40px"
                  viewBox="0 -960 960 960"
                  width="40px"
                >
                  <path d="m248.74-237.38-53.28-53.29 398.12-398.12H233.37v-75.75h489.25v489.08H646.7v-360.05L248.74-237.38Z" />
                </svg>
              </>
            ))}
          {send &&
            (size === "default" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit transition-transform duration-300 group-hover/text-button:translate-x-2"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-inherit transition-transform duration-300 group-hover/text-button:translate-x-2"
                height="40px"
                viewBox="0 -960 960 960"
                width="40px"
              >
                <path d="M113.86-153.62v-652.76L887.97-480 113.86-153.62Zm72.81-111.33L699.92-480 186.67-697.05v152.77L430.95-480l-244.28 62.95v152.1Zm0 0v-432.1 432.1Z" />
              </svg>
            ))}
        </div>
      </Link>
    );
  },
);

export default TextButton;
