import { AiOutlineShopping, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCategory, BiCategoryAlt, BiUser } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineArticle } from 'react-icons/md';
import { RiCoupon3Line } from 'react-icons/ri';
import NavLink from '../../../utils/link';

const index = () => {
    return (
        <aside class="bg-[#3D464D] fixed hidden z-20 h-full top-0 left-0 px-5 py-8 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75">

            <div class="flex flex-col justify-between flex-1 mt-10">
                <nav class="-mx-3 space-y-6 ">
                    <div class="space-y-3 ">
                        <label class="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analytics</label>

                        <NavLink href="/admin" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                            </svg>

                            <span class="mx-2 text-sm font-medium">Dashboard</span>
                        </NavLink>
                    </div>

                    <div class="space-y-3 ">
                        <label class="px-3 text-xs uppercase text-gray-400">ecommerce content</label>

                        <NavLink href="/admin/products" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <AiOutlineShopping />
                            <span class="mx-2 text-sm font-medium">Products</span>
                        </NavLink>

                        <NavLink href="/admin/products/category" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <BiCategoryAlt />
                            <span class="mx-2 text-sm font-medium">Categories</span>
                        </NavLink>

                        <NavLink href="/admin/orders" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <AiOutlineShoppingCart />
                            <span class="mx-2 text-sm font-medium">Orders</span>
                        </NavLink>

                    </div>

                    <div class="space-y-3 ">
                        <label class="px-3 text-xs uppercase text-gray-400">Marketing</label>

                        <NavLink href="/admin/coupon" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <RiCoupon3Line />
                            <span class="mx-2 text-sm font-medium">Coupon</span>
                        </NavLink>
                    </div>

                    <div class="space-y-3 ">
                        <label class="px-3 text-xs uppercase text-gray-400">blogging content</label>

                        <NavLink href="/admin/blogs" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <MdOutlineArticle />
                            <span class="mx-2 text-sm font-medium">Blogs</span>
                        </NavLink>

                        <NavLink href="/admin/blogs/category" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <BiCategory />
                            <span class="mx-2 text-sm font-medium">Categories</span>
                        </NavLink>

                    </div>

                    <div class="space-y-3 ">
                        <label class="px-3 text-xs uppercase text-gray-400">activites</label>

                        <NavLink href="/admin/customer" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <BiUser />
                            <span class="mx-2 text-sm font-medium">Customer</span>
                        </NavLink>

                        <NavLink href="/admin/messages" klassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded hover:bg-gray-600" activeClassName="flex items-center px-3 py-2 text-gray-100 transition-colors duration-300 transform rounded bg-gray-600">
                            <HiOutlineMail />
                            <span class="mx-2 text-sm font-medium">Messages</span>
                        </NavLink>
                    </div>
                </nav>
            </div>
        </aside>
    )
}

export default index