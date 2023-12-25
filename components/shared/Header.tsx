import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center md:justify-between justify-center">
        <Link href="/" className="w-72">
          <Image
            src="/assets/images/logo.svg"
            width={235}
            height={55}
            alt="KTL logo"
            
          />
        </Link>

        

        <div className="md:flex w-32 justify-end gap-3 hidden">
         
          
            <Button asChild className="rounded-full button bg-sky-600 hover:bg-sky-400" size="lg">
              <Link href="#contact">Contact</Link>
            </Button>
        
        </div>
      </div>
    </header>
  )
}

export default Header