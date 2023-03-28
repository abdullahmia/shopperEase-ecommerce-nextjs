import Layout from "@/components/ui/layout";
import Head from "next/head";
import AccountLayout from '../../../components/ui/layout/accountLayout';

const index = () => {
    return (
        <Layout>
            <Head>
                <title>Account Settings</title>
            </Head>

            <main className="container">
                <AccountLayout>
                    <div>
                        <h2 className="text-[18px] font-[600] text-[#333]">Password change</h2>
                        <form className="mt-6">
                            <div className="mb-5">
                                <label className="block text-[14px] font-[400] text-[#666] mb-1">Current Password </label>
                                <input type="text" className="text-[#333] border p-2 focus:outline-none" />
                            </div>

                            <div className="mb-5">
                                <label className="block text-[14px] font-[400] text-[#666] mb-1">New Password</label>
                                <input type="text" className="text-[#333] border p-2 focus:outline-none" />
                            </div>

                            <div className="mb-5">
                                <label className="block text-[14px] font-[400] text-[#666] mb-1">Confirm Password</label>
                                <input type="text" className="text-[#333] border p-2 focus:outline-none" />
                            </div>

                            <button className="bg-[#333] text-white font-[500] uppercase py-2 px-10">
                                save
                            </button>

                        </form>
                    </div>
                </AccountLayout>
            </main>
        </Layout>
    )
}

export default index