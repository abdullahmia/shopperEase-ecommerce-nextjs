import catImg from '../../../public/category.jpg';

const Category = () => {
  return (
    <div className='space-y-5'>
        <div className=' bg-white shadow rounded-full'>
              <img src={catImg.src} alt="category" className='w-full rounded-full hover:scale-[0.90] ease-in duration-100' />
        </div>
          <p className='text-[16px] uppercase hover:text-[#42a4e8] font-semibold text-center'>sports</p>
    </div>
  )
}

export default Category