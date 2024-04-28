'use client'

import Image from "next/image"
import logo from '@/app/assets/logo.png'

interface HeaderProps {
    className?: string
}

const Header = ({className}: HeaderProps): React.ReactNode => {

    const handleLogoClick = () => {
        window.location.href = '/'
    }

    return(
        <div className={`${className}`} >
            <Image src={logo} alt="logo" className="w-24 h-26 hover:cursor-pointer" onClick={handleLogoClick}></Image>
        </div>
    )
}

export default Header