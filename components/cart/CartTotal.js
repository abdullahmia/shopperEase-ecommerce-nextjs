const CartTotal = () => {
	return (
		<div className="w-full p-5 border rounded">
			<h3 className="text-[21px] font-[700] text-[#333333] uppercase">
				cart totals
			</h3>
			<div className="mt-5 space-y-6">
				<h2 className="text-[17px] font-[600] font-poppins text-[#333333] flex justify-between items-center">
					<span>Sub Totals</span>
					<span>$100</span>
				</h2>
				<hr />
				<h2 className="text-[17px] font-[600] font-poppins text-[#333333] flex justify-between items-center">
					<span>Total</span>
					<span>$100</span>
				</h2>

				<button className="w-full text-[15px] px-8 py-2 font-[600] uppercase border border-black rounded bg-[#333] text-white transition ease-in-out duration-100">
					process to checkout
				</button>
			</div>
		</div>
	);
};

export default CartTotal;
