import Categories from "@/components/category/Categories";
import Filter from "@/components/product-filter/Filter";
import Products from "@/components/products/Products";
import Head from "next/head";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import shopBanner from '../public/shopBanner.jpg';

export default function Shop () {
    return (
       <>
            <Head>
                <title>Shop | ShopperEase</title>
            </Head>

            <main className="container">
                {/* Breadcumbs */}
                <div className="text-[13px] text-[#333] flex items-center gap-2 py-3">
                    <Link href="/">Home</Link>
                    <MdKeyboardArrowRight size={15} />
                    <p>Shop</p>
                </div>

                {/* { Offer } */}
                <div className="p-16" style={{ background: `url(${shopBanner.src})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div>
                        <h3 className="text-[26px] font-[600] text-[#333]">Accessories Collection</h3>
                        <h2 className="text-[40px] font-[600] text-[#fff] uppercase mb-3">SMART WRIST WATCHES</h2>
                        <Link href="/shop" className="bg-[#333] text-white font-semibold uppercase px-8 py-3 rounded">discover now</Link>
                    </div>
                </div>

                {/* Categories */}
                <Categories />


                {/* Prodicts with filters */}
                <div className="py-8 mt-12 border-t">
                    <div className="grid lg:grid-cols-12 gap-4">
                        {/* Product Filter */}
                        <div className="col-span-3">
                            <Filter />
                        </div>

                        {/* Products */}
                        <div className="col-span-9">
                            <Products row={4} />
                        </div>
                    </div>
                </div>

            </main>
       
       </>
    )
}