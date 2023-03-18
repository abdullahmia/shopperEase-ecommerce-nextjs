import Head from "next/head";
import Image from "next/image";
import blogImg from '../../public/blog.jpg';

const index = () => {
    return (
        <>
            <Head>
                <title>Blog detail</title>
            </Head>

            <main className="container py-12 lg:px-28">
                
                {/* Blog Image */}
                <Image src={blogImg.src} width={930} height={600} alt="blog iamge" />

                {/* info */}
                <div className="mt-6">
                    <div>
                        <p className="text-[13px] font-[600] space-x-1">
                            <span className="text-[#666]">by</span>
                            <span>Abdullah Mia</span>
                            <span>-</span>
                            <span>02.36.2020</span>
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-[30px] font-[600] text-[#333] hover:text-[#336699]">Fashion tells about who you are from external point</h2>
                </div>

                <div className="mt-5">
                    <p className="text-[14px] font-[400] text-[#666]">
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus metus libero eu augue.
                    </p>

                    <p className="text-[14px] font-[400] text-[#666]">
                        Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egstas, ant at vulputate volutpat, uctus metus libero eu augue, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adi piscing, com modo quis, gravida iest. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. pede arcu, dapibus eu, fermen tum et, dapibus sed, urna. Morbi interdum mollis sapien. Sed ac risus. Pha sellus lacinia, magna a laoreet, lect us arcu pulvinar risus, vitae fac ilisis libero dolor a purus.
                    </p>
                </div>

            </main>
        </>
    )
}

export default index;