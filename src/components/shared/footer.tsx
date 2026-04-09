import Link from 'next/link'
import { Copyright, Dot } from 'lucide-react'
import { NAV_LINKS } from '@/lib/constants'

function Footer() {
  return (
    <footer className="font-mono py-4 px-4 flex md:flex-row flex-col-reverse md:gap-0 gap-5 items-center justify-between">
      <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-around">
        <Copyright />
        <Dot />
        <p className='font-mono'>Rohit Mondal</p>
        <Dot />
        <p>{new Date().getFullYear()}</p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-1 sm:justify-between">
        {NAV_LINKS.map((link, idx) => (
          <div key={link.path} className='flex items-center gap-1'>
            <Link
              key={link.path}
              href={link.path}
              className="capitalize underline underline-offset-4 text-sm"
            >
              {link.title}
            </Link>
            {idx !== NAV_LINKS.length - 1 && <Dot />}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer