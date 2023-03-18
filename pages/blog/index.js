import Blogs from "@/components/blogs";
import Head from "next/head";
import BlogCategories from '../../components/blogs/categories';

const index = () => {
    return (
        <>
            <Head>
                <title>ShopperEase | Ecommerce</title>
            </Head>

            <main className="container py-16">

                <BlogCategories />

                <Blogs  />

            </main>
        </>
    )
}

export default index