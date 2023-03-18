import Link from "next/link";
import Blog from "./blog";

const Blogs = ({label, blogs}) => {
  return (
    <div className="container lg:px-0 px-5">
        {label && <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-semibold text-[#333]">{label}</h2>
              <Link href="/blogs" className="text-[#333]">View All Articles</Link>    
        </div>}
        <div className="mt-10 grid lg:grid-cols-4 grid-cols- gap-6">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    </div>
  )
}

export default Blogs;