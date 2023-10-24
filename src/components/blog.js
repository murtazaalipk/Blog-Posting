import Image from 'next/image'
import Pic from '../pics/profile.png'

/* import data from '@/data/blogs.json'; */


export default function Blog({data}) {
console.log(data)
    return (
                <div className=' w-3/4'>
                    <div className=' mt-10 border border-gray-300' >
                        <div className=' flex gap-7 items-center' >
                            <div>
                                <Image className='ml-10 mt-10 rounded-full'
                                    src={Pic}
                                    width={80}
                                    height={80}
                                    alt="Picture of the author"
                                />
                            </div>
                            <div className='mt-10' >
                                <h1 className=' text-xl font-bold' >{data.Title}</h1>
                                <p className=' text-gray-600 font-bold'>{data.Name}</p>
                            </div>
                        </div>
                        <div>
                            <p className='p-10 text-justify' >
                                {data.Blog}
                            </p>
                        </div>
                    </div>
             </div>
    )
}