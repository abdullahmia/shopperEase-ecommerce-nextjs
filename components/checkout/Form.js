
const Form = () => {
    return (
        <div>
            <h2 className="text-[21px] font-[700] text-[#333] uppercase">billing address</h2>

            <div className="mt-5">
                <div className="flex gap-4 lg:flex-nowrap flex-wrap mb-5">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">First Name *</label>
                        <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">Last Name *</label>
                        <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                    </div>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-[#666666]">Company name (optional)</label>
                    <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-[#666666]">Company name (optional)</label>
                    <select type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required>
                        <option value="bangladesh">Bangladesh</option>
                        <option value="india">India</option>
                        <option value="Nepal">Nepal</option>
                    </select>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-[#666666]">Street address *</label>
                    <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" placeholder="House number & street name" required />
                    <input type="text" className="mt-2 border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" placeholder="Appertment, suite, unit, etc (optional)" required />
                </div>


                <div className="flex gap-4 lg:flex-nowrap flex-wrap mb-5">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">Town / City *</label>
                        <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">State *</label>
                        <select type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required>
                            <option value="bangladesh">Bangladesh</option>
                            <option value="india">India</option>
                            <option value="Nepal">Nepal</option>
                        </select>
                    </div>
                </div>
                <div className="flex gap-4 lg:flex-nowrap flex-wrap mb-5">
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">ZIP *</label>
                        <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                    </div>
                    <div className="w-full">
                        <label className="block mb-2 text-sm font-medium text-[#666666]">Phone *</label>
                        <input type="text" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                    </div>
                </div>

                <div className="mb-5">
                    <label className="block mb-2 text-sm font-medium text-[#666666]">Email address *</label>
                    <input type="email" className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                </div>

                <div className="">
                    <label className="block mb-2 text-sm font-medium text-[#666666]">Order notes (optional)</label>
                    <textarea rows={3} className="border border-gray-300 text-gray-900 text-sm block w-full p-2.5 rounded" required />
                </div>


            </div>

        </div>
    )
}

export default Form