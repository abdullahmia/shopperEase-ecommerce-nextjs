import Head from 'next/head';
import Link from 'next/link';
import DashboardLayout from '../../../../components/ui/layout/dashboardLayout';


const NewCoupon = () => {
    return (
        <DashboardLayout>
            <Head>
                <title>New Coupon | ShopperEase</title>
            </Head>

            <main className='container px-4'>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <div className='text-xs text-[#666] space-x-2'>
                            <Link href="/admin">Dashboard</Link>
                            <span>/</span>
                            <Link href="/admin/coupon">Coupon</Link>
                            <span>/</span>
                            <span>New Coupon</span>
                        </div>
                        <h2 className='text-[#333] font-[600] text-2xl'>Coupon</h2>
                    </div>
                    <div>
                        <Link href="/admin/coupon/new" className='text-sm font-[600] bg-[#FFD333] px-6 py-2 hover:bg-[#ebbe1b] transition'>Save</Link>
                    </div>
                </div>

                <div className='mt-5 grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-8 col-span-12'>
                        <div className='p-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Basic information</h2>

                            <div className='mt-6 space-y-4'>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Code</label>
                                    <input type="text" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Type</label>
                                    <div>
                                        <div className='flex items-center space-x-2'>
                                            <input type="radio" name='type' id='percentage' className='focus:outline-none' />
                                            <label htmlFor="percentage" className='text-[#333] text-[14px] font-[500]'>Percentage</label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <input type="radio" name='type' id='Fixedamount' className='focus:outline-none' />
                                            <label htmlFor="Fixedamount" className='text-[#333] text-[14px] font-[500]'>Fixed Amount</label>
                                        </div>
                                        <div className='flex items-center space-x-2'>
                                            <input type="radio" name='type' id='freeShipping' className='focus:outline-none' />
                                            <label htmlFor="freeShipping" className='text-[#333] text-[14px] font-[500]'>Free shipping</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Discount value</label>
                                    <input type="text" value={"10.00"} className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Uses limit</label>
                                    <input type="text" value={100} className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>

                            </div>
                        </div>


                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='p-4 bg-white border space-y-2'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Status</h2>
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <input type="radio" name='status' id='enabled' className='focus:outline-none' />
                                    <label htmlFor="enabled" className='text-[#333] text-[14px] font-[500]'>Enabled</label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input type="radio" name='status' id='disabled' className='focus:outline-none' />
                                    <label htmlFor="disabled" className='text-[#333] text-[14px] font-[500]'>Disabled</label>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 bg-white border space-y-2 mt-5'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Schedule</h2>
                            <p className='text-[14px] text-[#666]'>Use these settings to limit the coupon expiration date.</p>

                            <div className="mt-5">
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Start date</label>
                                    <input type="date" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>End date</label>
                                    <input type="date" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </main>
        </DashboardLayout>
    )
}

export default NewCoupon