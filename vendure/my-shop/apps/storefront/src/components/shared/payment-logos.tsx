import Image from "next/image";
import {cn} from "@/lib/utils";

const paymentLogos = [
    {name: "Visa", src: "/assets/payments/visa.png"},
    {name: "Mastercard", src: "/assets/payments/mastercard.png"},
    {name: "Maestro", src: "/assets/payments/maestro.jpg"},
    {name: "American Express", src: "/assets/payments/amex.jpg"},
    {name: "Discover", src: "/assets/payments/discover.jpg"},
];

type PaymentLogosProps = {
    className?: string;
    heading?: string;
};

export function PaymentLogos({className, heading = "We accept major cards"}: PaymentLogosProps) {
    return (
        <div className={cn("space-y-2", className)}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                {heading}
            </p>
            <div className="flex flex-wrap items-center gap-3">
                {paymentLogos.map((logo) => (
                    <div
                        key={logo.name}
                        className="flex h-10 items-center rounded-md border border-border/70 bg-white/80 px-3 py-2 shadow-sm shadow-black/5 backdrop-blur dark:bg-white/10"
                        aria-label={logo.name}
                    >
                        <Image
                            src={logo.src}
                            alt={logo.name}
                            width={72}
                            height={24}
                            className="h-6 w-auto object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
