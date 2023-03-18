
const Coupon = () => {
  return (
    <div className="mt-20 space-y-3">
        <h3 className="text-[17px] text-[#333333] font-[600]">COUPON DISCOUNT</h3>
        <form className="space-y-5">
            <input type="text" placeholder="Enter coupon code here." className="w-full focus:border-b focus:border-[#333] focus:outline-none focus:ring-0" style={{ border: "none", borderBottom: "0.5px solid #f1dfdf" }} />

            <button className="text-[15px] px-8 py-3 text-[#333] font-[600] uppercase border border-black rounded hover:bg-[#333] hover:text-white transition ease-in-out duration-100">Apply Coupon</button>

        </form>
    </div>
  )
}

export default Coupon