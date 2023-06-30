import { NavLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthProviders from './AuthProviders';

function Navbar() {
    const session = null;

  return (
    <nav className="flexBetween navbar">
        <div className='flex-1 flexStart gap-10'>
            <Link href="/">
                <Image
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="Flexibble"    
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7"></ul>
                {NavLinks.map((link) => (
                   <Link 
                     href={link.href}
                     key={link.key}
                    >
                        {link.text}
                    </Link>
                ))}
        </div>
        <div className="flexCenter gap-4">
            {session ? (
                <>
                    UserPhoto

                    <Link href="/create-project">
                        Share work
                    </Link>
                </>
            ) : (
                <AuthProviders />
            )}
        </div>
    </nav>
  )
}

export default Navbar