import ProductDetail from "@/components/product/ProductDetail";
import Products from "@/components/products";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar, AiOutlineShopping, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BsBagCheck, BsInstagram, BsPinterest, BsTruck } from "react-icons/bs";
import { FaFacebookF } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdPayment } from "react-icons/md";
import addImg from '../../public/ad.jpg';
import productImg from '../../public/product.jpg';

const Product = () => {
  return (
    <>
        <Head>
            <title>Product Details</title>
        </Head>
        <main className="container pb-12">
            {/* Breadcumbs */}
            <div className="text-[13px] text-[#333] flex items-center gap-2 py-3">
                <Link href="/">Home</Link>
                <MdKeyboardArrowRight size={15} />
                <p>Products</p>
            </div>


            <div className="mt-5">
                <div className="grid grid-cols-12 gap-8">
                    <div className="lg:col-span-9 col-span-12 grid grid-cols-12">
                        <div className="lg:col-span-5 col-span-12 space-y-2">
                            <Image src={productImg.src} width={800} height={900} alt="Product Image" />
                            <div className="w-full gap-2 flex overflow-x-scroll">
                                <Image src={productImg.src} width={100} height={90} alt="Product Image" />
                                <Image src={productImg.src} width={100} height={90} alt="Product Image" />
                                <Image src={productImg.src} width={100} height={90} alt="Product Image" />
                                <Image src={productImg.src} width={100} height={90} alt="Product Image" />
                            </div>
                        </div>
                        <div className="lg:col-span-7 col-span-12">
                            <div className="p-5 space-y-5">
                                <h2 className="text-[24px] text-[#333] font-[600]">Electronics Black Wrist Watch</h2>

                                <div>
                                    <p className="text-[13px] font-[400] text-[#666666]">Category: Electronics</p>
                                    <p className="text-[13px] font-[400] text-[#666666]">SKU: #AFDASDF435</p>
                                </div>

                                <h2 className="text-[30px] text-[#333] font-[600]">$451</h2>
                                <p className="flex items-center justify-start text-yellow-400">
                                    <span><AiFillStar size={15} /></span>
                                    <span><AiFillStar size={15} /></span>
                                    <span><AiFillStar size={15} /></span>
                                    <span><AiFillStar size={15} /></span>
                                    <span><AiFillStar size={15} /></span>
                                    <span className="ml-1 text-[12px] text-[#a7a2a2]">(3 Reviews)</span>
                                </p>
                                <p className="text-[13px] font-[400] text-[#666666]">Ultrices eros in cursus turpis massa cursus mattis. Ultrices eros in cursus turpis massa cursus mattis. Ultrices eros in cursus turpis massa cursus mattis</p>


                                <div className="p-4 mt-6 border-t">
                                    <div className="flex items-center gap-8">
                                        <p className="text-[15px] text-[#333333]">Size: </p>
                                        <div className="space-x-3 flex items-center flex-wrap">
                                            <span className="text-[13px] text-[#333] cursor-pointer border px-3 py-1 rounded hover:border-[#336699]">Small</span>
                                            <span className="text-[13px] text-[#333] cursor-pointer border px-3 py-1 rounded hover:border-[#336699]">Medium</span>
                                            <span className="text-[13px] text-[#333] cursor-pointer border px-3 py-1 rounded hover:border-[#336699]">Large</span>
                                            <span className="text-[13px] text-[#333] cursor-pointer border px-3 py-1 rounded hover:border-[#336699]">Extra Large</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center flex-wrap gap-5">
                                    <div>
                                        <input type="number" defaultValue={1} min={1} className="w-32 py-3 border border-[#EEEEEE] rounded focus:ring-0 focus:outline-none focus:border-[#EEEEEE" />
                                    </div>
                                    <div className="">
                                        <button className="w-full text-[#666666] flex items-center justify-center gap-2 border-[#EEEEEE] bg-[#EEEEEE] px-6 py-3 rounded">
                                            <AiOutlineShopping size={20} />
                                            <span className="text-[15px] font-[600] uppercase">Add to cart</span>
                                        </button>
                                    </div>
                                </div>


                                {/* Social Icons */}

                                <div className="flex gap-2 pt-3 mt-6">
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
                        </div>
                    </div>
                    <div className="lg:col-span-3 col-span-12">
                        <div className="border p-5 rounded divide-y">
                            <div className="flex items-center gap-5 pb-4">
                                <BsTruck size={35} />
                                <div>
                                    <h2 className="text-[15px] font-[600] text-[#333333] capitalize">free shipping & returns</h2>
                                    <p className="text-[13px] font-[400] text-[#999999]">For all orders over $99</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 py-4">
                                <BsBagCheck size={35} />
                                <div>
                                    <h2 className="text-[15px] font-[600] text-[#333333] capitalize">Secure Payment</h2>
                                    <p className="text-[13px] font-[400] text-[#999999]">We ensure secure payment</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 pt-4">
                                <MdPayment size={35} />
                                <div>
                                    <h2 className="text-[15px] font-[600] text-[#333333] capitalize">Money Back Guarantee</h2>
                                    <p className="text-[13px] font-[400] text-[#999999]">Any back within 30 days</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full h-56 rounded mt-7 flex items-end p-5' style={{ background: `url(${addImg.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                            <div className="text-white font-semibold">
                                <h2 className="text-3xl">40 % OFF</h2>
                                <p>ULTIMATE SALE</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Product Details */}
            <div className="mt-10">
                <ProductDetail />
            </div>


            {/* Related Products */}
            <div className="mt-10">
                <Products label="Related Products" row={5} />
            </div>
        </main>
    </>
  )
}

export default Product;