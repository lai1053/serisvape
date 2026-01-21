import type {Metadata} from "next";
import {PolicyPage, PolicySection} from "@/components/shared/policy-page";

export const metadata: Metadata = {
    title: "Shipping Policy",
    description: "Domestic and international shipping terms for shop.vaapee.com orders.",
};

export default function ShippingPolicyPage(_props: PageProps<"/policies/shipping-policy">) {
    return (
        <PolicyPage
            title="Shipping Policy"
            subtitle="How we process, dispatch, and deliver orders placed with shop.vaapee.com."
        >
            <PolicySection title="Domestic and International Shipping">
                <p>
                    We try to ship as quickly as possible. Orders usually go out within 4 days of ordering if all the
                    items are in stock, most times much quicker. If not, it&apos;ll be a week delay.
                </p>
                <p>
                    However, during peak times (new releases and holidays) you will need to allow a couple more days for
                    processing. PLEASE NOTE: once your package hits the post office, we CANNOT CONTROL where it goes,
                    however we will give you a tracking number.
                </p>
                <p>
                    We can ship to virtually any address in the world. Note that there are restrictions on some products,
                    and some products cannot be shipped to international destinations.
                </p>
                <p>
                    We have warwhouse at German, Spain and Belgium, It will take 2-7 working days to be delivered due to
                    destinations.
                </p>
            </PolicySection>

            <PolicySection title="Shipping Methods and Fees">
                <p>
                    Available shipping methods, estimated delivery windows, and shipping fees are shown at checkout based
                    on your destination and cart contents. Any free-shipping eligibility is displayed during checkout
                    before you place an order.
                </p>
            </PolicySection>

            <PolicySection title="Delay Notice">
                <p>
                    Logistics timelines can be affected by regional disruptions, holidays, or public health measures.
                    When unavoidable delays occur, we will share updated tracking information as soon as it is available.
                </p>
            </PolicySection>
        </PolicyPage>
    );
}
