import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Share2, Flag, Star } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

interface GamePageProps {
  params: {
    slug: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  // In a real app, you would fetch this data based on the slug
  const game = {
    id: 1,
    name: "BITPREDICTION",
    slug: "bitprediction",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=600&auto=format&fit=crop",
    description:
      "Maximize your crypto earnings with BitPrediction! Trade actively or use automated bots for passive income. Enjoy up to 500% PvP prize pools, low fees for winners, and a top-tier affiliate program. Start growing your portfolio today!",
    longDescription: `
      BitPrediction is a revolutionary crypto prediction platform that combines the excitement of trading with the potential for significant earnings.
      
      ## Key Features

      - **Active Trading**: Make predictions on price movements across multiple cryptocurrencies
      - **Automated Bots**: Set up bots to trade on your behalf based on customizable strategies
      - **PvP Competitions**: Compete against other traders in prize pools with up to 500% returns
      - **Low Fee Structure**: Winners pay minimal fees, making profitable trading even more rewarding
      - **Affiliate Program**: Earn passive income by referring new users to the platform

      ## Tokenomics

      The BITPRED token powers the entire ecosystem:
      - Total Supply: 100,000,000 BITPRED
      - Initial Price: $0.05
      - Token Utility: Platform fees, governance, staking rewards

      ## Roadmap

      - Q1 2025: Mobile app launch
      - Q2 2025: Integration with additional blockchains
      - Q3 2025: Advanced AI prediction tools
      - Q4 2025: Metaverse prediction markets
    `,
    category: "Trading & Prediction",
    platform: "Web, Mobile (Coming Soon)",
    blockchain: "Ethereum, Binance Smart Chain",
    token: "BITPRED",
    launchDate: "January 15, 2025",
    status: "Live",
    website: "https://example.com",
    twitter: "https://twitter.com/example",
    telegram: "https://t.me/example",
    discord: "https://discord.gg/example",
    whitepaper: "https://example.com/whitepaper",
    screenshots: [
      "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=800&auto=format&fit=crop",
    ],
  }

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Games", href: "/games" },
          { label: game.name, href: `/games/${game.slug}` },
        ]}
      />

      <Link href="/games" className="flex items-center gap-2 text-gray-400 hover:text-white mb-6">
        <ArrowLeft className="h-4 w-4" />
        <span>Back to Games</span>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative h-40 w-40 bg-black rounded-lg overflow-hidden shrink-0">
                <Image src={game.imageUrl || "/placeholder.svg"} alt={game.name} fill className="object-cover p-0" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">{game.name}</h1>

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
                  <div className="bg-blue-500/20 text-blue-400 rounded-full px-3 py-1 text-sm">{game.category}</div>
                  <div className="bg-purple-500/20 text-purple-400 rounded-full px-3 py-1 text-sm">
                    {game.blockchain.split(",")[0]}
                  </div>
                  <div className="bg-green-500/20 text-green-400 rounded-full px-3 py-1 text-sm">{game.status}</div>
                </div>

                <p className="mt-4 text-gray-300">{game.description}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link
                    href={game.website}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Website <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={game.twitter}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Twitter <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={game.telegram}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Telegram <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={game.discord}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Discord <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={game.whitepaper}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Whitepaper <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Game Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Category</div>
                  <div className="font-medium">{game.category}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Platform</div>
                  <div className="font-medium">{game.platform}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Blockchain</div>
                  <div className="font-medium">{game.blockchain}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Token</div>
                  <div className="font-medium">{game.token}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Launch Date</div>
                  <div className="font-medium">{game.launchDate}</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg">
                  <div className="text-gray-400 text-sm">Status</div>
                  <div className="font-medium">{game.status}</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About {game.name}</h2>
              <div className="prose prose-invert max-w-none">
                {game.longDescription.split("\n\n").map((paragraph, index) => {
                  if (paragraph.startsWith("## ")) {
                    return (
                      <h3 key={index} className="text-lg font-semibold mt-4 mb-2">
                        {paragraph.replace("## ", "")}
                      </h3>
                    )
                  } else if (paragraph.startsWith("- ")) {
                    return (
                      <ul key={index} className="list-disc pl-5 my-2">
                        {paragraph.split("\n").map((item, i) => (
                          <li key={i} className="text-gray-300">
                            {item.replace("- ", "")}
                          </li>
                        ))}
                      </ul>
                    )
                  } else {
                    return (
                      <p key={index} className="text-gray-300 mb-4">
                        {paragraph}
                      </p>
                    )
                  }
                })}
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {game.screenshots.map((screenshot, index) => (
                  <div key={index} className="relative h-48 rounded-lg overflow-hidden">
                    <Image
                      src={screenshot || "/placeholder.svg"}
                      alt={`${game.name} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={game.website} target="_blank" rel="noreferrer" className="btn-primary text-center flex-1 py-3">
                Play Now
              </a>
              <a
                href={game.whitepaper}
                target="_blank"
                rel="noreferrer"
                className="btn-outline text-center flex-1 py-3"
              >
                Read Whitepaper
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Game Details</h2>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Game Name</div>
                <div className="font-medium">{game.name}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Category</div>
                <div className="font-medium">{game.category}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Blockchain</div>
                <div className="font-medium">{game.blockchain}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Token</div>
                <div className="font-medium">{game.token}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Launch Date</div>
                <div className="font-medium">{game.launchDate}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Status</div>
                <div className="font-medium">{game.status}</div>
              </div>
            </div>

            <div className="border-t border-border mt-6 pt-6">
              <h3 className="font-semibold mb-3">Share this Game</h3>
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

