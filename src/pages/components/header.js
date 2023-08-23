import Loginbutton from "./loginButton"


export default function Header(){
    return (
        <>
        <div className="h-10 bg-purple-600 flex items-center pl-40 justify-between" >
            <h1 className="text-white font-bold text-xl">Personal Blogging App</h1>
            <Loginbutton/>

        </div>
        </>
    )
}