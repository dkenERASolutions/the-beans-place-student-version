import * as React from "react";
import { cn } from "../../../lib/utils";

const variants = {
    default:
        "bg-[var(--amber)] text-[var(--brown-900)] shadow-[0_4px_20px_rgba(212,146,42,0.35)] hover:bg-[var(--amber-light)] hover:shadow-[0_8px_28px_rgba(212,146,42,0.5)]",
    secondary:
        "bg-[var(--brown-700)] text-[var(--cream)] shadow-[0_4px_16px_rgba(74,55,44,0.3)] hover:bg-[var(--brown-600)]",
    outline:
        "border border-[var(--amber)]/40 bg-transparent text-[var(--cream)] hover:bg-[var(--amber)]/10 hover:border-[var(--amber)]/70",
    ghost: "bg-transparent text-[var(--cream)] hover:bg-white/5",
    destructive:
        "bg-red-600/90 text-white shadow-sm hover:bg-red-600",
    link: "text-[var(--amber-light)] underline-offset-4 hover:underline bg-transparent"
};

const sizes = {
    default: "h-10 px-5 py-2 text-sm",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-12 rounded-xl px-8 text-base",
    icon: "h-10 w-10"
};

function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
    const Comp = asChild ? "span" : "button";
    return (
        <Comp
            data-slot="button"
            className={cn(
                "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold tracking-wide transition-all duration-200 ease-out outline-none focus-visible:ring-2 focus-visible:ring-[var(--amber)]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brown-900)] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] cursor-pointer select-none [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}

export { Button };
