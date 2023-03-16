
const CheckoutDetail = () => {
    return (
        <div className="p-5 border rounded">
            <h2 className="text-[20px] uppercase font-[700] text-[#333]">your order</h2>
            {/* Orderd Products */}
            <div className="mt-4">
                <h2 className="capitalize text-[16px] text-[#333] font-[600]">Product</h2>
                <hr className="my-3" />

                <div className="space-y-3">
                    <p className="text-[14px] font-[400] text-[#666] flex items-center justify-between">
                        <span className="">Palm Print Jacket  1	</span>
                        <span>$40.00</span>
                    </p>
                    <p className="text-[14px] font-[400] text-[#666] flex items-center justify-between">
                        <span className="">Palm Print Jacket  1	</span>
                        <span>$40.00</span>
                    </p>
                </div>

                <h2 className="capitalize mt-3 text-[16px] text-[#333] font-[600] flex items-center justify-between">
                    <span>total</span>
                    <span>$100.00</span>
                </h2>

                <hr className="my-3" />

                <div className="space-y-3">
                    <h2 className="capitalize text-[16px] text-[#333] font-[600]">payment method</h2>
                    <div className="space-x-3 text-[14px] font-[400] text-[#666]">
                        <input type="radio" id="cashOnDelivery" name="payment" />
                        <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                    </div>
                    <div className="space-x-3 text-[14px] font-[400] text-[#666]">
                        <input type="radio" id="cashOnDelivery" name="payment" />
                        <label htmlFor="cashOnDelivery">Payment with Stripe</label>
                    </div>
                </div>

                <button className="w-full bg-[#333] text-white uppercase py-2 rounded mt-5">place order</button>

            </div>
        </div>
    )
}

export default CheckoutDetail