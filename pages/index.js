import Blogs from '@/components/blogs';
import Categories from '@/components/category';
import Products from '@/components/products';
import Banner from '@/components/sliders/banner';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsBagDash } from 'react-icons/bs';
import { MdOutlineLocalShipping, MdSupportAgent } from 'react-icons/md';
import { TbReportMoney } from 'react-icons/tb';
import Layout from '../components/ui/layout';
import client2 from '../public/clients/client-2.png';
import client3 from '../public/clients/client-3.png';
import client4 from '../public/clients/client-4.png';
import client5 from '../public/clients/client-5.png';
import client6 from '../public/clients/client-6.png';
import client8 from '../public/clients/client-8.png';
import client9 from '../public/clients/client-9.png';
import client1 from '../public/clients/client1.png';
import client10 from '../public/clients/client10.png';
import client7 from '../public/clients/client7.png';
import offerBg1 from '../public/offer-1.jpg';
import offerBg2 from '../public/offer-2.jpg';
import offerBg3 from '../public/offer-3.jpg';
import offerBg4 from '../public/offer-4.jpg';
import offerBg5 from '../public/offer-5.jpg';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>ShopperEase</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=''>
        <div>
          <Banner />

          {/* Features */}
          <div className='container mt-10'>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-4 border py-6 px-8 rounded'>
              <div className='flex items-center gap-4 text-[#333]'>
                <div>
                  <BsBagDash size={35} />
                </div>
                <div className='leading-[20px]'>
                  <h2 className='text-[16px] text-[#333] font-semibold'>Secure Payment</h2>
                  <p className='text-[13px] text-[#666666]'>We are ensure secure payment</p>
                </div>
              </div>

              <div className='flex items-center gap-4 text-[#333]'>
                <div>
                  <TbReportMoney size={35} />
                </div>
                <div className='leading-[20px]'>
                  <h2 className='text-[16px] text-[#333] font-semibold'>Money Back Guarantee</h2>
                  <p className='text-[13px] text-[#666666]'>Any back within 30 days</p>
                </div>
              </div>

              <div className='flex items-center gap-4 text-[#333]'>
                <div>
                  <MdSupportAgent size={35} />
                </div>
                <div className='leading-[20px]'>
                  <h2 className='text-[16px] text-[#333] font-semibold'>Customer Support</h2>
                  <p className='text-[13px] text-[#666666]'>Call or email us 24/7</p>
                </div>
              </div>

              <div className='flex items-center gap-4 text-[#333]'>
                <div>
                  <MdOutlineLocalShipping size={35} />
                </div>
                <div className='leading-[20px]'>
                  <h2 className='text-[16px] text-[#333] font-semibold'>Free Shipping & Returns</h2>
                  <p className='text-[13px] text-[#666666]'>For all orders over $99</p>
                </div>
              </div>

            </div>
          </div>


          {/* Categories */}
          <Categories />

          {/* Offer */}
          <div className='container my-12'>
            <div className='grid lg:grid-cols-2 grid-col-1 lg:gap-6 gap-3'>
              <div className='py-10 px-9' style={{background: `url(${offerBg1.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px !important'}}>
                <h5 className='text-[15px] uppercase text-white font-semibold'>New Collection</h5>
                <h3 className='text-[25px] font-semibold capitalize text-white'>Trendy Watches</h3>
                <p className='text-white font-semibold'>Starting at <span className='text-yellow-400'>$199.00</span> </p>
              </div>
              <div className='py-10 px-9' style={{ background: `url(${offerBg2.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px !important' }}>
                <h5 className='text-[15px] uppercase text-[#333] font-semibold text-center'>New Collection</h5>
                <h3 className='text-[25px] font-semibold capitalize text-[#333] text-center'>Trendy Watches</h3>
                <p className='text-[#333] font-semibold text-center'>Starting at <span className='text-yellow-400'>$199.00</span> </p>
              </div>
            </div>
          </div>

          {/* Products */}
          <Products label='Clothing & Apparel' row={5} />

          <div className='my-12'>
            <Products label='Consumer Electronics' row={5} />
          </div>


          {/* More Offers */}
          <div className='container my-12'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
              <div className='py-10 px-9 flex justify-start items-center' style={{ background: `url(${offerBg3.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px !important' }}>
                <div>
                  <h5 className='text-[15px] uppercase text-white'>SALE UP TO <span className='font-semibold'>40% OFF</span></h5>
                  <h3 className='text-[35px] font-semibold capitalize text-white'>Clothes
                    Collection</h3>
                  <button href="/shop" className='text-[14px] text-white flex items-center gap-2 uppercase border bg-[#333] border-[#333] py-2 px-6 rounded hover:bg-transparent hover:border hover:text-[#333]'>
                    <span>shop now</span>
                    <BsArrowRight size={20} />
                  </button>
                </div>
              </div>
              <div className='space-y-5'>
                <div className='py-10 px-9' style={{ background: `url(${offerBg4.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px !important' }}>
                  <h5 className='text-[15px] uppercase text-[#333] font-semibold'>Mega Sell</h5>
                  <h3 className='text-[25px] font-semibold capitalize text-[#333]'>Women Lifestyle</h3>
                  <p className='text-[#333] font-semibold'>Starting at <span className='text-yellow-400'>$199.00</span> </p>
                  <Link href="/shop" className='mt-3 text-[14px] font-semibold text-[#333] flex items-center gap-2'>
                    <span className='uppercase'>Shop Now</span>
                    <BsArrowRight size={17} />
                  </Link>
                </div>
                <div className='py-10 px-9' style={{ background: `url(${offerBg5.src})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '5px !important' }}>
                  <h5 className='text-[15px] uppercase text-yellow-400 font-semibold'>Best seller</h5>
                  <h3 className='text-[25px] font-semibold capitalize text-white'>Camera Collection</h3>
                  <p className='text-white font-semibold'>Starting at <span className='text-yellow-400'>$199.00</span> </p>
                  <Link href="/shop" className='mt-3 text-[14px] font-semibold text-white flex items-center gap-2'>
                    <span className='uppercase'>Shop Now</span>
                    <BsArrowRight size={17} />
                  </Link>
                </div>
              </div>
            </div>
          </div>


          {/* Products */}
          <Products label='Toys, Kids & Babies' row={5} />


          {/* Our Clients & Latest Blogs */}
          <div className='bg-[#F7F7F7] my-12 py-16'>
            <div className="container">
              <h2 className="text-[20px] font-semibold text-[#333]">Our Clients</h2>

              <div className='mt-10 grid lg:grid-cols-5 grid-cols-2'>
                <Image src={client1.src} width={247} height={94} alt="brands" className='border-r border-b' />
                <Image src={client2.src} width={247} height={94} alt="brands" className='border-r border-b' />
                <Image src={client3.src} width={247} height={94} alt="brands" className='border-r border-b' />
                <Image src={client4.src} width={247} height={94} alt="brands" className='border-r border-b' />
                <Image src={client5.src} width={247} height={94} alt="brands" className='border-b' />
                <Image src={client6.src} width={247} height={94} alt="brands" className='border-r' />
                <Image src={client7.src} width={247} height={94} alt="brands" className='border-r' />
                <Image src={client8.src} width={247} height={94} alt="brands" className='border-r' />
                <Image src={client9.src} width={247} height={94} alt="brands" className='border-r' />
                <Image src={client10.src} width={247} height={94} alt="brands" className='' />
              </div>
            </div>

            <div className='mt-12'>
              <Blogs label="From Our Blog" />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}
