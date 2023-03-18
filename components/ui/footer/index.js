import Image from "next/image";
import Link from "next/link";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram, BsPinterest } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa';
import fotterLogo from '../../../public/footer-logo.png';
import payment from '../../../public/payment.png';

const Footer = () => {
    return (
        <div className="bg-[#141414] pt-6 lg:px-0 px-5">
            <div className="container">
                <div className="grid lg:grid-cols-4 grid-cols-1 gap-10 py-10">
                    <div className="space-y-2">
                        <Image src={fotterLogo.src} width={144} height={45} alt="Footer Logo" />
                        <p className="text-[#999999] text-[13px] font-[500]">Got Question? Call us 24/7</p>
                        <h4 className="font-semibold text-[20px] text-white hover:text-[#42a4e8]">1-800-570-7777</h4>
                        <p className="text-[#666666] text-[13px]">Register now to get updates on pronot get up icons & coupons ster now toon. </p>
                        <div className="flex gap-2 pt-3">
                            <p className="bg-blue-600 text-white p-2 rounded-full">
                                <FaFacebookF size={15} />
                            </p>
                            <p className="bg-[#00ADEF] text-white p-2 rounded-full">
                                <AiOutlineTwitter size={15} />
                            </p>
                            <p className="bg-[#CC0001] text-white p-2 rounded-full">
                                <BsInstagram size={15} />
                            </p>
                            <p className="bg-[#2C567E] text-white p-2 rounded-full">
                                <AiOutlineYoutube size={15} />
                            </p>
                            <p className="bg-[#F96A02] text-white p-2 rounded-full">
                                <BsPinterest size={15} />
                            </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[15px] text-white font-semibold uppercase">Company</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">About Us</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Team Member</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Career</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Contact Us</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Affilate</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Order History</Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-[15px] text-white font-semibold uppercase">my account</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Track My Order</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">View Cart</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Sign In</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Help</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">My Wishlist</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Privacy Policy</Link>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-[15px] text-white font-semibold uppercase">customer service</h2>
                        <div className="flex flex-col gap-2 mt-4">
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Payment Methods</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Money-back guarantee!</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Product Returns</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Support Center</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Shipping</Link>
                            <Link href="/" className="text-[#978989] text-[14px] hover:text-white">Term & Condiditions</Link>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between flex-wrap py-6 border-t border-[#454545]">
                    <div>
                        <p className="font-[400] text-[13px] text-[#666666]">Copyright © 2021 Wolmart Store. All Rights Reserved.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <p className="font-[400] text-[13px] text-[#666666]">We&apos;re using safe payment for</p>
                        <Image src={payment.src} width={159} height={25} alt="payment" />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer;