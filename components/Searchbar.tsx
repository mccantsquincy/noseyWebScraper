"use client";

import React from "react";
import { Input } from "./ui/input";
import { Button } from "@/components/ui/button";

const Searchbar = () => {

  const handleSubmit = () => {

  }

  return (
    <form 
      className="flex flex-wrap gap-4 mt-12"
      onSubmit={handleSubmit}
    >
      <Input 
        type="text" 
        placeholder="Search your favorite products"
      />
      <Button variant="default">Button</Button>
    </form>
  );
};

export default Searchbar;
