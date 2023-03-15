import { Tab } from '@headlessui/react'


const ProductDetail = () => {
  return (
    <div>
        <Tab.Group>
            <Tab.List className="space-x-5 border-b font-poppins">
                <Tab className={({ selected }) => selected ? `text-[21px] text-[#333333] font-[700] capitalize border-b-[3px] border-[#336699] focus:ring-0 focus:outline-none` : `text-[21px] text-[#a39d9d] font-[700] capitalize border-b-[3px] border-[#a39d9d] focus:ring-0 focus:outline-none`}>
                    Desciption
                </Tab>
            
                <Tab className={({ selected }) => selected ? `text-[21px] text-[#333333] font-[700] capitalize border-b-[3px] border-[#336699] focus:ring-0 focus:outline-none` : `text-[21px] text-[#a39d9d] font-[700] capitalize border-b-[3px] border-[#a39d9d] focus:ring-0 focus:outline-none`}>
                    Specification
                </Tab>

                <Tab className={({ selected }) => selected ? `text-[21px] text-[#333333] font-[700] capitalize border-b-[3px] border-[#336699] focus:ring-0 focus:outline-none` : `text-[21px] text-[#a39d9d] font-[700] capitalize border-b-[3px] border-[#a39d9d] focus:ring-0 focus:outline-none`}>
                    Reviews (03)
                </Tab>
            </Tab.List>
            <Tab.Panels className="mt-5">
                <Tab.Panel>
                    <h2 className='text-[21px] text-[#333333] font-[700]'>Detail</h2>
                    <p className='text-[14px] text-[text-[21px] text-[#666666]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt arcu cursus vitae congue mauris. Sagittis id consectetur purus ut. Tellus rutrum tellus pelle Vel pretium lectus quam id leo in vitae turpis massa.

                        Nunc nec porttitor turpis. In eu risus enim. In vitae mollis elit.
                        Vivamus finibus vel mauris ut vehicula.
                        Nullam a magna porttitor, dictum risus nec, faucibus sapien.</p>
                </Tab.Panel>
                <Tab.Panel>
                    <div>
                          <table>
                              <tbody>
                                  <tr>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Model
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Skysuite 320
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Color
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Black
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Size
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Large, Small
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Guarantee Time
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          3 Months
                                      </th>
                                  </tr>
                                  <tr>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Model
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Skysuite 320
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Color
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Black
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Size
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          Large, Small
                                      </th>
                                  </tr>
                                  <tr className=''>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#333333] pr-32' >
                                          Guarantee Time
                                      </th>
                                      <th scope="row" className='py-2 text-start text-[14px] text-[#666666]' >
                                          3 Months
                                      </th>
                                  </tr>
                              </tbody>
                          </table>
                    </div>
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    </div>
  )
}

export default ProductDetail