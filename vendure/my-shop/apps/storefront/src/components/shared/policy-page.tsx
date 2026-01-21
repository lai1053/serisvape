import {ReactNode} from "react";
import {cn} from "@/lib/utils";

type PolicyPageProps = {
    title: string;
    subtitle?: string;
    lastUpdated?: string;
    eyebrow?: string;
    children: ReactNode;
};

export function PolicyPage({
    title,
    subtitle,
    lastUpdated,
    eyebrow = "Policy notice",
    children,
}: PolicyPageProps) {
    return (
        <section className="bg-gradient-to-b from-secondary/50 via-background to-background">
            <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
                <div className="overflow-hidden rounded-3xl border bg-card/80 shadow-xl shadow-black/5 backdrop-blur">
                    <div className="grid gap-8 lg:grid-cols-[1.05fr,1.45fr]">
                        <div className="space-y-4 border-b border-border/70 p-8 lg:border-b-0 lg:border-r">
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                                {eyebrow}
                            </p>
                            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h1>
                            {subtitle ? (
                                <p className="text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
                            ) : null}
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                                <span className="rounded-full border border-border px-3 py-1">
                                    Publicly accessible
                                </span>
                                <span className="rounded-full border border-border px-3 py-1">
                                    Mobile-friendly layout
                                </span>
                                {lastUpdated ? (
                                    <span className="rounded-full border border-border px-3 py-1">
                                        Updated: {lastUpdated}
                                    </span>
                                ) : null}
                            </div>
                        </div>
                        <div className="space-y-8 p-8 lg:p-10">{children}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

type PolicySectionProps = {
    title: string;
    children: ReactNode;
    className?: string;
};

export function PolicySection({title, children, className}: PolicySectionProps) {
    return (
        <section className={cn("space-y-3", className)}>
            <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
            <div className="space-y-3 text-base leading-relaxed text-muted-foreground">{children}</div>
        </section>
    );
}
