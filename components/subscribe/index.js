import { BsArrowRight } from 'react-icons/bs';
import { SlEnvolope } from 'react-icons/sl';

const Subscribe = () => {
  return (
    <div className="bg-[#42A4E8] p-5">
        <div className="container">
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className='text-white flex flex-wrap items-center gap-4  '>
                    <SlEnvolope size={55} />
                    <div>
                        <h2 className='text-[16px] font-semibold uppercase'>SUBSCRIBE TO OUR NEWSLETTER</h2>
                        <p className='text-[13px]'>Get all the latest information on Events, Sales and Offers.</p>
                    </div>
                </div>

                <div className='flex items-center  gap-3'>
                    <input type="text" placeholder='Your E-mail Address' className='w-full px-6 py-2 rounded focus:outline-none' />
                    <button className='text-white flex items-center gap-2 uppercase font-semibold'>
                        <span >subscribe</span>
                        <BsArrowRight size={20} />
                    </button>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Subscribe;