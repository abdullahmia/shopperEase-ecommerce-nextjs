import Layout from "@/components/ui/layout";
import Head from "next/head";
import { CiLocationArrow1 } from "react-icons/ci";
import EditAddressModal from '../../../components/modals/editAddress';
import AccountLayout from '../../../components/ui/layout/accountLayout';


const index = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Address | ShopperEase
                </title>
            </Head>

            <main className="container">
                <AccountLayout>
                    <div className="flex items-center gap-2">
                        <CiLocationArrow1 size={25} />
                        <h2 className="text-[16px] font-[700] text-[#333] capitalize">Addresses</h2>
                    </div>
                    <div className="flex flex-col items-start gap-2 mt-3">
                        <p className="text-[13px] font-[400] text-[#666]">The following addresses will be used on the checkout page by default.</p>
                    </div>

                    <div className="my-6">
                        <table>
                            <tbody className="">
                                <tr>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Name
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        Abdullah Mia
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Company
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        BlackSlash Programmers
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Address
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        100/A Bashiruddin Raod
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Country
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        Bangladesh
                                    </th>
                                </tr>
                                <tr>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        City
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        Dhaka
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        State
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        Dhaka
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Post Code
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        1208
                                    </th>
                                </tr>
                                <tr className=''>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#666] pr-32' >
                                        Phone
                                    </th>
                                    <th scope="row" className='py-1 text-start text-[13px] font-[400] text-[#333]' >
                                        01775748710
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <EditAddressModal />

                </AccountLayout>
            </main>
        </Layout>
    )
}

export default index;