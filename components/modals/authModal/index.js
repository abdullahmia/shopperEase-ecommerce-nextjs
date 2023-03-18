import { Dialog, Tab, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import SignIn from './SignIn';
import SignUp from './SignUp';

export default function AuthModal() {
    let [isOpen, setIsOpen] = useState(true)

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
                    className="flex items-center gap-1 text-[13px] text-[#333333]"
                >
                    <CiUser size={18} />
                    Sign In/Register
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
                                <Dialog.Panel className="w-[500px] transform overflow-hidden bg-white p-10 py-16 text-left align-middle shadow-xl transition-all">
                                    <Tab.Group>
                                        <Tab.List className="flex items-center gap-6">
                                            <Tab className={({ selected }) => selected ? `w-full text-[16px] font-[700] text-[#336699] border-b-2 border-[#336699] uppercase` : `w-full text-[16px] font-[700] text-[#333] border-b-2 uppercase` }>
                                                Sign In
                                            </Tab>
                                            <Tab className={({ selected }) => selected ? `w-full text-[16px] font-[700] text-[#336699] border-b-2 border-[#336699] uppercase` : `w-full text-[16px] font-[700] text-[#333] border-b-2 uppercase`}>
                                                Sign up
                                            </Tab>
                                        </Tab.List>
                                        <Tab.Panels className="mt-2">
                                            <Tab.Panel>
                                                <div className='mt-12'>
                                                    <SignIn />
                                                </div>
                                            </Tab.Panel>
                                            <Tab.Panel>
                                                <div className='mt-12'>
                                                    <SignUp />
                                                </div>
                                            </Tab.Panel>
                                        </Tab.Panels>
                                    </Tab.Group>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}