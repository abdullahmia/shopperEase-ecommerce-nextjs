import Head from "next/head";
import { BiChevronRight } from "react-icons/bi";
import Carts from '../components/cart';

const Cart = () => {
  return (
    <>
        <Head>
            <title>Cart | ShopperEase</title>
        </Head>

        <main className="container py-10">
            {/* Breadcumbs */}
            <div className="lg:block hidden">
              <div className="flex items-center justify-center">
                <h2 className="text-[21px] font-[700] text-[#336699]">Shopping Cart</h2>
                <BiChevronRight size={30} className="text-[#666666]" />
                <h2 className="text-[21px] font-[700] text-[#666666]">Checkout</h2>
                <BiChevronRight size={30} className="text-[#666666]" />
                <h2 className="text-[21px] font-[700] text-[#666666]">Order Complete</h2>
              </div>
            </div>


            <Carts />

        </main>
    
    </>
  )
}

export default Cart;