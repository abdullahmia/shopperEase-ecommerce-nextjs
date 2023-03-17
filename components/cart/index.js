import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import Coupon from "./Coupon";

const index = () => {
	return (
		<div className="grid grid-cols-12 lg:gap-10 gap-3 mt-10">
			<div className="lg:col-span-8 col-span-12">
				<div className="relative overflow-x-auto">
					<table className="w-full text-sm text-left text-gray-500">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50">
							<tr className="">
								<th scope="col" className="px-6 py-3">
									Product
								</th>

								<th scope="col" className="px-6 py-3"></th>

								<th scope="col" className="px-6 py-3">
									Qty
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
							</tr>
						</thead>
						<tbody>
							<CartItem />
							<CartItem />
							<CartItem />
						</tbody>
					</table>
				</div>

				<div className="flex items-center justify-between flex-wrap gap-3 mt-5">
					<div>
						<Link
							href="/shop"
							className="text-[15px] px-8 py-3 text-white font-[600] bg-[#333131] flex justify-center items-center gap-3 hover:bg-[#242323] transition ease-in-out duration-100"
						>
							<BsArrowLeft size={25} />
							<span className="uppercase">
								continue shoppoing
							</span>
						</Link>
					</div>
					<div>
						<button className="text-[15px] px-8 py-3 text-[#333] font-[600] uppercase border hover:border-black transition ease-in-out duration-100">
							clear cart
						</button>
					</div>
				</div>

				{/* Coupos */}
				<Coupon />
			</div>
			<div className="lg:col-span-4 col-span-12">
				<CartTotal />
			</div>
		</div>
	);
};

export default index;
