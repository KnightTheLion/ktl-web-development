import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-72">
          <Image
            src="/assets/images/logo.svg"
            width={235}
            height={55}
            alt="KTL logo"
          />
        </Link>

        

        <div className="flex w-32 justify-end gap-3">
         
          
            <Button asChild className="rounded-full" size="lg">
              <Link href="#contact">Contact</Link>
            </Button>
        
        </div>
      </div>
    </header>
  )
}

export default Header