import { useState } from "react"
import logo from "../assets/logo.jpeg"
import { NAVIGATION_LINKS } from "../index";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar(){
    const [isMobileMenuOpen,setIsMobileMenuOpen]=useState(false)
    // const logo="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iYmxhY2siIC8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+U0FVUkFCSF9LQU1BTkU8L3RleHQ+PC9zdmc+"
    const navigationLinks=[
        {
        label:"Projects",
        href:"project"
    },
    {
        label:"Bio",
        href:"Bio"
    },
    {
        label:"Skills",
        href:"Skill"
    },
    {
        label:"Work Experience",
        href:"Work"
    },
    {
        label:"Education",
        href:"Education"
    },
    {
        label:"Contact",
        href:"Contact"
    },
]
    const toggleMobileMenu=()=>{
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }
    const handleLinkClick=(e,href)=>{
        e.preventDefault();
        const targetElement=document.querySelector(href)
        if(targetElement){
            const offset=-85
            const elementPosition=targetElement.getBoundingClientRect().top;
            const offsetPosition=elementPosition+window.scrollY
            window.scrollTo({
                top:offsetPosition,
                behavior:"smooth"
            })
        }
        setIsMobileMenuOpen(false)
    }
    return(
        <>
        <div>
            <nav className="fixed left-0 right-0 top-4 z-50">
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg border border-stone-50/30 bg-black/20 py-3 backdropblur-lg lg:flex">
                <div className="flex items-center justify-between gap-6">
                    <div>
                        <a href="#">
                            <img src={logo} width={200}  alt="logo" className=""/>
                        </a>
                    </div>
                    <div>
                        <ul className="flex items-center gap-4">
                             {
                             NAVIGATION_LINKS.map((item,index)=>{
                                return <li key={index}>
                                    <a href={item.href} className="text-sm hover:text-yellow-400" onClick={(e)=>{
                                        handleLinkClick(e,item.href)
                                    }} >
                                        {
                                            console.log("items are == ",item)
                                        }
                                        {item.label}
                                    </a>
                                </li>
                             })

                             }
                        </ul>
                    </div>
                </div>
                </div>
                <div className="rounded-lg backdrop-blur-md lg:hidden">
                    <div className="flex items=center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} alt="" width={90} className="m-2" />
                            </a>
                        </div>
                        <div className="flex items-center">
                            <button className="focus:outline-none " onClick={toggleMobileMenu}>{isMobileMenuOpen ? (<FaTimes className="m-2 h-6 w-5 "/>) : (<FaBars className="m-2 h-6 w-5"/>)}</button>
                        </div>
                    </div>
                    {
                        isMobileMenuOpen && (
                            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
                                {
                                    navigationLinks.map((items,index)=>{
                                        return <li key={index}>
                                            <a href={items.href} className="block text-lg " onClick={(e)=>{
                                                handleLinkClick(e,items.href)
                                            }}/>
                                            {items.label}
                                        </li>
                                    })
                                }
                            </ul>
                        )
                    }
                </div>
            </nav>
        </div>
        </>
    )
}
export default Navbar