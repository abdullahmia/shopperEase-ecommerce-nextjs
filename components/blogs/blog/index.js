import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import blogImg from '../../../public/blog.jpg';

const Blog = () => {
  return (
    <Link href="/blog/asdfasdfas" className="group cursor-pointer">
      <div className="w-[295px] h-[190px]">
        <Image src={blogImg.src} width={295} height={190} className="rounded-lg transition duration-500 transform group-hover:scale-[0.95]" alt="Blog" />
      </div>
      <div className="text-center mt-5">
        <p className="space-x-1 text-[13px] font-semibold">
          <span className="text-[#333]">Abdullah Mia</span>
          <span className="text-[#3333]">-</span>
          <span className="text-[#16141479]">03.5.2023</span>
        </p>
        <h2 className="text-[#333] hover:text-[#42a4e8] font-semibold text-[16px]">Fusce lacinia arcuet nulla</h2>
        <p href="/blog/asdfasdfas" className='mt-3 text-[14px] font-semibold text-[#333] flex justify-center items-center gap-2'>
          <span className='uppercase'>Read More</span>
          <BsArrowRight size={17} />
        </p>
      </div>
    </Link>
  )
}

export default Blog;