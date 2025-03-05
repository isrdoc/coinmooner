"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ChevronDown } from "lucide-react"

export default function Header() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  return (
    <header className="py-4 bg-background border-b border-border">
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
              alt="CoinMooner"
              width={200}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex space-x-1">
            <Link href="/" className="nav-link">
              Coins
            </Link>
            <Link href="/presales" className="nav-link">
              Presales
            </Link>
            <Link href="/airdrops" className="nav-link">
              Airdrops
            </Link>
            <Link href="/blog" className="nav-link">
              Blog
            </Link>
            <Link href="/games" className="nav-link">
              Games
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <Link href="/contact-us">
                <button className="nav-link flex items-center gap-1" onClick={() => setIsCompanyOpen(!isCompanyOpen)}>
                  Company
                  <ChevronDown className="h-4 w-4" />
                </button>
              </Link>

              {isCompanyOpen && (
                <div className="absolute top-full left-0 w-48 bg-[#1a1b2e] border border-border rounded-md shadow-lg py-1 z-50">
                  <Link href="/contact-us" className="block px-4 py-2 text-sm text-white hover:bg-primary/10">
                    Contact Us
                  </Link>
                  <Link href="/advertise" className="block px-4 py-2 text-sm text-white hover:bg-primary/10">
                    Advertise
                  </Link>
                  <Link href="/media-kit" className="block px-4 py-2 text-sm text-white hover:bg-primary/10">
                    Media Kit
                  </Link>
                  <Link href="/partners" className="block px-4 py-2 text-sm text-white hover:bg-primary/10">
                    Partners
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Link href="/get-listed" className="btn-primary w-28">
              Get Listed
            </Link>
            <Link href="/login" className="hidden md:block text-white hover:text-primary-light">
              Login
            </Link>
            <Link href="/register" className="hidden md:block text-white hover:text-primary-light">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

