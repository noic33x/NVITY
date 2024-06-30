import { useState } from "react"
import menu from '../assets/menu.png' 

export default function Nav(props) {
    const username = JSON.parse(localStorage.getItem('userName'));
    const [top, setTop] = useState()
    function logout() {
        localStorage.removeItem('token');
        window.location.href = "/login";
    }
    function showNav() {
        setTop('bottom-[0rem]')
    }
    const [className, setClassName] = useState(["w-screen h-[8rem] tablet:w-[7rem] tablet:h-[3rem] tablet:rounded-md flex flex-wrap justify-center items-center bg-card text-white desktop:w-[10rem] desktop:rounded-md desktop:duration-500 desktop:bg-card desktop:text-white",
                                                "w-screen h-[8rem] hover:bg-card hover:text-white tablet:w-[7rem] tablet:h-[3rem] tablet:rounded-md flex flex-wrap justify-center items-center duration-500 hover:bg-card hover:text-white desktop:w-[10rem] desktop:rounded-md  desktop:items-center desktop:duration-500 desktop:hover:bg-card desktop:hover:text-white"
                                               ])
    return(
        <nav className='w-screen h-[5rem] bg-layer flex justify-around items-center desktop:bg-layer desktop:w-[10rem] desktop:h-[90vh]  desktop:m-[2rem] desktop:rounded-2xl desktop:flex desktop:flex-wrap desktop:justify-center desktop:items-center'>
            <div className="h-[4rem] w-[4rem] desktop:w-[7rem] desktop:h-[7rem] flex justify-center flex-wrap gap-[1rem]">
             <div className='h-[4rem] w-[4rem] bg-white rounded-full desktop:w-[7rem] desktop:h-[7rem] desktop:bg-white desktop:rounded-full'></div>
             <li  className="hidden tablet:hidden desktop:block text-2xl text-white">{username}</li>
            </div>

            <ul className='hidden text-stone-500 text-center tablet:w-[40rem]  tablet:h-[4rem] tablet:bg-transparent tablet:relative tablet:z-0 tablet:flex desktop:flex flex-wrap text-xl justify-center items-center desktop:text-center desktop:w-[8rem] desktop:h-[10rem] desktop:text-xl desktop:bg-transparent desktop:relative'>
                    <li className={className[props.nav[0]]}><a href="/">All Tasks</a></li>
                    <li className={className[props.nav[1]]}><a href="/important">Important</a></li>
                    <li className={className[props.nav[2]]}><a href="/complete">Complete</a></li>
                    <li className={className[props.nav[3]]}><a href="/uncomplete">Uncomplete</a></li>
            </ul>
            <div className={`w-[100vw] h-[100vh] z-20 absolute ${top|| 'bottom-[100rem]'} bg-layer text-stone-500 flex flex-wrap justify-center items-center text-center text-4xl duration-500 tablet:hidden desktop:hidden`}>
                <ul className="h-[80vh] flex flex-wrap justify-between">
                <li className={className[props.nav[0]]}><a href="/">All Tasks</a></li>
                <li className={className[props.nav[1]]}><a href="/important">Important</a></li>
                <li className={className[props.nav[2]]}><a href="/complete">Complete</a></li>
                <li className={className[props.nav[3]]}><a href="/uncomplete">Uncomplete</a></li>
                <li className='w-screen h-[8rem] hover:bg-card hover:text-white flex flex-wrap justify-center items-center duration-500 rounded-md tablet:hidden desktop:hidden' onClick={logout}><a href="#">Log Out</a></li>
            </ul>
            </div> 
            <li className='text-stone-500 text-center text-xl list-none hover:text-white duration-500 hidden tablet:block desktop:block' onClick={logout}><a href="#">Log Out</a></li>
            <div className="w-[10rem] tablet:hidden desktop:hidden"></div>
            <img src={menu} alt="" className="w-[5rem] h-[5rem] tablet:hidden desktop:hidden" onClick={showNav}/>
        </nav>
    )
}
