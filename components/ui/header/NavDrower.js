import { Tab } from '@headlessui/react';
import Link from 'next/link';
import { AiOutlineSearch } from "react-icons/ai";


const NavDrower = ({ isDrowerOpen, setIsDrowerOpen }) => {
  return (
    <>
        {
            isDrowerOpen && <div onClick={setIsDrowerOpen} className="lg:hidden block h-full w-full z-[100] absolute top-0 left-0 bg-black opacity-20 transition duration-150"></div>
        }
        
        <div className="lg:hidden block z-[150] absolute top-0 h-screen w-[75%] bg-[#222222] transition duration-150 p-5" style={{ transform: `translateX(${isDrowerOpen ? "0" : "-100%"})` }}>
            <div>
                <form className='w-full border border-gray-700 flex pr-3'>
                    <input type="text" placeholder="Search..." className='flex-1 p-2 focus:outline-none bg-transparent' />
                    <button className="text-white">
                        <AiOutlineSearch size={20} />
                    </button>
                </form>
            </div>

            <div className='text-white mt-5'>
                <Tab.Group>
                    <Tab.List className="flex justify-between">
                        <Tab className={({ selected }) => `text-[14px] font-[600] uppercase border-b-2 ${selected && ' border-[#42a4e8] text-[#42a4e8]'}`}>Main Menu</Tab>
                        <Tab className={({ selected }) => `text-[14px] font-[600] uppercase border-b-2 ${selected && ' border-[#42a4e8] text-[#42a4e8]'}`}>Categories</Tab>
                        
                    </Tab.List>
                    <Tab.Panels className="mt-5">
                        <Tab.Panel className="divide-y divide-[#383636]">
                            <Link href="/" className='text-sm block py-3'>Home</Link>
                            <Link href="/" className='text-sm block py-3'>Shop</Link>
                            <Link href="/" className='text-sm block py-3'>Vendors</Link>
                            <Link href="/" className='text-sm block py-3'>Cart</Link>
                            <Link href="/" className='text-sm block py-3'>Track Order</Link>
                            <Link href="/" className='text-sm block py-3'>Blogs</Link>
                            <Link href="/" className='text-sm block py-3'>About Us</Link>
                            <Link href="/" className='text-sm block py-3'>Contact Us</Link>
                        </Tab.Panel>
                        <Tab.Panel className="divide-y divide-[#383636]">
                            <Link href="/" className='text-sm block py-3'>Electronics</Link>
                            <Link href="/" className='text-sm block py-3'>Home & Screen</Link>
                            <Link href="/" className='text-sm block py-3'>Fashion</Link>
                            <Link href="/" className='text-sm block py-3'>Smart Phones</Link>
                            <Link href="/" className='text-sm block py-3'>Female</Link>
                            <Link href="/" className='text-sm block py-3'>Computers</Link>
                            <Link href="/" className='text-sm block py-3'>Hot Deals</Link>
                            <Link href="/" className='text-sm block py-3'>Decorations</Link>
                            <Link href="/" className='text-sm block py-3'>Baby Toys</Link>
                            <Link href="/" className='text-sm block py-3'>Mans Fashion</Link>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>

        </div>
    </>
  )
}

export default NavDrower;