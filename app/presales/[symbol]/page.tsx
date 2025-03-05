import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Share2, Flag, Star } from "lucide-react"

interface PresalePageProps {
  params: {
    symbol: string
  }
}

export default function PresalePage({ params }: PresalePageProps) {
  // In a real app, you would fetch this data based on the symbol
  const presale = {
    name: "Solaxy",
    symbol: "SOLX",
    logo: "/placeholder.svg?height=200&width=200",
    description: "The first ever Solana Layer 2 presale. Solaxy explodes with 7 million raised so far...",
    chain: "ETH",
    presaleStage: "Stage 2 of 3",
    presalePrice: "$0.000015",
    launchPrice: "$0.000025",
    softCap: "$500,000",
    hardCap: "$10,000,000",
    raised: "$7,000,000",
    launchDate: "in a month",
    website: "https://example.com",
    telegram: "https://t.me/example",
    twitter: "https://twitter.com/example",
    whitepaper: "https://example.com/whitepaper",
    votes: 215019,
    votes24h: 2,
  }

  const progress = (7000000 / 10000000) * 100 // 70%

  return (
    <div className="container-custom py-6">
      <Link href="/presales" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Presales</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Image
                src={presale.logo || "/placeholder.svg"}
                alt={presale.name}
                width={100}
                height={100}
                className="rounded-lg"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">
                    {presale.name} ({presale.symbol})
                  </h1>

                  <div className="flex gap-2">
                    <button className="p-2 bg-card/50 rounded-full hover:bg-card/80 transition-colors">
                      <Share2 className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-card/50 rounded-full hover:bg-card/80 transition-colors">
                      <Star className="h-5 w-5" />
                    </button>
                    <button className="p-2 bg-card/50 rounded-full hover:bg-card/80 transition-colors">
                      <Flag className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="bg-blue-500/20 text-blue-400 rounded-full px-3 py-1 text-sm">{presale.chain}</div>
                  <div className="bg-purple-500/20 text-purple-400 rounded-full px-3 py-1 text-sm">Presale</div>
                  <div className="bg-green-500/20 text-green-400 rounded-full px-3 py-1 text-sm">
                    {presale.presaleStage}
                  </div>
                </div>

                <p className="mt-4 text-gray-300">{presale.description}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link
                    href={presale.website}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Website <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={presale.telegram}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Telegram <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={presale.twitter}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Twitter <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={presale.whitepaper}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Whitepaper <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Presale Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Presale Price</div>
                  <div className="font-medium">{presale.presalePrice}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Launch Price</div>
                  <div className="font-medium">{presale.launchPrice}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Soft Cap</div>
                  <div className="font-medium">{presale.softCap}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Hard Cap</div>
                  <div className="font-medium">{presale.hardCap}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Launch Date</div>
                  <div className="font-medium">{presale.launchDate}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Chain</div>
                  <div className="font-medium">{presale.chain}</div>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex justify-between mb-2">
                  <div className="text-gray-400">Raised: {presale.raised}</div>
                  <div className="text-gray-400">Hard Cap: {presale.hardCap}</div>
                </div>
                <div className="w-full bg-card/50 rounded-full h-4">
                  <div className="bg-primary h-4 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="text-right mt-1 text-sm text-gray-400">{progress}% Complete</div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://example.com/buy"
                  target="_blank"
                  className="btn-primary text-center flex-1 py-3"
                  rel="noreferrer"
                >
                  Buy Presale
                </a>
                <button className="btn-outline flex-1 py-3">Vote for {presale.symbol}</button>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border mt-6">
            <h2 className="text-xl font-semibold mb-4">About {presale.name}</h2>
            <p className="text-gray-300 mb-4">
              {presale.name} is a revolutionary new cryptocurrency project that aims to transform the way we think about
              blockchain technology. With a focus on scalability, security, and user experience, {presale.name} is
              positioned to become a leading player in the crypto space.
            </p>
            <p className="text-gray-300 mb-4">
              The project features a unique tokenomics model designed to reward long-term holders while maintaining
              price stability. With a dedicated team of experienced developers and a clear roadmap for future
              development, {presale.name} offers an exciting opportunity for early investors.
            </p>
            <p className="text-gray-300">
              Join the {presale.name} community today and be part of the next big thing in cryptocurrency!
            </p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Vote for {presale.symbol}</h2>

            <div className="flex justify-between mb-6">
              <div>
                <div className="text-2xl font-bold">{presale.votes.toLocaleString()}</div>
                <div className="text-gray-400 text-sm">Total Votes</div>
              </div>
              <div>
                <div className="text-2xl font-bold">{presale.votes24h}</div>
                <div className="text-gray-400 text-sm">Votes (24h)</div>
              </div>
            </div>

            <button className="w-full btn-primary py-3 mb-4">Vote for {presale.symbol}</button>

            <div className="text-center text-sm text-gray-400 mb-6">You can vote once every 24 hours</div>

            <div className="border-t border-border pt-6">
              <h3 className="font-semibold mb-3">Share this Presale</h3>
              <div className="flex gap-2">
                <button className="flex-1 p-2 bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-md hover:bg-[#1DA1F2]/30 transition-colors">
                  Twitter
                </button>
                <button className="flex-1 p-2 bg-[#0088cc]/20 text-[#0088cc] rounded-md hover:bg-[#0088cc]/30 transition-colors">
                  Telegram
                </button>
                <button className="flex-1 p-2 bg-[#25D366]/20 text-[#25D366] rounded-md hover:bg-[#25D366]/30 transition-colors">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

