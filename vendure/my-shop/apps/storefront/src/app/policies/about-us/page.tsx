import type {Metadata} from "next";
import {PolicyPage, PolicySection} from "@/components/shared/policy-page";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn who we are and the promise behind shop.vaapee.com.",
};

export default function AboutUsPage(_props: PageProps<"/policies/about-us">) {
    return (
        <PolicyPage
            title="About Us"
            subtitle="A concise overview of who we are and the commitment behind every order."
        >
            <PolicySection title="WHO WE ARE">
                <p>
                    Vaapee.com is an international e-commerce website. We mainly stock a wide range of excellent vape and
                    vapliq taste .
                </p>
            </PolicySection>

            <PolicySection title="OUR PROMISE">
                <p>
                    We are committed to bringing our customers the very latest and most creative products. We have very
                    strict quality control of our products to ensure that our customers could receive unique high-quality
                    products. At the same time, we have a very professional customer service team with more than 10 people
                    to provide customers with after-sales service.
                </p>
            </PolicySection>
        </PolicyPage>
    );
}
