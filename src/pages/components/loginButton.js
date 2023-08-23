import Link from 'next/link'
import Signin from './signin'

export default function Loginbutton() {
    return (
        <div >
            <button  className="text-white pr-20" ><Link href={'./components/signin'}>Login</Link></button>
        </div>
    )
}