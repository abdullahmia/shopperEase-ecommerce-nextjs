import Layout from "@/components/ui/layout";
import Head from "next/head";
import Link from "next/link";
import { CiImport } from "react-icons/ci";
import AccountLayout from '../../../components/ui/layout/accountLayout';

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Downloads | ShopperEase</title>
            </Head>

            <main className="container">
                <AccountLayout>
                    <div className="flex items-center gap-2">
                        <CiImport size={25} />
                        <h2 className="text-[16px] font-[700] text-[#333] capitalize">Downloads</h2>
                    </div>

                    <div className="flex flex-col items-start gap-2 mt-3">
                        <p className="text-[14px] font-[400] text-[#666]">No downloads available yet.</p>
                        <Link href="/account/order/asdfasafd" className="py-2 px-8 text-[13px] font-[600] bg-[#333] text-[#fff] uppercase">
                            
                            go shop
                        </Link>
                    </div>
                </AccountLayout>
            </main>

        </Layout>
    )
}

export default index