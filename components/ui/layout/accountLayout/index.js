import Sidebar from '../../../account/sidebar';

const index = ({ children }) => {
  return (
    <div className="grid grid-cols-12 py-14 lg:gap-10">
      <div className="lg:col-span-3 col-span-12">
        <Sidebar />
      </div>
      <div className="lg:col-span-9 col-span-12">
        {children}
      </div>
    </div>
  )
}

export default index