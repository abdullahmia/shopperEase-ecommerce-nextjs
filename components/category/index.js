import 'swiper/css';
import Category from './category';

const Categories = ({label}) => {
  return (
      <div className='container mt-12 space-y-8'>
         {label && <h2 className='text-[20px] text-[#333333] font-semibold'>Top Categories of the Month</h2>}
          <div className='grid lg:grid-cols-6 grid-cols-2 lg:gap-12 gap-3'>
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
            <Category />
          </div>
      </div>
  )
}

export default Categories;