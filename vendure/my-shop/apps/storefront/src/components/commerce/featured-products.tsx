import {ProductCarousel} from "@/components/commerce/product-carousel";
import {cacheLife} from "next/cache";
import {query} from "@/lib/vendure/api";
import {GetCollectionProductsQuery} from "@/lib/vendure/queries";

async function getFeaturedCollectionProducts() {
    'use cache'
    cacheLife('days')

    // Fetch featured products from a specific collection
    const result = await query(GetCollectionProductsQuery, {
        slug: "vaapee",
        input: {
            collectionSlug: "vaapee",
            take: 12,
            skip: 0,
            groupByProduct: true
        }
    });

    return result.data.search.items;
}


export async function FeaturedProducts() {
    const products = await getFeaturedCollectionProducts();
    const featured = products.slice(0, 1);

    return (
        <ProductCarousel
            title="Featured Products"
            products={featured}
        />
    )
}
