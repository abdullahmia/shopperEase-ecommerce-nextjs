// Import Swiper React components
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import sliceImg1 from '../../public/slide-1.jpg';
import sliceImg2 from '../../public/slide-2.jpg';
import sliceImg3 from '../../public/slide-3.jpg';
import watchImg from '../../public/watch.png';


SwiperCore.use([Autoplay]);


const Banner = () => {
  return (
      <Swiper
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{ delay: 2000 }}
      >
          <SwiperSlide className=''>
            <div className='lg:h-[600px] h-[300px] w-full flex items-center lg:px-0 px-5' style={{ background: `url(${sliceImg1.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className='container leading-none space-y-2'>
                      <p className='text-[16px] uppercase'>ShoperEase online store</p>
                    <h1 className='lg:text-[60px] text-[30px] text-[#333333] font-semibold'>Season Fashion</h1>
                    <h2 className='lg:text-[60px] text-[30px] text-[#333333]'>Collection</h2>
                    <p className='text-[#6666]'>Get free spring online discount over <span className='text-yellow-500'>20%</span></p>
                    <button href="/shop" className='flex items-center gap-2 uppercase border-2 border-[#333] py-3 px-8 rounded hover:bg-[#333] hover:text-white'>
                        <span>discover now</span>
                        <BsArrowRight size={20} />
                    </button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=''>
              <div className='lg:h-[600px] h-[300px] flex items-center lg:px-0 px-5' style={{ background: `url(${sliceImg2.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                  <div className='container flex items-center justify-between'>
                      <div className='lg:block hidden'>
                          <Image src={watchImg} height={400} width={400} alt="Watch" />
                      </div>
                      <div className='leading-none space-y-2'>
                          <p className='text-[28px] uppercase text-[#42a4e8]'>Special Offer</p>
                          <h1 className='lg:text-[80px] text-[30px] font-semibold text-white uppercase'>Big OFfer</h1>
                          <button href="/shop" className='flex items-center gap-2 text-white uppercase border-2 py-3 px-8 rounded hover:bg-[#333] hover:text-white'>
                              <span>discover now</span>
                              <BsArrowRight size={20} />
                          </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className=''>
              <div className='lg:h-[600px] h-[300px] flex items-center lg:px-0 px-5' style={{ background: `url(${sliceImg3.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                  <div className='container flex items-center justify-between'>
                      <div className='lg:block hidden'>
                          <Image src={watchImg} height={400} width={400} alt="Watch" />
                      </div>
                      <div className='leading-none space-y-2'>
                          <p className='text-[18px] uppercase text-[#42a4e8]'>Amazing Scientific Results</p>
                          <h1 className='lg:text-[50px] text-[30px] font-semibold text-[#333] uppercase'>Baby Care Now</h1>
                          <button href="/shop" className='flex items-center gap-2 uppercase border-2 border-[#333] py-3 px-8 rounded hover:bg-[#333] hover:text-white'>
                              <span>discover now</span>
                              <BsArrowRight size={20} />
                          </button>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          
      </Swiper>
  )
}

export default Banner