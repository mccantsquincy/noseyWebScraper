"use client";

import React, { FormEvent, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";
import { scrapeAndStoreProduct } from "@/lib/actions";

const isValidAmazonLink = (url: string) => {
  try {
    const parsedURL = new URL(url);
    const hostName = parsedURL.hostname;
    if (
      hostName.includes("amazon.com") ||
      hostName.includes("amazon") ||
      hostName.includes("amazon")
    ) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

const Searchbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchPrompt, setSearchPrompt] = useState("");

  const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonLink(searchPrompt);

    if(!isValidLink) return alert('Please enter a valid link.');

    try {
     setIsLoading(true);

     // Scrape amazon products
     const product = await scrapeAndStoreProduct(searchPrompt)
    } catch (error) {
     console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <Input
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
        placeholder="Search your favorite products. Enter product link."
      />
      <Button 
        variant="default"
        disabled={searchPrompt === ''}
      >
          Search
      </Button>
      {isLoading ? 'Searching...' : 'Search'}
    </form>
  );
};

export default Searchbar;
