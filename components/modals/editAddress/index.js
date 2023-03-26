import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BsArrowRight } from 'react-icons/bs';

export default function EditAddressModal() {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                    <button
                    type="button"
                    onClick={openModal}
                    className="flex items-center gap-1 text-[14px] text-[#336699] font-[600] uppercase"
                >
                    EDIT YOUR BILLING ADDRESS
                    <BsArrowRight size={22} />
                </button>            
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-[700px] transform overflow-hidden bg-white p-10 py-16 text-left align-middle shadow-xl transition-all">
                                    <div>
                                        <h2 className='text-[16px] font-[700] text-[#333]'>Edit Address</h2>
                                        <form className="mt-4">
                                            <div className='mb-3 flex gap-4 justify-between items-center lg:flex-nowrap flex-wrap'>
                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Name</label>
                                                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Company</label>
                                                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                                                </div>
                                            </div>

                                            <div className='mb-3 flex gap-4 justify-between items-center lg:flex-nowrap flex-wrap'>
                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Address</label>
                                                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Country</label>

                                                    <select className='w-full' style={{ border: "0.5px solid #d3cece" }}>
                                                        <option>Select country</option>
                                                        <option value="Bangladesh">Bangladesh</option>
                                                        <option value="Bangladesh">India</option>
                                                        <option value="Bangladesh">America</option>
                                                        <option value="Bangladesh">Nepal</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='mb-3 flex gap-4 justify-between items-center lg:flex-nowrap flex-wrap'>
                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">City</label>

                                                    <select className='w-full' style={{ border: "0.5px solid #d3cece" }}>
                                                        <option>Select City</option>
                                                        <option value="Bangladesh">Dhaka</option>
                                                        <option value="Bangladesh">Shylhet</option>
                                                        <option value="Bangladesh">Narayangonj</option>
                                                        <option value="Bangladesh">Dhanmondi</option>
                                                    </select>
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Country</label>

                                                    <select className='w-full' style={{ border: "0.5px solid #d3cece" }}>
                                                        <option>Select state</option>
                                                        <option value="Bangladesh">Dhaka</option>
                                                        <option value="Bangladesh">Shylhet</option>
                                                        <option value="Bangladesh">Narayangonj</option>
                                                        <option value="Bangladesh">Dhanmondi</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className='mb-6 flex gap-4 justify-between items-center lg:flex-nowrap flex-wrap'>
                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Post code</label>
                                                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                                                </div>

                                                <div className="w-full">
                                                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Phone number</label>
                                                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                                                </div>
                                            </div>

                                            <button className="w-full bg-[#336699] text-white font-[500] uppercase py-2">
                                                update address
                                            </button>

                                        </form>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}