import * as React from "react";
import { cn } from "../../../lib/utils";

function Textarea({ className, ...props }) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "flex min-h-[120px] w-full rounded-lg border bg-white/[0.04] px-4 py-3 text-sm text-[var(--cream)] outline-none transition-[color,box-shadow,background] duration-200 resize-none",
                "border-white/12 placeholder:text-white/30 backdrop-blur-sm",
                "focus-visible:border-[var(--amber)]/55 focus-visible:bg-white/[0.07] focus-visible:ring-[3px] focus-visible:ring-[var(--amber)]/20",
                "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
                "aria-invalid:border-red-400/60 aria-invalid:ring-red-400/20 aria-invalid:focus-visible:ring-red-400/30",
                className
            )}
            {...props}
        />
    );
}

export { Textarea };
