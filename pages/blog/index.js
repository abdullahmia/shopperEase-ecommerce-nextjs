import Blogs from "@/components/blogs/Blogs";
import Head from "next/head";
import BlogCategories from '../../components/blogs/categories/Categories';

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