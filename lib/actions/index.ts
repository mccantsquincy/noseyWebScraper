"use server";

import { connectToDB } from "../mongoose";
import { scrapeAmazonProduct } from "../scraper";

export async function scrapeAndStoreProduct(productUrl: string) {
    if(!productUrl) return;

    try {
        const scrapedProduct = await scrapeAmazonProduct(productUrl);

        if(!scrapedProduct) return;

        // store or find scraped product data in database
        try {
            connectToDB();

        } catch(error: any) {
            throw new Error(`Failed to connect to DB ${error.message}`);
        }
        
    } catch (error: any) {
        throw new Error(`Failed to update product: ${error.message}`)
    }
}