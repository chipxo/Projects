import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
        <nav className='sticky top-0 z-10 bg-primary'>
          <ul className='container grid grid-cols-3 text-center py-2.5 divide-x-2'>
            <Link href={"/episodes"} >Episodes</Link>
            <Link href={"/characters"} >Characters</Link>
            <Link href={"/locations"} >Locations</Link>
          </ul>
        </nav>
  )
}

export default NavBar;