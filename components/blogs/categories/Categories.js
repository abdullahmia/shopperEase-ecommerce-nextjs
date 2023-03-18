import Category from './Category';


const Categories = () => {
  return (
    <div className='flex items-center gap-5'>
        <button className="font-[600] text-[14px] text-[#333] border-b-2 border-[#333] flex items-center gap-1">
            <span>All Blog post</span>
            <span className="text-[#666]">06</span>
        </button>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
    </div>
  )
}

export default Categories