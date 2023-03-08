import Link from "next/link"
import { CiUser } from 'react-icons/ci'

const Header = () => {
  return (
    <header className="">
        <div className="bg-[#F5F6F8] py-3 lg:px-0 px-5">
            <div className="container flex justify-between items-center">
                <div>
                    <p className="text-[11px] text-[#333333]">WELCOME TO ShopperEase STORE</p>
                </div>
                <div className="flex items-center gap-4">
                        <div className="hidden lg:block space-x-4">
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            Blog
                        </Link>
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            Contact Us
                        </Link>
                        <Link href="/blog" className="text-[13px] text-[#333333]">
                            My Account
                        </Link>
                    </div>
                    <button className="flex items-center gap-1 text-[13px] text-[#333333]">
                        <CiUser size={18} />
                        Sign In/Register
                    </button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header