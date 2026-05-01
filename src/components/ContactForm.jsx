import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/shadcn/button";
import { Input } from "./ui/shadcn/input";
import { Textarea } from "./ui/shadcn/textarea";
import { Label } from "./ui/shadcn/label";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "./ui/shadcn/card";

export default function ContactForm() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null); // null | 'success' | 'error'
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const sendEmail = async (data) => {
        console.log("Email would be sent with:", data);
        return new Promise((resolve) => setTimeout(resolve, 1000));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.message
        ) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus(null);

        try {
            await sendEmail(formData);
            setStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", message: "" });
            setSubmitted(false);
            setTimeout(() => setStatus(null), 5000);
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    const errorFor = (field) => submitted && !formData[field];

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[var(--brown-900)] via-[var(--espresso)] to-[var(--brown-900)] py-24 px-6">
            {/* Ambient amber glow */}
            <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-12 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-[var(--amber)]/10 blur-[120px]"
            />
            <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 right-[-10%] h-[340px] w-[340px] rounded-full bg-[var(--amber-dark)]/15 blur-[100px]"
            />

            {/* Grain texture */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"
                }}
            />

            <div className="relative mx-auto max-w-2xl">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-10 text-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--amber)]/25 bg-[var(--amber)]/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--amber-light)]">
                        <span className="text-[var(--amber)]">✦</span> a quick hello
                    </span>
                    <h2
                        className="mt-5 text-balance font-bold leading-[1.05] tracking-tight text-[var(--cream)]"
                        style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2.4rem, 5vw, 3.6rem)" }}>
                        Save us a seat<span className="text-[var(--amber)]">.</span>
                    </h2>
                    <p className="mx-auto mt-3 max-w-md text-[15px] italic leading-relaxed text-white/55">
                        Drop a note and we'll write back over the morning brew.
                    </p>
                </motion.div>

                {/* Form card */}
                <motion.div
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
                    <Card className="overflow-hidden">
                        {/* Vertical amber bookmark accent */}
                        <div
                            aria-hidden
                            className="absolute left-0 top-8 bottom-8 w-[3px] rounded-r-full bg-gradient-to-b from-transparent via-[var(--amber)] to-transparent"
                        />

                        {/* Coffee-bean stamp in corner */}
                        <div
                            aria-hidden
                            className="absolute right-7 top-7 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--amber)]/25 text-[var(--amber)]/70">
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                                <path d="M16.7 4.6c-2.4 0-4.7 1.3-6.4 3.5C8.4 5.9 6 4.6 3.7 4.6c-.4 0-.7.3-.7.7 0 4.6 3.4 8.4 7.9 9.1.5.1.9-.3.9-.8 0-.1 0-.2-.1-.3-1-2.4-2.8-4.4-5.1-5.5 1.6.1 3.2.9 4.4 2.3.4.5 1.2.5 1.6 0 1.6-1.9 3.7-2.6 5.7-2.4-2.4 1.1-4.2 3.2-5.2 5.7-.1.4.1.9.5 1 .1 0 .2.1.3.1 4.5-.7 7.9-4.5 7.9-9.1 0-.5-.4-.8-.8-.8-1.4 0-2.8.4-4.3 1.2.4-.1.8-.2 1.2-.2 1.6 0 3 .7 4 1.7 0-.1-2.4-1.7-5.2-1.7z" />
                            </svg>
                        </div>

                        <form onSubmit={handleSubmit} noValidate>
                            <CardHeader className="pl-10 pr-20">
                                <CardTitle
                                    style={{ fontFamily: "var(--font-heading)" }}
                                    className="text-2xl">
                                    Send us a note
                                </CardTitle>
                                <CardDescription>
                                    First-name basis. No newsletters, ever.
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="pl-10 pr-8">
                                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="cf-firstName">
                                            <span className="text-[var(--amber)]">01</span> First name
                                        </Label>
                                        <Input
                                            id="cf-firstName"
                                            name="firstName"
                                            placeholder="Ada"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            aria-invalid={errorFor("firstName")}
                                        />
                                        {errorFor("firstName") && (
                                            <span className="text-xs text-red-300/90">
                                                A name helps us greet you.
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="cf-lastName">
                                            <span className="text-[var(--amber)]">02</span> Last name
                                        </Label>
                                        <Input
                                            id="cf-lastName"
                                            name="lastName"
                                            placeholder="Lovelace"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            aria-invalid={errorFor("lastName")}
                                        />
                                        {errorFor("lastName") && (
                                            <span className="text-xs text-red-300/90">
                                                Last name, please.
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <Label htmlFor="cf-email">
                                            <span className="text-[var(--amber)]">03</span> Email
                                        </Label>
                                        <Input
                                            id="cf-email"
                                            name="email"
                                            type="email"
                                            placeholder="ada@analytical.engine"
                                            value={formData.email}
                                            onChange={handleChange}
                                            aria-invalid={errorFor("email")}
                                        />
                                        {errorFor("email") && (
                                            <span className="text-xs text-red-300/90">
                                                We'll need an address to write back to.
                                            </span>
                                        )}
                                    </div>

                                    <div className="flex flex-col gap-2 md:col-span-2">
                                        <Label htmlFor="cf-message">
                                            <span className="text-[var(--amber)]">04</span> Your note
                                        </Label>
                                        <Textarea
                                            id="cf-message"
                                            name="message"
                                            rows={5}
                                            placeholder="Tell us what's brewing…"
                                            value={formData.message}
                                            onChange={handleChange}
                                            aria-invalid={errorFor("message")}
                                        />
                                        {errorFor("message") && (
                                            <span className="text-xs text-red-300/90">
                                                Even a single sentence is welcome.
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="flex-col items-stretch gap-4 pl-10 pr-8 pt-2 sm:flex-row sm:items-center sm:justify-between">
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="ok"
                                            initial={{ opacity: 0, scale: 0.95, x: -8 }}
                                            animate={{ opacity: 1, scale: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="flex items-center gap-3">
                                            <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-[var(--amber)] bg-[var(--amber)]/10 text-[var(--amber-light)]">
                                                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <div className="leading-tight">
                                                <p className="text-sm font-semibold text-[var(--cream)]">Sealed and sent.</p>
                                                <p className="text-xs italic text-white/50">We'll be in touch soon.</p>
                                            </div>
                                        </motion.div>
                                    ) : status === "error" ? (
                                        <motion.p
                                            key="err"
                                            initial={{ opacity: 0, x: -8 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0 }}
                                            className="text-sm text-red-300/90">
                                            A few fields still need a touch.
                                        </motion.p>
                                    ) : (
                                        <motion.p
                                            key="hint"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="text-xs uppercase tracking-[0.18em] text-white/35">
                                            replies within 24 hours
                                        </motion.p>
                                    )}
                                </AnimatePresence>

                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={loading}
                                    className="group min-w-[180px]">
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                            </svg>
                                            Sending…
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Send Message
                                            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </span>
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </section>
    );
}
