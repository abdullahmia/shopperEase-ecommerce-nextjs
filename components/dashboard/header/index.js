import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from "next/link";
import { Fragment } from 'react';
import adminImg from '../../../public/admin.jpg';

const index = () => {

    return (
        <nav class="bg-white border-b border-gray-200 fixed z-30 w-full">
            <div class="px-3 lg:px-5 lg:pl-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center justify-start">
                        <button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="lg:hidden mr-2 text-gray-600 hover:text-gray-900 cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 rounded">
                            <svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                            </svg>
                            <svg id="toggleSidebarMobileClose" class="w-6 h-6 hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                            </svg>
                        </button>
                        <Link href="/admin" class="text-xl font-bold flex items-center lg:ml-2.5">
                            <img src="https://portotheme.com/html/wolmart/assets/images/demos/demo10/header-logo.png" className="w-[135px] h-[40px]" alt="logo" />
                        </Link>

                    </div>
                    <div class="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="w-full flex items-center gap-2 p-2 text-sm hover:bg-gray-100">
                                    <Image src={adminImg.src} height={35} width={35} alt="admin" className='rounded' />
                                    <div className='text-start'>
                                        <h2 className='text-[#333]'>Abdullah Mia</h2>
                                        <p className='text-xs text-[#666]'>abdullahbag1971@gmail.com</p>
                                    </div>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 top-[45px] mt-2 w-56 origin-top-right divide-y divide-gray-100 bg-white shadow-lg">
                                    <div className="">
                                        <Link href="/admin/profile" className='block p-3 text-[14px] text-[#333]'>Profile</Link>
                                        <Link href="/admin/profile/settings" className='block p-3 text-[14px] text-[#333]'>Settings</Link>
                                        <hr />
                                        <button className='block p-3 text-[14px] text-[#333]'>Logout</button>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default index