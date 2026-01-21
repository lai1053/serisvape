import {cacheLife} from 'next/cache';
import {getTopCollections} from '@/lib/vendure/cached';
import Image from "next/image";
import Link from "next/link";
import {PaymentLogos} from "@/components/shared/payment-logos";

const policyLinks = [
    {href: "/policies/about-us", label: "About Us"},
    {href: "/policies/contact-us", label: "Contact Us"},
    {href: "/policies/terms-of-service", label: "Terms of Service"},
    {href: "/policies/shipping-policy", label: "Shipping Policy"},
    {href: "/policies/refund-return-policy", label: "Refund / Return Policy"},
    {href: "/policies/privacy-policy", label: "Privacy Policy"},
    {href: "/policies/intellectual-property-rights", label: "Intellectual Property Rights"},
];

async function Copyright() {
    'use cache'
    cacheLife('days');

    return (
        <div>
            © {new Date().getFullYear()} Vape Device Store. All rights reserved.
        </div>
    )
}

export async function Footer() {
    'use cache'
    cacheLife('days');

    const collections = await getTopCollections();

    return (
        <footer className="mt-auto border-t border-border bg-background">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
                    <div className="space-y-4">
                        <p className="text-sm font-semibold uppercase tracking-wider">
                            shop.vaapee.com
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            The merchant only sells vape devices, not nicotine. Devices cannot be used to consume any
                            illegal substances.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Image
                                src="/favicon_logosc/favicon-32x32.png"
                                alt="Vape Device Store"
                                width={18}
                                height={18}
                                className="h-5 w-5"
                            />
                            <span>Secure checkout with verified card networks.</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm font-semibold uppercase tracking-wider">Company Registration</p>
                        <div className="space-y-1 text-sm text-muted-foreground leading-relaxed">
                            <p className="font-medium text-foreground">
                                HONGKONG SERISVAPE TECHNOLOGY CO., LIMITED
                            </p>
                            <p>ROOM1006, 10/F., PO YIP BUILDING,23 HING YIP STREET, KWUN TONG,KOWLOON, HONG KONG</p>
                        </div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wider">Categories</p>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {collections.map((collection) => (
                                <li key={collection.id}>
                                    <Link
                                        href={`/collection/${collection.slug}`}
                                        className="transition-colors hover:text-foreground"
                                    >
                                        {collection.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider">Support</h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/account/orders" className="transition-colors hover:text-foreground">
                                    Order tracking
                                </Link>
                            </li>
                            <li>
                                <Link href="/account/profile" className="transition-colors hover:text-foreground">
                                    Account settings
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold uppercase tracking-wider">Legal & Policies</h4>
                        <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {policyLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="transition-colors hover:text-foreground">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="space-y-3 text-sm text-muted-foreground">
                        <Copyright/>
                        <p>Committed to compliant device-only sales and clear policies.</p>
                    </div>
                    <PaymentLogos heading="Accepted payment methods"/>
                </div>
            </div>
        </footer>
    );
}
