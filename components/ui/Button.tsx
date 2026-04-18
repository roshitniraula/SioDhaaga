import Link from "next/link";
import { type ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
};

type PrimaryButtonProps = CommonProps & {
  variant: "primary";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type TextButtonProps = CommonProps & {
  variant: "text";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = PrimaryButtonProps | TextButtonProps;

export function Button({ variant, children, className = "", href, onClick, type = "button", disabled }: ButtonProps) {
  const primaryClass =
    "inline-flex items-center justify-center h-14 px-8 w-full " +
    "bg-[--color-walnut] text-[--color-ivory] " +
    "text-[13px] font-medium tracking-[0.1em] uppercase " +
    "rounded-[2px] border-none " +
    "hover:bg-[--color-walnut-soft] " +
    "disabled:opacity-50 disabled:cursor-not-allowed " +
    "transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

  const textClass =
    "inline-flex items-center gap-1 " +
    "text-[--color-sage] text-body font-normal " +
    "border-b border-transparent hover:border-[--color-sage] " +
    "transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]";

  const cls = variant === "primary" ? `${primaryClass} ${className}` : `${textClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
