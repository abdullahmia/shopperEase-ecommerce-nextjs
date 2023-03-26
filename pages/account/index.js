import Layout from "@/components/ui/layout";
import Head from "next/head";
import Link from "next/link";
import { CiHeart, CiImport, CiLocationArrow1, CiLogout, CiReceipt, CiUser } from "react-icons/ci";
import AccountLayout from '../../components/ui/layout/accountLayout';

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Account | ShopperEase</title>
            </Head>
            <main className="container">
                <AccountLayout>
                    <div className="text-[16px] text-[#666] font-[400]">
                        Hello <span className="text-[#333] font-[600] mr-2">Abdullah Mia</span>
                        (not <span className="text-[#333] font-[600]">Abdullah Mia</span> ? <button className="text-[#336699] hover:underline">Logout</button>)
                    </div>

                    <div className="text-[14px] text-[#666666] font-[400] mt-3">
                        From your account dashboard you can view your <Link href="/account/order" className="text-[#336699] hover:underline">recent orders</Link>, manage your <Link href="/account/order" className="text-[#336699] hover:underline">shipping and billing addresses</Link> , and <Link href="/account/order" className="text-[#336699] hover:underline">edit your password and account details.</Link>  
                    </div>


                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-8">
                        <Link href="/account/order" className="group text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiReceipt size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">orders</p>
                        </Link>
                        
                        <Link href="/account/downloads" className="group text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiImport size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">downlaods</p>
                        </Link>
                        
                        <Link href="/account/address" className="group text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiLocationArrow1 size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">addresses</p>
                        </Link>

                        <Link href="/account/address" className="group text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiUser size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">account details</p>
                        </Link>

                        <Link href="/account/address" className="group text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiHeart size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">wishlist</p>
                        </Link>

                        <div className="group cursor-pointer text-[#333] hover:text-[#336699] border flex flex-col justify-center items-center py-16 gap-1">
                            <CiLogout size={55} />
                            <p className="text-[14px] text-[#666] font-[400] uppercase group-hover:text-[#336699]">logout</p>
                        </div>
                    </div>

                </AccountLayout>
            </main>
        </Layout>
    )
}

export default index;