import { Editor } from '@tinymce/tinymce-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import DashbaordLayout from '../../../../components/ui/layout/dashboardLayout';

const NewBlog = () => {
    const descriptionRef = useRef(null);
    const imagePickerRef = useRef(null);
    const [image, setImage] = useState(null);

    // add photo to image 
    const addImageHandler = (e) => {
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onloadend = () => {
            setImage(reader.result);
        };
    };

    // remove image
    const removeImageHandler = (e) => {
        e.preventDefault();
        setImage(null);
    }
    return (
        <DashbaordLayout>
            <Head>
                <title>New Blog | ShopperEase</title>
            </Head>

            <main className='container px-4'>
                <div className='flex items-center justify-between py-4'>
                    <div>
                        <div className='text-xs text-[#666] space-x-2'>
                            <Link href="/admin">Dashboard</Link>
                            <span>/</span>
                            <Link href="/admin/blogs">Blogs</Link>
                            <span>/</span>
                            <span>Add Blog</span>
                        </div>
                        <h2 className='text-[#333] font-[600] text-2xl'>Add Blogs</h2>
                    </div>
                </div>

                <div className='mt-5 grid grid-cols-12 gap-4'>
                    <div className='lg:col-span-8 col-span-12'>
                        <div className='p-4 border'>
                            <h2 className='text-[16px] text-[#333] font-[600]'>Basic information</h2>

                            <div className='mt-6 space-y-4'>
                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Title</label>
                                    <input type="text" className='w-full border p-2 text-[13px] focus:outline-none' />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Short Description</label>
                                    <textarea className='w-full border p-2 text-[13px] focus:outline-none' rows={3} />
                                </div>

                                <div className='mb-3'>
                                    <label className='block text-[#333] text-[14px] font-[500] mb-1'>Description</label>
                                    <Editor
                                        apiKey='zx9qjz9qf0gjnq103237dl4yq062dcl966d4af5ktfttloa1'
                                        onInit={(evt, editor) => descriptionRef.current = editor}
                                        initialValue="<p>This is the initial content of the editor.</p>"
                                        init={{
                                            height: 400,
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

                        <div className='p-4 bg-white border space-y-2 mt-5'>
                            <h2 className='text-[16px] text-[#333] font-[600] pb-3'>Image</h2>
                            {
                                image && (
                                    <div>
                                        <Image src={image} width={320} height={320} alt="Category Image" />
                                    </div>
                                )
                            }
                            <div>
                                <input
                                    type="file"
                                    hidden
                                    onChange={addImageHandler}
                                    ref={imagePickerRef}
                                />
                                <div className='space-x-3'>
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            imagePickerRef.current.click();
                                        }}
                                        className="text-[14px] text-blue-500"
                                    >
                                        Upload new image
                                    </button>
                                    {image && <button onClick={removeImageHandler} className="text-[14px] text-red-500">Remove image</button>}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </DashbaordLayout>
    )
}

export default NewBlog;