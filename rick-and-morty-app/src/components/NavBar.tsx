"use client"

import { navLinks } from '@/constances'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavBar = () => {
  const activeLink = usePathname()

  console.log(activeLink);
  
  return (
        <nav className='sticky top-0 z-10 bg-accent/80 backdrop-blur-md'>
          <ul className='container grid grid-cols-3 text-center py-2.5 font-semibold text-lg'>
            {navLinks.map(({id, href, name}) => (
              <Link key={id} href={href} className={cn(href === activeLink ? 'text-primary' : '')}>
                {name}
              </Link>
            ))}
          </ul>
        </nav>
  )
}

export default NavBar;