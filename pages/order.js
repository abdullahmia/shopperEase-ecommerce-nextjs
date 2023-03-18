import Head from "next/head";
import { BiCheck, BiChevronRight } from "react-icons/bi";

const order = () => {
    return (
        <>
            <Head>
                <title>Order Complete #ADFASDFASDF</title>
            </Head>

            <main className="container py-12">
                {/* Breadcumbs */}
                <div className="lg:block hidden mt-5">
                    <div className="flex items-center justify-center">
                        <h2 className="text-[21px] font-[700] text-[#666666]">Shopping Cart</h2>
                        <BiChevronRight size={30} className="text-[#666666]" />
                        <h2 className="text-[21px] font-[700] text-[#666666]">Checkout</h2>
                        <BiChevronRight size={30} className="text-[#666666]" />
                        <h2 className="text-[21px] font-[700] text-[#336699]">Order Complete</h2>
                    </div>
                </div>

                <div className="border-2 flex lg:items-center items-start gap-2 justify-center py-8 mt-10">
                    <BiCheck size={35} />
                    <h2 className="text-[20px] text-[#333] font-[700]">Thank you. Your order has been received.</h2>
                </div>

                <div className="flex lg:flex-row flex-col items-center justify-between mt-10 lg:fspace-y-4">
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">order number</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">950</h2>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">Status</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">On hold</h2>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">Date</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">April 27, 2021</h2>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">Total</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">950</h2>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">Total</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">$1,646.36</h2>
                    </div>
                    <div className="text-center">
                        <h3 className="text-[18px] font-[400] text-[#666] capitalize">Payment method</h3>
                        <h2 className="text-[18px] font-[700] text-[#333] capitalize">Direct bank transfor</h2>
                    </div>
                </div>


                <div className="mt-10">
                    <h2 className="text-[20px] text-[#333] font-[700] uppercase">ORDER DETAILS</h2>

                    <div className="p-8 border mt-8">
                        <h2 className="text-[18px] text-[#333] font-[700]">Product</h2>
                        <hr className="my-2" />
                        
                        <div className="space-y-2 mt-5">
                            <div className="flex items-center justify-between">
                                <p className="text-[14px] font-[400] text-[#336699] hover:underline">
                                    <span>Palm Print Jacket</span>
                                    <span className="text-[#333] font-[700] ml-3">x 1</span>
                                </p>
                                <p className="text-[14px] font-[400] text-[#666] hover:underline">
                                    $40.00
                                </p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[14px] font-[400] text-[#336699] hover:underline">
                                    <span>Brown Backpack</span>
                                    <span className="text-[#333] font-[700] ml-3">x 1</span>
                                </p>
                                <p className="text-[14px] font-[400] text-[#666] hover:underline">
                                    $40.00
                                </p>
                            </div>
                            
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] font-[700] text-[#333]">
                                        Subtotal:
                                    </p>
                                    <p className="text-[16px] font-[700] text-[#666]">
                                        $40.00
                                    </p>
                                </div>
                                <hr className="my-2" />
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] font-[700] text-[#333]">
                                        Shipping:
                                    </p>
                                    <p className="text-[16px] font-[700] text-[#666]">
                                        Flat rate
                                    </p>
                                </div>
                                <hr className="my-2" />
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] font-[700] text-[#333]">
                                        Payment method:
                                    </p>
                                    <p className="text-[16px] font-[700] text-[#666]">
                                        Direct bank transfor
                                    </p>
                                </div>
                                <hr className="my-2" />
                                <div className="flex items-center justify-between">
                                    <p className="text-[16px] font-[700] text-[#333]">
                                        Total:
                                    </p>
                                    <p className="text-[18px] font-[700] text-[#000]">
                                        $40.00
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </main>
        </>
    )
}

export default order;