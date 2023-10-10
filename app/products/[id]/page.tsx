import { getProductById } from '@/lib/actions'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
  params: { id: string }
}

const ProductDetails = async ({ params : { id }  } : Props) => {
  
  const product = await getProductById(id);

  if(!product) redirect('/');



  return (
    <div className='product-container'>
      <div className='flex gap-28 cl:lex-row flex-col'>
        <div className='product-image'>
          <Image
             src={product.image}
             alt={product.title}
             width={580}
             height={400}
             className="mx-auto"
          />
        </div>

        <div className='flex-1 flex flex-col'>
          <div className='flex justify-between items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-3'>
              <p className='text-[28px] text-gray-900 font-semibold'>{product.title}</p>

              <Link
                 href={product.url}
                 target="_blank"
                 className='text-base text-black opacity-50'
              >
                Visit Product
              </Link>
            </div>

            <div className='flex items-center gap-3'>
              <div className='product-hearts rounded-lg'>
                 <Image 
                    src="/assets/icons/Heart.svg"
                    alt="heart"
                    height={20}
                    width={20}
                 />

                 <p className='text-base font-semibold text-[#D46F77]'>{product.reviewsCount}</p>
              </div>
              
              <div className='p-2 bg-white-200 rounded-lg'>
                {/* Finish product card */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;