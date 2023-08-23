import Image from 'next/image'
import Pic from '../pics/profile.png'
import Elon from '../pics/elon.png'
export default function Blog() {
    return (
        <>
            <h1 className=" font-bold text-xl pl-40 pt-10 fontdash ">My Blogs</h1>
            <div className='flex justify-center items-center ' >
                <div className=' w-3/4'>
                    <div className=' h-80 mt-10 border border-gray-300' >
                        <div className=' flex justify-between items-center' >
                            <div>
                                <Image className='ml-10 mt-10 rounded-full'
                                    src={Pic}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className=' mr-[530px] mt-10' >
                                <h1 className=' text-xl font-bold' >How to make a website Using NextJs</h1>
                                <p className=' text-gray-600 font-bold'>Syed Murtaza Ali - Developer</p>
                            </div>
                        </div>
                        <div>
                            <p className='p-10 text-justify' >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                    <div className=' h-80 mt-10 border border-gray-300' >
                        <div className=' flex justify-between items-center' >
                            <div>
                                <Image className='ml-10 mt-10 rounded-full'
                                    src={Elon}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className=' mr-[530px] mt-10' >
                                <h1 className=' text-xl font-bold' >How to buy StarLink Internet </h1>
                                <p className=' text-gray-600 font-bold'>Elone Musk - CEO of Tesla Motors</p>
                            </div>
                        </div>
                        <div>
                            <p className='p-10 text-justify' >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}