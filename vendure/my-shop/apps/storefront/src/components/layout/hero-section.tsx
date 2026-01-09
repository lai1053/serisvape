import {Button} from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative bg-muted overflow-hidden">
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
                        Vape Device Store
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Reliable devices, clear compliance, and straightforward service.
                    </p>
                    <div className="mx-auto max-w-3xl rounded-2xl border border-foreground/10 bg-background/70 p-6 text-left text-sm md:text-base shadow-sm">
                        <p className="font-semibold text-foreground">
                            The merchant only sell vape devices, not nicotine.
                        </p>
                        <p className="mt-2 text-muted-foreground">
                            The merchant&apos;s devices cannot be used to consume any illegal substances.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button asChild size="lg" className="min-w-[200px]">
                            <Link href="/search">
                                Shop Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

        </section>
    );
}
