'use client'
import Image from "next/image"
import logo from '@/app/assets/logo.png'

interface HeaderProps {
    className?: string
}

const Header = ({className}: HeaderProps): React.ReactNode => {
    return(
        <div className={`${className}`}>
            <Image src={logo} alt="logo" className="w-24 h-26"></Image>
        </div>
    )
}

export default Header