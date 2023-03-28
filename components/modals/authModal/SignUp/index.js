
const index = () => {
    return (
        <div>
            <form>
                <div className="mb-5">
                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Username or email address *</label>
                    <input type="text" className="w-full text-[#333] border p-2 focus:outline-none" />
                </div>

                <div className="mb-5">
                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Password *</label>
                    <input type="text" className="w-full text-[#333] border p-2 focus:outline-none" />
                </div>

                <div className="mb-5">
                    <p className="text-[13px] font-[400] text-[#666] mb-1">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                    </p>
                </div>

                <div className="mb-5 space-x-2">
                    <input type="checkbox" style={{ border: "0.5px solid #d3cece" }} id="rememberme" />
                    <label htmlFor="rememberme" className="text-[14px] font-[400] text-[#666]">I agree to the privacy policy</label>
                </div>

                <button className="w-full bg-[#336699] text-white font-[500] uppercase py-2">
                    sign in
                </button>

            </form>
        </div>
    )
}

export default index