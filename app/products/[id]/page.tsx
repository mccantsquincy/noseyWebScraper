import PriceInfoCard from "@/components/PriceInfoCard";
import { getProductById } from "@/lib/actions";
import { formatNumber } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

interface Props {
  params: { id: string };
}

const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);

  if (!product) redirect("/");

  return (
    <div className="product-container">
      <div className="flex gap-28 cl:lex-row flex-col">
        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={580}
            height={400}
            className="mx-auto"
          />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between items-start gap-5 flex-wrap pb-6">
            <div className="flex flex-col gap-3">
              <p className="text-[28px] text-gray-900 font-semibold">
                {product.title}
              </p>

              <Link
                href={product.url}
                target="_blank"
                className="text-base text-black opacity-50"
              >
                Visit Product
              </Link>
            </div>
          </div>
        </div>
        <div className="product-info">
           <div className="flex flex-col gap-2">
             <p className="text-[34px] text-gray-900 font-bold">
              {product.currency} {formatNumber(product.currentPrice)}
             </p>
             <p className="text-[21px] text-gray-900 opacity-50 line-through">
              {product.currency} {formatNumber(product.originalPrice)}
             </p>
           </div>

           <div className="flex flex-col gap-4">
             <div className="flex gap-3">
                <div className="product-stars">
                  <Image 
                     src="/assets/icons/Star.svg"
                     alt="star"
                     width={20}
                     height={20}
                  />
                  <p className="text-sm font-semibold">{product.stars || 25}</p>
                </div>

                <div className="product-reviews">
                     <Image
                        src="/assets/icons/Comment.svg"
                        alt="comment"
                        width={20}
                        height={20}
                     />
                     <p className="text-sm text-gray-900 font-semibold">
                      {product.reviewsCount || 100} Reviews
                     </p>
                </div>
             </div>
             <p className="text-sm text-black opacoty-50">
              <span className="text-primary-green font-semibold">93%</span> Of buyers have recommended this
             </p>
           </div>
        </div>
        <div className="my-7 flex flex-col gap-5">
          <div className="flex gap-5 flex-wrap">
            <PriceInfoCard
              title="Current Price"
              value={`${product.currency} ${formatNumber(product.currentPrice)}`}
              borderColor="#b6dff"
            />
            <PriceInfoCard
              title="Average Price"
              value={`${product.currency} ${formatNumber(product.averagePrice)}`}
              borderColor="#b6dff"
            />
            <PriceInfoCard
              title="Highest Price"
              value={`${product.currency} ${formatNumber(product.highestPrice)}`}
              borderColor="#b6dff"
            />
            <PriceInfoCard
              title="Lowest Price"
              value={`${product.currency} ${formatNumber(product.lowestPrice)}`}
              borderColor="#b6dff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
