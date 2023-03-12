import Link from "next/link"
import { BiHomeAlt2 } from "react-icons/bi"

const SidebarCategories = () => {
  return (
      <div><ul className="w-full bg-white text-[#5c5959] shadow divide-y">
          <li className="py-4 px-3 flex relative group">
              <Link href="/" className="flex gap-2 hover:text-[#42a4e8]">
                  <BiHomeAlt2 size={20} />
                  <span className="text-sm block">Fashion</span>
              </Link>
              <div className="absolute top-0 left-[202px] invisible opacity-0 group-hover:visible group-hover:opacity-100 bg-white columns-2 shadow p-4 h-[300px] w-[400px] z-[100]">
                  <div className="flex flex-col flex-wrap gap-3">
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">New Arrivals</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Best Sellers</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Trending</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Clothing</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Shoes</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Bags</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Accessories</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Jewlery & Watches</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">New Arrivals</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Best Sellers</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Trending</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Clothing</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Shoes</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Bags</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Accessories</Link>
                      <Link href="/" className="text-sm hover:text-[#42a4e8]">Jewlery & Watches</Link>
                  </div>
              </div>
          </li>

          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Home & Screen</span>
          </Link>

          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Electroics</span>
          </Link>
          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Health & Beauty</span>
          </Link>
          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Gift Idea</span>
          </Link>
          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Cooking</span>
          </Link>

          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Smart Phone</span>
          </Link>

          <Link href="/" className="py-4 px-3 flex gap-2 hover:text-[#42a4e8]">
              <BiHomeAlt2 size={20} />
              <span className="text-sm">Computers</span>
          </Link>


      </ul></div>
  )
}

export default SidebarCategories