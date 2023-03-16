import Link from "next/link";
import { useState } from "react";
import { AiOutlineHeart, AiOutlineMenu, AiOutlineUnorderedList } from "react-icons/ai";
import { BiHomeAlt2, BiShoppingBag } from 'react-icons/bi';
import { BsChevronDown, BsTelephone } from 'react-icons/bs';
import { CiLocationOn, CiUser } from 'react-icons/ci';
import { MdLocalOffer } from 'react-icons/md';
import CartDrower from '../../cart/cartDrower';
import Search from "./Search";


const Header = ({ toggoleDrower }) => {
    const [cartOpen, setCartOpen] = useState(false);
  return (
    <header className="">
        {/* Header Top */}
        <div className="bg-[#F5F6F8] py-3 lg:px-0 px-5">
            <div className="container flex justify-between items-center">
                <div>
                    <p className="text-[11px] text-[#333333]">WELCOME TO ShopperEase STORE</p>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block space-x-4">
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            Blog
                        </Link>
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            Contact Us
                        </Link>
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            My Account
                        </Link>
                    </div>
                    <button className="flex items-center gap-1 text-[13px] text-[#333333]">
                        <CiUser size={18} />
                        Sign In/Register
                    </button>
                </div>
            </div>
        </div>

        {/* Header Brand */}
        <div className="container lg:px-0 px-5 py-3 flex items-center justify-between">
            <div className="block lg:hidden">
                <button onClick={toggoleDrower} className="text-gray-600">
                    <AiOutlineMenu size={25} />
                </button>
            </div>
            <div className="hidden lg:block">
                <Search />
            </div>
            <div>
                  <img src="https://portotheme.com/html/wolmart/assets/images/demos/demo10/header-logo.png" className="w-[145px] h-[45px]" alt="logo" />
            </div>
            <div className="flex items-center gap-4">
                <div className="hidden lg:block">
                    <div className="flex items-center gap-2 pr-5">
                        <BsTelephone size={25} />
                        <p className="flex flex-col">
                            <span className="text-sm">Live Chat or:</span>
                            <span className="text-1xl text-[#333333] font-semibold hover:text-[#42a4e8] cursor-pointer">0(800)123-456</span>
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-6 border-l pl-5">
                    <Link href="/wishlist" className="text-[#333] hidden lg:block hover:text-[#42a4e8]">
                        <AiOutlineHeart size={33} className="m-auto" />
                        <span className="text-sm">Wishlist</span>
                    </Link>
                    <button onClick={() => setCartOpen(true)} className="text-[#333] hover:text-[#42a4e8]">
                        <BiShoppingBag size={33} className="m-auto" />
                        <span className="text-sm hidden lg:block">Cart</span>
                    </button>
                    <CartDrower open={cartOpen} setOpen={setCartOpen} />
                </div>

            </div>
        </div>

        {/* Navbar */}
        <nav className="lg:block hidden bg-[#333333] text-white">
            <div className="container flex items-center gap-6">
                <div className="group relative bg-[#42A4E8] py-3 px-4 cursor-pointer">
                    <div className="flex justify-between items-center gap-4">
                        <AiOutlineUnorderedList size={25} />
                        <span>Browse Categories</span>
                        <BsChevronDown size={15} />
                    </div>
                    
                    <ul className="absolute left-0 top-full z-50 w-full bg-white text-[#5c5959] shadow invisible opacity-0 group-hover:visible group-hover:opacity-100 divide-y">
                        <li className="py-4 px-3 flex relative group">
                            <Link href="/" className="flex gap-2 hover:text-[#42a4e8]">
                                <BiHomeAlt2 size={20} />
                                <span className="text-sm block">Fashion</span>
                            </Link>
                        
                        </li>

                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Home & Screen</span>
                        </Link>

                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Electroics</span>
                        </Link>
                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Health & Beauty</span>
                        </Link>
                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Gift Idea</span>
                        </Link>
                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Cooking</span>
                        </Link>

                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Smart Phone</span>
                        </Link>

                        <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
                            <BiHomeAlt2 size={20} />
                            <span className="text-sm">Computers</span>
                        </Link>


                    </ul>
                </div>

                <div className="flex-1 flex justify-between items-center">
                    <div className="space-x-8 text-[14px] font-[600]">
                        <Link href="/" >Home</Link>
                        <Link href="/shop">Shop</Link>
                        <Link href="/cart">Cart</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>
                    </div>
                    <div className="flex items-center gap-3 text-[14px]">
                        <Link href="/track-order" className="flex items-center gap-1">
                            <CiLocationOn size={25} />
                            <span>Track Order</span>
                        </Link>
                        <Link href="/track-order" className="flex items-center gap-1">
                            <MdLocalOffer size={25} />
                            <span>Daily Deals</span>
                        </Link>
                    </div>                    
                </div>
            </div>
        </nav>

    </header>
  )
}

export default Header;