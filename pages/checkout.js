import Head from "next/head";
import { BiChevronRight } from "react-icons/bi";
import CheckoutForm from '../components/checkout';
import Layout from '../components/ui/layout';


export default function checkout() {
    return (
        <Layout>
            <Head>
                <title>Checkout | ShopperEase</title>
            </Head>

            <main className="container py-10">
                {/* Breadcumbs */}
                <div className="lg:block hidden">
                    <div className="flex items-center justify-center">
                        <h2 className="text-[21px] font-[700] text-[#666666]">Shopping Cart</h2>
                        <BiChevronRight size={30} className="text-[#666666]" />
                        <h2 className="text-[21px] font-[700] text-[#336699]">Checkout</h2>
                        <BiChevronRight size={30} className="text-[#666666]" />
                        <h2 className="text-[21px] font-[700] text-[#666666]">Order Complete</h2>
                    </div>
                </div>

                <div>
                    <button className="text-[15px] tracking-wide font-[400] font-poppins text-[#666666]">
                        Returning Customer? <span className="uppercase font-[600] text-[#333333]">Login</span>
                    </button>
                </div>

                <CheckoutForm />

            </main>

        </Layout>
    )
}