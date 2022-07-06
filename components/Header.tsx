import Image from 'next/image'
import Link from 'next/link'
import { HiSearch, HiBell } from 'react-icons/hi'
import { useState, useEffect } from 'react'

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled} && "bg-[#141414]"`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        {/* logo */}
        <Image
          src="/img/netflix_2015_logo.svg"
          width={100}
          height={30}
          alt="Picture of the author"
          className="cursor-pointer object-contain"
        />

        {/* left menu */}
        <ul className="hidden space-x-4 md:flex">
          <li className="header-link">Home</li>
          <li className="header-link">TV Shows</li>
          <li className="header-link">Movies</li>
          <li className="header-link">New & Popular</li>
          <li className="header-link">My List</li>
        </ul>
      </div>

      {/* right menu */}
      <div className="flex items-center space-x-4 text-sm font-light">
        <HiSearch className="hidden h-6 w-6 sm:inline" />
        <p>Kids</p>
        <HiBell className="hidden h-6 w-6 sm:inline" />
        <Link href="/account">
          <img src="/img/avatar.png" width={32} height={32} alt="" className="cursor-pointer rounded" />
        </Link>
      </div>
    </header>
  )
}

export default Header
