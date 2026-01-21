import type {Metadata} from "next";
import Link from "next/link";
import {PolicyPage, PolicySection} from "@/components/shared/policy-page";

export const metadata: Metadata = {
    title: "Intellectual Property Rights",
    description: "Statement of ownership, permitted use, and infringement reporting for shop.vaapee.com.",
};

export default function IntellectualPropertyRightsPage(
    _props: PageProps<"/policies/intellectual-property-rights">
) {
    return (
        <PolicyPage
            title="Intellectual Property Rights"
            subtitle="Our brands, creative assets, and product information are protected. Please review the permitted uses and how to report concerns."
        >
            <PolicySection title="Ownership">
                <p>
                    All content on shop.vaapee.com—including product listings, imagery, graphics, copy, layouts, software,
                    and trademarks—is owned or licensed by HONGKONG SERISVAPE TECHNOLOGY CO., LIMITED and protected by
                    applicable copyright, trademark, and intellectual property laws.
                </p>
            </PolicySection>

            <PolicySection title="Permitted Use">
                <p>
                    You may browse the site, place orders, and share links for personal, non-commercial purposes. Any
                    reproduction, distribution, modification, public display, or derivative use of our content requires
                    prior written consent from us.
                </p>
            </PolicySection>

            <PolicySection title="No Unauthorised Use">
                <p>
                    You may not remove proprietary notices, use our trademarks in a manner that causes confusion, register
                    similar domain names, or mirror our site without written permission. Misuse of our intellectual
                    property may result in suspension of access and legal remedies.
                </p>
            </PolicySection>

            <PolicySection title="Reporting Infringement">
                <p>
                    If you believe your intellectual property rights are being infringed on our site, please email{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>{" "}
                    with:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                    <li>Your contact information and authority to act on behalf of the rights holder.</li>
                    <li>A clear description of the copyrighted work or trademark you claim has been infringed.</li>
                    <li>URLs or specific locations on shop.vaapee.com where the material appears.</li>
                    <li>A statement that you have a good-faith belief the disputed use is not authorised.</li>
                    <li>Your electronic signature.</li>
                </ul>
                <p>We investigate good-faith notices promptly and will remove or disable access to infringing material as appropriate.</p>
            </PolicySection>

            <PolicySection title="Reservation of Rights">
                <p>
                    We reserve all rights not expressly granted in this statement. Use of our site does not confer any
                    license or ownership rights to you in any content, marks, or other intellectual property.
                </p>
            </PolicySection>
        </PolicyPage>
    );
}
