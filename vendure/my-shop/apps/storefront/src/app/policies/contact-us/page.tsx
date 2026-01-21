import type {Metadata} from "next";
import Link from "next/link";
import {PolicyPage, PolicySection} from "@/components/shared/policy-page";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Reach the Vaapee support team quickly whenever you need help.",
};

export default function ContactUsPage(_props: PageProps<"/policies/contact-us">) {
    return (
        <PolicyPage
            title="Contact Us"
            subtitle="We keep our support line simple: email us anytime and we will respond with clear, actionable help."
        >
            <PolicySection title="E-mail Us">
                <p>
                    E-mail Us:{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>
                </p>
            </PolicySection>

            <PolicySection title="Customer Care">
                <p>We are here to help. Your satisfaction is our goal.</p>
            </PolicySection>

            <PolicySection title="Platform Statement">
                <p>
                    Our store is hosted on a Vendure commerce stack that we operate ourselves. It provides us with the
                    online e-commerce platform that allows us to sell our products and services to you.
                </p>
            </PolicySection>
        </PolicyPage>
    );
}
