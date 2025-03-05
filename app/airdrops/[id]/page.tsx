import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Calendar, Award, Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

interface AirdropPageProps {
  params: {
    id: string
  }
}

export default function AirdropPage({ params }: AirdropPageProps) {
  // In a real app, you would fetch this data based on the ID
  const airdrop = {
    id: 1,
    name: "KungFu Kitty",
    description: "Mint, train, battle & stake KungFu Kitty NFT warriors to earn rewards on ETH, SOL & TONI 🔥🥋",
    longDescription: `
      KungFu Kitty is an innovative NFT project that combines gaming, staking, and rewards across multiple blockchains.
      
      By participating in this airdrop, you'll have the chance to earn $FUNIT tokens, which can be used within the KungFu Kitty ecosystem for various purposes including upgrading your NFT warriors, purchasing in-game items, and participating in governance decisions.
      
      The project features:
      - Cross-chain compatibility (ETH, SOL, TONI)
      - Play-to-earn mechanics
      - NFT staking with rewards
      - Community-driven development
      
      Join the KungFu Kitty community today and start your journey to becoming a master warrior!
    `,
    logo: "/placeholder.svg?height=200&width=200",
    status: "Active",
    endDate: "2025-04-02",
    reward: "100 $FUNIT Tokens + Earn More...",
    chain: "ETH",
    website: "https://example.com",
    twitter: "https://twitter.com/example",
    telegram: "https://t.me/example",
    discord: "https://discord.gg/example",
    steps: [
      "Connect your wallet to the KungFu Kitty website",
      "Complete social tasks (Follow Twitter, Join Telegram)",
      "Mint a free KungFu Kitty NFT (gas fees apply)",
      "Stake your NFT to start earning $FUNIT tokens",
      "Refer friends to earn additional rewards",
    ],
  }

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Airdrops", href: "/airdrops" },
          { label: airdrop.name, href: `/airdrops/${airdrop.id}` },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-card rounded-lg p-6 border border-border">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Image
                src={airdrop.logo || "/placeholder.svg"}
                alt={airdrop.name}
                width={120}
                height={120}
                className="rounded-lg"
              />

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h1 className="text-2xl font-bold">{airdrop.name}</h1>

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      airdrop.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                    }`}
                  >
                    {airdrop.status}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mt-3">
                  <div className="bg-blue-500/20 text-blue-400 rounded-full px-3 py-1 text-sm">{airdrop.chain}</div>
                </div>

                <p className="mt-4 text-gray-300">{airdrop.description}</p>

                <div className="flex flex-wrap gap-3 mt-4">
                  <Link
                    href={airdrop.website}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Website <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={airdrop.twitter}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Twitter <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={airdrop.telegram}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Telegram <ExternalLink className="h-3 w-3" />
                  </Link>
                  <Link
                    href={airdrop.discord}
                    target="_blank"
                    className="flex items-center gap-1 text-primary hover:text-primary-light"
                  >
                    Discord <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-card/50 p-4 rounded-lg flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400">End Date</div>
                  <div className="font-medium">{airdrop.endDate}</div>
                </div>
              </div>

              <div className="bg-card/50 p-4 rounded-lg flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400">Reward</div>
                  <div className="font-medium">{airdrop.reward}</div>
                </div>
              </div>

              <div className="bg-card/50 p-4 rounded-lg flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-sm text-gray-400">Status</div>
                  <div className="font-medium">{airdrop.status}</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">About {airdrop.name}</h2>
              <div className="text-gray-300 whitespace-pre-line">{airdrop.longDescription}</div>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">How to Participate</h2>
              <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                {airdrop.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>

            <div className="mt-8">
              <a
                href={airdrop.website}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-center py-3 block w-full md:w-auto md:inline-block px-8"
              >
                Participate in Airdrop
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg p-6 border border-border sticky top-4">
            <h2 className="text-xl font-semibold mb-4">Airdrop Details</h2>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-400">Project Name</div>
                <div className="font-medium">{airdrop.name}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Blockchain</div>
                <div className="font-medium">{airdrop.chain}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">End Date</div>
                <div className="font-medium">{airdrop.endDate}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Reward</div>
                <div className="font-medium">{airdrop.reward}</div>
              </div>

              <div>
                <div className="text-sm text-gray-400">Status</div>
                <div className="font-medium">{airdrop.status}</div>
              </div>
            </div>

            <div className="border-t border-border mt-6 pt-6">
              <h3 className="font-semibold mb-3">Share this Airdrop</h3>
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

