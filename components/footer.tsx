import Image from "next/image"
import Link from "next/link"
import { Send, Twitter, Youtube, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-20">
      <div className="container-custom">
        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Cryptocurrency Ranking */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Cryptocurrency Ranking</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/coins" className="text-gray-400 hover:text-white">
                  List of all coins
                </Link>
              </li>
              <li>
                <Link href="/presales" className="text-gray-400 hover:text-white">
                  Current and upcoming presales
                </Link>
              </li>
              <li>
                <Link href="/submit-coin" className="text-gray-400 hover:text-white">
                  Submit a coin
                </Link>
              </li>
              <li>
                <Link href="/request-update" className="text-gray-400 hover:text-white">
                  Request a token update
                </Link>
              </li>
            </ul>
          </div>

          {/* Advertising */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Advertising</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/advertising" className="text-gray-400 hover:text-white">
                  Ads
                </Link>
              </li>
              <li>
                <Link href="/marketing" className="text-gray-400 hover:text-white">
                  Marketing services
                </Link>
              </li>
              <li>
                <Link href="/email-promotion" className="text-gray-400 hover:text-white">
                  Email promotion
                </Link>
              </li>
            </ul>

            <h3 className="font-bold mt-8 mb-4 uppercase">Audit</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/smart-contract-audit" className="text-gray-400 hover:text-white">
                  Smart contract audit
                </Link>
              </li>
              <li>
                <Link href="/audited-coins" className="text-gray-400 hover:text-white">
                  Audited coins
                </Link>
              </li>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Blog</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/news" className="text-gray-400 hover:text-white">
                  News
                </Link>
              </li>
              <li>
                <Link href="/blog/finance" className="text-gray-400 hover:text-white">
                  Finance
                </Link>
              </li>
              <li>
                <Link href="/blog/defi" className="text-gray-400 hover:text-white">
                  DeFi news
                </Link>
              </li>
              <li>
                <Link href="/blog/dapps" className="text-gray-400 hover:text-white">
                  Dapps
                </Link>
              </li>
              <li>
                <Link href="/blog/gamefi" className="text-gray-400 hover:text-white">
                  GameFi
                </Link>
              </li>
              <li>
                <Link href="/blog/exchange" className="text-gray-400 hover:text-white">
                  Exchange news
                </Link>
              </li>
              <li>
                <Link href="/blog/launchpad" className="text-gray-400 hover:text-white">
                  Launchpad news
                </Link>
              </li>
              <li>
                <Link href="/blog/altcoins" className="text-gray-400 hover:text-white">
                  Altcoins
                </Link>
              </li>
              <li>
                <Link href="/blog/nft" className="text-gray-400 hover:text-white">
                  NFT
                </Link>
              </li>
              <li>
                <Link href="/blog/tutorials" className="text-gray-400 hover:text-white">
                  Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4 uppercase">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/media-kit" className="text-gray-400 hover:text-white">
                  Media kit
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-gray-400 hover:text-white">
                  Contact us
                </Link>
              </li>
            </ul>

            <h3 className="font-bold mt-8 mb-4 uppercase">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms-of-use" className="text-gray-400 hover:text-white">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="/cookie-statement" className="text-gray-400 hover:text-white">
                  Cookie statement
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/operating-entities" className="text-gray-400 hover:text-white">
                  Operating entities
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border py-8 mb-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                  alt="CoinMooner"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <div className="flex gap-4">
                <Link href="https://t.me/CoinMoonerTG" target="_blank" className="text-gray-400 hover:text-white">
                  <Send className="h-5 w-5" />
                </Link>
                <Link href="https://twitter.com/coinmooner" target="_blank" className="text-gray-400 hover:text-white">
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link href="https://youtube.com/coinmooner" target="_blank" className="text-gray-400 hover:text-white">
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link href="https://discord.gg/coinmooner" target="_blank" className="text-gray-400 hover:text-white">
                  <Discord className="h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-gray-400">© CoinMooner.com 2025</span>
              <Link href="/contact-us" className="text-gray-400 hover:text-white flex items-center gap-2">
                <span className="sr-only">Contact Support</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <span>Any questions?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

