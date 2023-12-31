import Modal from "@/components/Modal";
import PriceInfoCard from "@/components/PriceInfoCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { getProductById, getSimilarProducts } from "@/lib/actions";
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
  const similarProducts = await getSimilarProducts(id);

  if (!product) redirect("/");

  return (
    <div className="product-container">
      <div className="flex flex-col gap-28 max-lg:flex-col-reverse lg:flex-row ">
        <div className="flex flex-col max-w-[400px] ">
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
                <Link href="/" target="_blank" className="text-base text-white">
                  <Button className="btn w-fit flex items-center justify-center min-w-[200px]">
                    Buy now
                  </Button>
                </Link>

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
                <span className="text-primary-green font-semibold">93%</span> Of
                buyers have recommended this
              </p>
            </div>
          </div>
          <div className="my-7 flex flex-col items-start gap-5">
            <div className="flex gap-5 flex-wrap">
              <PriceInfoCard
                title="Current Price"
                value={`${product.currency} ${formatNumber(
                  product.currentPrice
                )}`}
                borderColor="#b6dff"
              />
              <PriceInfoCard
                title="Average Price"
                value={`${product.currency} ${formatNumber(
                  product.averagePrice
                )}`}
                borderColor="#b6dff"
              />
              <PriceInfoCard
                title="Highest Price"
                value={`${product.currency} ${formatNumber(
                  product.highestPrice
                )}`}
                borderColor="#b6dff"
              />
              <PriceInfoCard
                title="Lowest Price"
                value={`${product.currency} ${formatNumber(
                  product.lowestPrice
                )}`}
                borderColor="#b6dff"
              />
            </div>
            <Modal productId={id} />
          </div>

          {/* <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-5">
              <h3 className="text-2xl text-neutral-900 font-semibold">
                Product description
              </h3>

              <div className="flex flex-col gap-4">
                {product?.description?.split("\n")}
              </div>
            </div>
          </div> */}

          {/* display similar products */}
          {similarProducts && similarProducts?.length > 0 && (
            <div className="py-14 flex flex-col gap-2 w-full">
              <p className="section-text">Similar Products</p>

              <div className="flex max-lg:flex-wrap gap-10 mt-7 w-full">
                {similarProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="product-image">
          <Image
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="mx-auto p-10"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
