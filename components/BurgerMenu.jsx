'use client'
import { AlignJustify, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export default function BurgerMenu() {
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef(null)
    
    function toggleMenu() {
        setShowMenu(prev => !prev)
    }
    
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (showMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                toggleMenu()
            }
        }
        
      
        if (showMenu) {
            document.addEventListener('mousedown', handleOutsideClick)
        }
        
        
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [showMenu])
    
 
    function handleNavLinkClick() {
        toggleMenu()
    }

    return (
        <>
            <button onClick={toggleMenu}>
                <AlignJustify size={35} className="text-white" />
            </button>
        
            <div 
                ref={menuRef}
                className={`fixed top-0 right-0 w-screen h-screen lg:w-[35%] bg-[#f5f5f5] shadow-lg p-3 flex flex-col 
                transform transition-transform duration-500 ease-in-out
                ${showMenu ? "translate-x-0" : "translate-x-full"}`}
            >
                <button className="self-end p-1" onClick={toggleMenu}>
                    <X size={30} />
                </button>

                <nav className="mt-8">
                    <ul className="space-y-4 text-[27px] lg:text-[34px] px-6 w-fit">
                        <li><a href="#" onClick={handleNavLinkClick}>Om os</a></li>
                        <li><a href="#" onClick={handleNavLinkClick}>Services</a></li>
                        <li><a href="#" onClick={handleNavLinkClick}>Referencer</a></li>
                        <li><a href="#" onClick={handleNavLinkClick}>Teamet</a></li>
                        <li><a href="#" onClick={handleNavLinkClick}>Kundeservice</a></li>
                        <li><a href="#" onClick={handleNavLinkClick}>Kontakt os</a></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}