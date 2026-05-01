import * as React from "react";
import { cn } from "../../../lib/utils";

function Card({ className, ...props }) {
    return (
        <div
            data-slot="card"
            className={cn(
                "relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.015] text-[var(--cream)] shadow-[0_24px_60px_-12px_rgba(0,0,0,0.55)] backdrop-blur-xl",
                className
            )}
            {...props}
        />
    );
}

function CardHeader({ className, ...props }) {
    return (
        <div
            data-slot="card-header"
            className={cn("flex flex-col gap-2 px-8 pt-8", className)}
            {...props}
        />
    );
}

function CardTitle({ className, ...props }) {
    return (
        <h3
            data-slot="card-title"
            className={cn("font-[var(--font-heading)] text-3xl font-bold leading-tight tracking-tight text-[var(--cream)]", className)}
            {...props}
        />
    );
}

function CardDescription({ className, ...props }) {
    return (
        <p
            data-slot="card-description"
            className={cn("text-sm italic text-white/55", className)}
            {...props}
        />
    );
}

function CardContent({ className, ...props }) {
    return (
        <div data-slot="card-content" className={cn("px-8", className)} {...props} />
    );
}

function CardFooter({ className, ...props }) {
    return (
        <div
            data-slot="card-footer"
            className={cn("flex items-center px-8 pb-8", className)}
            {...props}
        />
    );
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
