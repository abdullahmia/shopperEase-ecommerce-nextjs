import { Editor } from '@tinymce/tinymce-react';
import cogoToast from 'cogo-toast';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { BiPlus, BiX } from 'react-icons/bi';
import DashboardLayout from '../../../../components/ui/layout/dashboardLayout';


const Index = () => {
    const descriptionRef = useRef(null);
    const imagePickerRef = useRef(null);
    const [specifications, setSpecifications] = useState([]);
    const [images, setImages] = useState([]);
    const [specification, setSpecification] = useState({
        name: "",
        value: ""
    });


    // specification handler
    const addSepecification = () => {
        if (specification.name && specification.value) {
            setSpecifications([...specifications, specification]);
            setSpecification({ name: "", value: "" });
        } else {
            cogoToast.error('Please fill all fields', { position: 'top-right' })
        }
    }

    // remove specification handler
    const removeSpecification = (specification) => {
        const newSpecifications = specifications.filter(item => item !== specification);
        setSpecifications(newSpecifications);
    }


    // add photo to image 
    const addImageHandler = (e) => {
        const files = Array.from(e.target.files);

        files.forEach(file => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onloadend = () => {
                setImages(oldArray => [...oldArray, reader.result])
            }
        })
    };

    // remove Image handler
    const removeImageHandler = (image) => {
        let index = images.indexOf(image);
        if (index > -1) {
            let restImages = images.filter(image => images.indexOf(image) !== index);
            setImages(restImages);
        }
    }


    return (
        <DashboardLayout>
            <Head>
                <title>New Product | ShopperEase Admin</title>
            </Head>
            <main className='container px-4 mb-5'>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <div className='text-xs text-[#666] space-x-2'>
                            <Link href="/admin">Dashboard</Link>
                            <span>/</span>
                            <Link href="/admin/products">Products</Link>
                            <span>/</span>
                            <span>New Product</span>
                        </div>
                        <h2 className='text-[#333] font-[600] text-2xl'>New Product</h2>
                    </div>
                    <div>
                        <Link href="/admin/products/new" className='text-sm font-[600] bg-[#FFD333] px-6 py-2 hover:bg-[#ebbe1b] transition'>Save</Link>
                    </div>
                </div>


                <div className='mt-5 grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-8 col-span-12'>
                        <div className='p-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Basic information</h2>

                            <div className='mt-6 space-y-4'>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Name</label>
                                    <input type="text" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Description</label>
                                    <Editor
                                        apiKey='zx9qjz9qf0gjnq103237dl4yq062dcl966d4af5ktfttloa1'
                                        onInit={(evt, editor) => descriptionRef.current = editor}
                                        initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                            height: 300,
                                            menubar: false,
                                            plugins: [
                                                'advlist autolink lists link image charmap print preview anchor',
                                                'searchreplace visualblocks code fullscreen',
                                                'insertdatetime media table paste code help wordcount'
                                            ],
                                            toolbar: 'undo redo | formatselect | ' +
                                                'bold italic backcolor | alignleft aligncenter ' +
                                                'alignright alignjustify | bullist numlist outdent indent | ' +
                                                'removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Short Description</label>
                                    <textarea className='w-full border p-2 text-[13px] focus:outline-none' rows={3} />
                                </div>
                            </div>
                        </div>

                        <div className='p-4 mt-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Pricing & Inventory</h2>

                            <div className='mt-6 space-y-4'>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Name</label>
                                    <input type="text" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Stock quantity</label>
                                    <input type="number" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>
                            </div>
                        </div>

                        <div className='p-4 mt-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Images</h2>

                            {
                                images.length > 0 && (
                                    <div className={`mt-6 space-y-4 divide-y border`}>

                                        {images.map((image, key) => (
                                            <div key={key} className='flex items-center justify-between px-3'>
                                                <Image src={image} width={40} height={40} alt="Product Image" />
                                                <button onClick={(e) => {
                                                    e.preventDefault();
                                                    removeImageHandler(image);
                                                }}><BiX size={25} className="text-[#333]" /></button>
                                            </div>

                                        ))}
                                    </div>
                                )
                            }

                            <div>
                                <input
                                    type="file"
                                    hidden
                                    onChange={addImageHandler}
                                    ref={imagePickerRef}
                                    multiple
                                />
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        imagePickerRef.current.click();
                                    }}
                                    className="text-[13px] text-blue-500"
                                >
                                    Upload new image
                                </button>
                            </div>


                        </div>

                        <div className='p-4 my-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Specification</h2>

                            <div className='mt-6 space-y-4'>
                                {
                                    specifications && specifications.map((specification, key) => (
                                        <div key={key} className='flex items-center gap-3'>
                                            <div className='w-full border text-[14px] text-[#333] flex py-2 px-3'>
                                                <p className='w-full'>{specification.name}</p>
                                                <p className='w-full border-l pl-4'>{specification.value}</p>
                                            </div>
                                            <button onClick={() => removeSpecification(specification)} className='bg-red-500 text-white p-3'><BiX size={15} /></button>
                                        </div>
                                    ))
                                }


                                <div className='flex items-center gap-3'>
                                    <div className='w-full mt-6 flex items-center gap-4'>
                                        <div className='w-full mb-3'>
                                            <label className='block text-[#333] text-[14px] font-[500] mb-1'>Name</label>
                                            <input type="text" value={specification.name} onChange={e => setSpecification({ ...specification, name: e.target.value })} className='w-full border p-2 text-[13px] focus:outline-none' />
                                        </div>
                                        <div className='w-full mb-3'>
                                            <label className='block text-[#333] text-[14px] font-[500] mb-1'>Value</label>
                                            <input type="text" value={specification.vlaue} onChange={e => setSpecification({ ...specification, value: e.target.value })} className='w-full border p-2 text-[13px] focus:outline-none' />
                                        </div>
                                        <button onClick={addSepecification} className='bg-blue-500 text-white p-3 mt-3'><BiPlus size={15} /></button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='lg:col-span-4 col-span-12'>
                        <div className='p-4 bg-white border space-y-2'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Status</h2>
                            <div>
                                <div className='flex items-center space-x-2'>
                                    <input type="radio" name='status' id='enabled' className='focus:outline-none' />
                                    <label htmlFor="enabled" className='text-[#333] text-[14px] font-[500]'>Publish</label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input type="radio" name='status' id='disabled' className='focus:outline-none' />
                                    <label htmlFor="disabled" className='text-[#333] text-[14px] font-[500]'>Draft</label>
                                </div>
                            </div>
                        </div>

                        <div className='p-4 bg-white border space-y-2 mt-5'>
                            <h2 className='text-[16px] text-[#333] font-[600] pb-3'>Category</h2>
                            <div className=''>
                                <div class="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        class="form-checkbox h-5 w-5 text-[#3D464D]"
                                        name='category'
                                        id='category'
                                    />
                                    <label class="ml-2 text-sm font-medium text-[#333]" htmlFor='category'>Man Fashion</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        class="form-checkbox h-5 w-5 text-[#3D464D]"
                                        name='category'
                                        id='category'
                                    />
                                    <label class="ml-2 text-sm font-medium text-[#333]" htmlFor='category'>Man Fashion</label>
                                </div>
                                <div class="flex items-center mb-4">
                                    <input
                                        type="checkbox"
                                        class="form-checkbox h-5 w-5 text-[#3D464D]"
                                        name='category'
                                        id='category'
                                    />
                                    <label class="ml-2 text-sm font-medium text-[#333]" htmlFor='category'>Man Fashion</label>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </main>
        </DashboardLayout>
    )
}

export default Index