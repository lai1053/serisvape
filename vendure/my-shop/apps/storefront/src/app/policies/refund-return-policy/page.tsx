import type {Metadata} from "next";
import Link from "next/link";
import {PolicyPage, PolicySection} from "@/components/shared/policy-page";

export const metadata: Metadata = {
    title: "Refund & Return Policy",
    description: "How refunds, returns, and exchanges are handled for shop.vaapee.com orders.",
};

export default function RefundReturnPolicyPage(_props: PageProps<"/policies/refund-return-policy">) {
    return (
        <PolicyPage
            title="Refund / Return Policy"
            subtitle="Clear guidance on returns, exchanges, and refunds for purchases from shop.vaapee.com."
        >
            <PolicySection title="Our Promise to our Valued Customers">
                <p>
                    We are committed to being your trusted partner by delivering the high quality products with lowest
                    price, service and convenience you deserve. If you are not fully satisfied with your purchase, we are
                    here to help you with an Exchange, Return or Repair. If you received an item from us that you are not
                    satisfied with, please contact Customer Service via email{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>
                </p>
            </PolicySection>

            <PolicySection title="Returns">
                <p>
                    As long as the products don&apos;t have man-made damage, we can do the refund for you for any reason
                    in 30 days after you receiving the products. But you need to pay express fee. Our policy lasts 30
                    days. If 30 days have gone by since you receiving the product, unfortunately we can’t offer you a
                    refund or exchange.
                </p>
                <p>
                    <strong>Return for Exchanges (if applicable)</strong>
                </p>
                <p>
                    We only replace items if they are defective or damaged. If you need to exchange it for the same item,
                    please feel free to contact us{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>
                    , we are glad to help.
                </p>
                <p>Please contact us by email to request a return address before returning.</p>
                <p>
                    Email:{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>
                </p>
                <p>We cannot refund if it occurs one of the following two situations.</p>
                <ul className="list-disc space-y-2 pl-5 text-base text-muted-foreground">
                    <li>
                        Send products to the wrong address (including returning directly to the place of shipment without
                        contacting us).
                    </li>
                    <li>Choose the return method for cash on delivery.</li>
                </ul>
            </PolicySection>

            <PolicySection title="Refunds (if applicable)">
                <p>
                    Once your return is received and inspected, we will send you an email to notify you that we have
                    received your returned item. We will also notify you of the approval or rejection of your refund. If
                    you are approved, then your refund will be processed, and a credit will automatically be applied to
                    your credit card or original method of payment, within a 7 business days.
                </p>
                <p>
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping
                    costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from
                    your refund.
                </p>
                <p>
                    If you return for exchange, we will ship the item you want after receiving your returned product. The
                    exchange time may vary depending on where you live. If you are shipping an item over $75, you’d
                    better choosing a trackable shipping service or purchasing shipping insurance. We can not refund you
                    if we can not receive your returned item.
                </p>
            </PolicySection>

            <PolicySection title="Sale items (if applicable)">
                <p>Only regular priced items may be refunded, unfortunately sale items cannot be refunded.</p>
            </PolicySection>

            <PolicySection title="Late or missing refunds (if applicable)">
                <p>
                    If you haven’t received a refund yet, first check your bank account again. Then contact your credit
                    card company, it may take some time before your refund is officially posted. Next contact your bank.
                    There is often some processing time before a refund is posted. If you’ve done all of this and you
                    still have not received your refund yet, please contact us at{" "}
                    <Link href="mailto:info@vaapee.com" className="font-medium text-foreground underline">
                        info@vaapee.com
                    </Link>
                </p>
            </PolicySection>
        </PolicyPage>
    );
}
