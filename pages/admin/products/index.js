import Head from 'next/head';
import Link from 'next/link';
import { AiOutlineSearch } from 'react-icons/ai';
import Swal from 'sweetalert2';
import DashboardLayout from '../../../components/ui/layout/dashboardLayout';


const index = () => {

    const deleteProductHandler = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Remove!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <DashboardLayout>
            <Head>
                <title>Product | ShopperEase</title>
            </Head>

            <main className='container px-4'>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <div className='text-xs text-[#666] space-x-2'>
                            <Link href="/admin">Dashboard</Link>
                            <span>/</span>
                            <Link href="/products">Products</Link>
                        </div>
                        <h2 className='text-[#333] font-[600] text-2xl'>Products</h2>
                    </div>
                    <div>
                        <Link href="/admin/products/new" className='text-sm font-[600] bg-[#FFD333] px-6 py-2 hover:bg-[#ebbe1b] transition'>New Product</Link>
                    </div>
                </div>


                <div className='mt-4 border'>
                    <div className='p-3'>
                        <div className='flex items-center gap-1 border px-3'>
                            <AiOutlineSearch className='text-[#666]' size={20} />
                            <input type="text" placeholder='Start typing to search for products' className='flex-1 w-full bg-white text-xs focus:outline-none focus:border-none py-3' />
                        </div>
                    </div>

                    <div>
                        <div class="relative overflow-x-auto shadow-md">
                            <table class="w-full text-sm text-left text-gray-500">
                                <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr className='bg-white border-b'>
                                        <th scope="col" class="p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                            </div>
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Product name
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Color
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Category
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Accesories
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Available
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Price
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Weight
                                        </th>
                                        <th scope="col" class="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Apple MacBook Pro 17
                                        </th>
                                        <td class="px-6 py-4">
                                            Silver
                                        </td>
                                        <td class="px-6 py-4">
                                            Laptop
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            3.0 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-2" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-2" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Microsoft Surface Pro
                                        </th>
                                        <td class="px-6 py-4">
                                            White
                                        </td>
                                        <td class="px-6 py-4">
                                            Laptop PC
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $1999
                                        </td>
                                        <td class="px-6 py-4">
                                            1.0 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Magic Mouse 2
                                        </th>
                                        <td class="px-6 py-4">
                                            Black
                                        </td>
                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            $99
                                        </td>
                                        <td class="px-6 py-4">
                                            0.2 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Apple Watch
                                        </th>
                                        <td class="px-6 py-4">
                                            Black
                                        </td>
                                        <td class="px-6 py-4">
                                            Watches
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            $199
                                        </td>
                                        <td class="px-6 py-4">
                                            0.12 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Apple iMac
                                        </th>
                                        <td class="px-6 py-4">
                                            Silver
                                        </td>
                                        <td class="px-6 py-4">
                                            PC
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $2999
                                        </td>
                                        <td class="px-6 py-4">
                                            7.0 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Apple AirPods
                                        </th>
                                        <td class="px-6 py-4">
                                            White
                                        </td>
                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $399
                                        </td>
                                        <td class="px-6 py-4">
                                            38 g
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            iPad Pro
                                        </th>
                                        <td class="px-6 py-4">
                                            Gold
                                        </td>
                                        <td class="px-6 py-4">
                                            Tablet
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $699
                                        </td>
                                        <td class="px-6 py-4">
                                            1.3 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Magic Keyboard
                                        </th>
                                        <td class="px-6 py-4">
                                            Black
                                        </td>
                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            $99
                                        </td>
                                        <td class="px-6 py-4">
                                            453 g
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            Apple TV 4K
                                        </th>
                                        <td class="px-6 py-4">
                                            Black
                                        </td>
                                        <td class="px-6 py-4">
                                            TV
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            $179
                                        </td>
                                        <td class="px-6 py-4">
                                            1.78 lb.
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b hover:bg-gray-50">
                                        <td class="w-4 p-4">
                                            <div class="flex items-center">
                                                <input id="checkbox-table-search-3" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500" />
                                                <label for="checkbox-table-search-3" class="sr-only">checkbox</label>
                                            </div>
                                        </td>
                                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            AirTag
                                        </th>
                                        <td class="px-6 py-4">
                                            Silver
                                        </td>
                                        <td class="px-6 py-4">
                                            Accessories
                                        </td>
                                        <td class="px-6 py-4">
                                            Yes
                                        </td>
                                        <td class="px-6 py-4">
                                            No
                                        </td>
                                        <td class="px-6 py-4">
                                            $29
                                        </td>
                                        <td class="px-6 py-4">
                                            53 g
                                        </td>
                                        <td class="flex items-center px-6 py-4 space-x-3">
                                            <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a>
                                            <button onClick={deleteProductHandler} class="font-medium text-red-600 hover:underline">Remove</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='space-x-2 m-3'>
                            <button className='text-xs text-[#5f5d5d] font-[600] bg-[#EBEDF0] px-5 py-1 capitalize'>previous</button>
                            <button className='text-xs text-[#5f5d5d] font-[600] bg-[#FFD333] px-2 py-1 capitalize'>1</button>
                            <button className='text-xs text-[#5f5d5d] font-[600] bg-[#EBEDF0] px-2 py-1 capitalize'>2</button>
                            <button className='text-xs text-[#5f5d5d] font-[600] bg-[#EBEDF0] px-5 py-1 capitalize'>next</button>
                        </div>
                    </div>

                </div>

            </main>
        </DashboardLayout>
    )
}

export default index