import Image from "next/image";
import { useRouter } from 'next/router';
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import productImg from '../../public/product.jpg';

const Product = () => {
    const router = useRouter();
    const redirectProduct = () => {
        router.push('/product/product-hulk');
    }
  return (
    <div onClick={redirectProduct} className="group cursor-pointer">
        <div className="relative">
            <Image src={productImg.src} height={260} width={230} alt="Product" />
            <div className="hidden group-hover:block">
                <div className="absolute top-4 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-[#333] hover:bg-[#333] hover:text-white">
                      <button><AiOutlineHeart size={24} /></button>
                </div>
            </div>
        </div>
        <div className="text-center space-y-1 mt-3">
            <h2 className="text-[14px] font-semibold text-[#333] hover:text-[#42a4e8]">Leather Stripe Watch</h2>
            <p className="flex items-center justify-center text-yellow-400">
                <span><AiFillStar size={15} /></span>
                <span><AiFillStar size={15} /></span>
                <span><AiFillStar size={15} /></span>
                <span><AiFillStar size={15} /></span>
                <span><AiFillStar size={15} /></span>
                <span className="ml-1 text-[12px] text-[#a7a2a2]">(3 Reviews)</span>
            </p>
            <h5 className="text-[18px] font-semibold text-[#333] group-hover:hidden">$343</h5>
            <button className="uppercase text-[13px] font-semibold text-[#42a4e8] hidden group-hover:block m-auto">Add to cart</button>
        </div>
    </div>
  )
}

export default Product