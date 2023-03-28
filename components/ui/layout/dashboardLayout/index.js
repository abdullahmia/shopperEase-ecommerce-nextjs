import Header from '../../../dashboard/header';
import Sidebar from '../../../dashboard/sidebar';


const index = ({children}) => {
  return (
      <div>
          <Header />
          <div class="flex overflow-hidden bg-white pt-16">
              <Sidebar />
              <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
              <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
                  {children}
              </div>
          </div>
      </div>
  )
}

export default index;