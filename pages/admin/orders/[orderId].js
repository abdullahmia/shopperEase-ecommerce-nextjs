import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import DashboardLayout from '../../../components/ui/layout/dashboardLayout';
import userImg from '../../../public/admin.jpg';
import productImg from '../../../public/product.jpg';

const index = () => {
    return (
        <DashboardLayout>
            <Head>
                <title>#ASDFDS | ShopperEase</title>
            </Head>

            <main className='container px-4'>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <div className='text-xs text-[#666] space-x-2'>
                            <Link href="/admin">Dashboard</Link>
                            <span>/</span>
                            <Link href="/orders">Orders</Link>
                            <span>/</span>
                            <span>#3432432</span>
                        </div>
                        <h2 className='text-[#333] font-[600] text-2xl'>Orders #3432432</h2>
                    </div>
                    <div>
                        <button className='text-sm font-[600] bg-[#FFD333] px-6 py-2 hover:bg-[#ebbe1b] transition'>Update order</button>
                    </div>
                </div>

                <div className='border-t border-b text-sm text-[#333] py-2 divide-x divide-[#aa9f9f]'>
                    <span className='px-2'>October 7, 2020 at 9:08 pm</span>
                    <span className='px-2'>6 items</span>
                    <span className='px-2'>Total $5,882.00</span>
                    <span className='px-2'>Paid</span>
                </div>

                <div className='mt-4 grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-8 col-span-12'>
                        {/* Order Note */}
                        <div>
                            <textarea name="" id="" cols="30" rows="3" placeholder='Order Note' className='border w-full focus:outline-none text-[#333] p-3 text-sm shadow'></textarea>
                        </div>

                        {/* Order items */}
                        <div className='border bg-white mt-5'>
                            <div className='py-2 px-3 border-b'>
                                <h1 className='text-[18px] font-[600] text-[#333]'>Items</h1>
                            </div>
                            <div className='border-b px-3 py-1 flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Image src={productImg.src} height={40} width={40} alt="Product Image" />
                                    <p className='text-[14px] text-[#333]'>Brandix Brake Kit BDX-750Z370-S</p>
                                </div>   
                                <div className='flex items-center gap-11'>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>$849.00</span>
                                        <span>2</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>   
                            </div>
                            <div className='border-b px-3 py-1 flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Image src={productImg.src} height={40} width={40} alt="Product Image" />
                                    <p className='text-[14px] text-[#333]'>Brandix Brake Kit BDX-750Z370-S</p>
                                </div>
                                <div className='flex items-center gap-11'>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>$849.00</span>
                                        <span>2</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className='border-b px-3 py-1 flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Image src={productImg.src} height={40} width={40} alt="Product Image" />
                                    <p className='text-[14px] text-[#333]'>Brandix Brake Kit BDX-750Z370-S</p>
                                </div>
                                <div className='flex items-center gap-11'>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>$849.00</span>
                                        <span>2</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className='border-b px-3 py-1 flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <Image src={productImg.src} height={40} width={40} alt="Product Image" />
                                    <p className='text-[14px] text-[#333]'>Brandix Brake Kit BDX-750Z370-S</p>
                                </div>
                                <div className='flex items-center gap-11'>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>$849.00</span>
                                        <span>2</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className='space-y-3 my-3'>
                                <div className='flex items-center justify-between px-3  '>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>Subtotal</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                                <div className='flex items-center justify-between px-3  '>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>Store Credit</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                                <div className='flex items-center justify-between px-3  '>
                                    <p className="text-[14px] text-[#333] space-x-8">
                                        <span>Shipping</span>
                                    </p>
                                    <p className="text-[14px] text-[#333]">
                                        <span>$849.00</span>
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center justify-between px-3 py-4 border-t'>
                                <p className="text-[14px] text-[#333] space-x-8">
                                    <span>Total</span>
                                </p>
                                <p className="text-[14px] text-[#333]">
                                    <span>$849.00</span>
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className='lg:col-span-4 col-span-12 space-y-5'>
                        {/* Order Status */}
                        <div className='p-4 bg-white border'>
                            <h2 className='text-[16px] font-[400] text-[#333]'>Order Status</h2>
                            <select className='border w-full focus:outline-none py-2 bg-white px-2 mt-1'>
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirmed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Complete">Complete</option>
                            </select>
                        </div>

                        {/* Order Status */}
                        <div className='p-4 bg-white border'>
                            <h2 className='text-[16px] font-[400] text-[#333]'>Customer Information</h2>
                            <div className='flex items-center gap-3 mt-3'>
                                <Image src={userImg.src} width={40} height={40} className="rounded-full" alt="Customer" />
                                <div className=''>
                                    <h2 className='text-[15px] text-[#333]'>Abdullah Mia</h2>
                                    <p className='text-xs text-[#666]'>01775748710</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Person */}
                        <div className='p-4 bg-white border'>
                            <h2 className='text-[16px] font-[400] text-[#333]'>Contact person</h2>
                            <div className='mt-2'>
                                <p className='text-sm text-[#333]'>Jessica Moore</p>
                                <p className='text-sm text-blue-500'>moore@example.com</p>
                                <p className='text-sm text-[#666]'>+38 (094) 730-24-25</p>
                            </div>
                        </div>

                        {/* Shipping Address */}
                        <div className='p-4 bg-white border'>
                            <h2 className='text-[16px] font-[400] text-[#333]'>Shipping Address</h2>
                            <div className='mt-2'>
                                <p className='text-sm text-[#333]'>Jessica Moore</p>
                                <p className='text-sm text-[#333]'>Random Federation</p>
                                <p className='text-sm text-[#333]'>115302, Moscow</p>
                                <p className='text-sm text-[#333]'>ul. Varshavskaya, 15-2-178</p>
                            </div>
                        </div>
                    </div>
                </div>


            </main>
        </DashboardLayout>
    )
}

export default index