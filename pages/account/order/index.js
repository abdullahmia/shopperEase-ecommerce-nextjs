import Head from "next/head";
import Link from "next/link";
import { CiReceipt } from "react-icons/ci";
import AccountLayout from '../../../components/ui/layout/accountLayout';

const index = () => {
    return (
        <>
            <Head>
                <title>Orders | ShopperEase</title>
            </Head>

            <main className="container">
                <AccountLayout>
                    <div className="flex items-center">
                        <CiReceipt size={35} />
                        <h2 className="text-[20px] font-[700] text-[#333] capitalize">orders</h2>
                    </div>

                    <div className="mt-10">

                        <div class="relative overflow-x-auto">
                            <table class="w-full text-left">
                                <thead class="text-[16px] font-[600] text-[#333] uppercase bg-gray-50">
                                    <tr>
                                        <th scope="col" class="px-6 py-3">
                                            Order
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Totals
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b text-[14px] font-[400] text-[#666]">
                                        <td class="px-6 py-4">
                                            #2321	
                                        </td>
                                        <td class="px-6 py-4">
                                            August 20, 2021	
                                        </td>
                                        <td class="px-6 py-4">
                                            Processing
                                        </td>
                                        <td class="px-6 py-4">
                                            $121.00 for 1 item	
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link href="/account/order/asdfasafd" className="py-2 px-8 rounded text-[13px] font-[600] text-[#333] border border-[#666] hover:bg-[#333] hover:text-[#fff] transition">
                                                view
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b text-[14px] font-[400] text-[#666]">
                                        <td class="px-6 py-4">
                                            #2321
                                        </td>
                                        <td class="px-6 py-4">
                                            August 20, 2021
                                        </td>
                                        <td class="px-6 py-4">
                                            Processing
                                        </td>
                                        <td class="px-6 py-4">
                                            $121.00 for 1 item
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link href="/account/order/asdfasafd" className="py-2 px-8 rounded text-[13px] font-[600] text-[#333] border border-[#666] hover:bg-[#333] hover:text-[#fff] transition">
                                                view
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b text-[14px] font-[400] text-[#666]">
                                        <td class="px-6 py-4">
                                            #2321
                                        </td>
                                        <td class="px-6 py-4">
                                            August 20, 2021
                                        </td>
                                        <td class="px-6 py-4">
                                            Processing
                                        </td>
                                        <td class="px-6 py-4">
                                            $121.00 for 1 item
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link href="/account/order/asdfasafd" className="py-2 px-8 rounded text-[13px] font-[600] text-[#333] border border-[#666] hover:bg-[#333] hover:text-[#fff] transition">
                                                view
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b text-[14px] font-[400] text-[#666]">
                                        <td class="px-6 py-4">
                                            #2321
                                        </td>
                                        <td class="px-6 py-4">
                                            August 20, 2021
                                        </td>
                                        <td class="px-6 py-4">
                                            Processing
                                        </td>
                                        <td class="px-6 py-4">
                                            $121.00 for 1 item
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link href="/account/order/asdfasafd" className="py-2 px-8 rounded text-[13px] font-[600] text-[#333] border border-[#666] hover:bg-[#333] hover:text-[#fff] transition">
                                                view
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b text-[14px] font-[400] text-[#666]">
                                        <td class="px-6 py-4">
                                            #2321
                                        </td>
                                        <td class="px-6 py-4">
                                            August 20, 2021
                                        </td>
                                        <td class="px-6 py-4">
                                            Processing
                                        </td>
                                        <td class="px-6 py-4">
                                            $121.00 for 1 item
                                        </td>
                                        <td class="px-6 py-4">
                                            <Link href="/account/order/asdfasafd" className="py-2 px-8 rounded text-[13px] font-[600] text-[#333] border border-[#666] hover:bg-[#333] hover:text-[#fff] transition">
                                                view
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                </AccountLayout>
            </main>
        </>
    )
}

export default index;