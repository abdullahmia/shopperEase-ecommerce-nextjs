import Link from "next/link"

const index = () => {
    return (
        <div>
            <form>
                <div className="mb-5">
                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Username or email address *</label>
                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                </div>

                <div className="mb-5">
                    <label className="block text-[14px] font-[400] text-[#666] mb-1">Password *</label>
                    <input type="text" className="w-full" style={{ border: "0.5px solid #d3cece" }} />
                </div>

                <div className="mb-5 space-x-2">
                    <input type="checkbox" style={{ border: "0.5px solid #d3cece" }} id="rememberme" />
                    <label htmlFor="rememberme" className="text-[14px] font-[400] text-[#666]">Remember me</label>
                </div>

                <button className="w-full bg-[#336699] text-white font-[500] uppercase py-2">
                    sign in
                </button>

                <div className="text-center mt-5">
                    <Link href="/" className="text-[13px] font-[400] text-[#666] text-center">Lost password?</Link>
                </div>

            </form>
        </div>
    )
}

export default index