import Blogs from "@/components/blogs";
import Layout from "@/components/ui/layout";
import Head from "next/head";
import BlogCategories from '../../components/blogs/categories';

const index = () => {
    return (
        <Layout>
            <Head>
                <title>ShopperEase | Ecommerce</title>
            </Head>

            <main className="container py-16">

                <BlogCategories />

                <Blogs  />

            </main>
        </Layout>
    )
}

export default index