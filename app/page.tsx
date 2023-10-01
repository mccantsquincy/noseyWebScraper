import Searchbar from '@/components/Searchbar'
import Image from 'next/image'

export default function Home() {
  return (
   <>
     <section className='px-6 md:px-20 py-24'>
      <div className='flex max-xl:flex-col gap-16'>
         <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:
            </p>
            <h1 className='head-text'>
               Unleash the Power of <span className='text-blue-500'>Nosey</span>
            </h1>
            <p className='mt-6'>
                Powerful, self-serve product and growth analytics to help you convert, engage and retain more.
            </p>

            <Searchbar />
         </div>

         HeroCarousel
      </div>
     </section>
     <section className='trending-section'>
       <h2 className='section-text'>Trending</h2>

       <div className='flex flex-wrap gap-x-8 gap-y-16'>
        {['Apple Iphone', 'Book', 'Sneakers'].map((product) => (
          <div>
            {product}
          </div>
        ))}
       </div>
     </section>
   </>
  )
}
