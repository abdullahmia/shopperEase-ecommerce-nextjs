import NavLink from '../../../utils/link/index';

const index = () => {
    return (
        <div className="flex flex-col divide-y">
            <NavLink href="/account" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Dashboard</NavLink>

            <NavLink href="/account/order" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Order</NavLink>

            <NavLink href="/account/downloads" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Downloads</NavLink>

            <NavLink href="/account/address" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Addresses</NavLink>

            <NavLink href="/account/account" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Account details</NavLink>

            <NavLink href="/wishlist" klassName="text-[16px] font-[600] text-[#333] py-3" activeClassName="text-[16px] font-[600] text-[#336699] py-3">Wishlist</NavLink>

            <div className="text-[16px] font-[600] text-[#333] py-3">Logout</div>

        </div>
    )
}

export default index;