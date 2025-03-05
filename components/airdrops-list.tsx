"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

interface Airdrop {
  id: number
  name: string
  description: string
  logo: string
  status: "Active" | "N/A" | "Ended"
  endDate: string
  reward: string
  chain?: string
  website?: string
  twitter?: string
  telegram?: string
}

export default function AirdropsList() {
  const [searchTerm, setSearchTerm] = useState("")

  const airdrops: Airdrop[] = [
    {
      id: 1,
      name: "KungFu Kitty",
      description: "Mint, train, battle & stake KungFu Kitty NFT warriors to earn rewards on ETH, SOL & TONI 🔥🥋",
      logo: "/placeholder.svg?height=50&width=50",
      status: "Active",
      endDate: "2025-04-02",
      reward: "100 $FUNIT Tokens + Earn More...",
      chain: "ETH",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
    {
      id: 2,
      name: "TAPS Token",
      description: "Airdrop expanding the community and adoption by distributing 100,000 TAPS to new holders.",
      logo: "/placeholder.svg?height=50&width=50",
      status: "Active",
      endDate: "2025-04-13",
      reward: "15 TAPS",
      chain: "ETH",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
    {
      id: 3,
      name: "Our Favorite Tall Guy",
      description: "Our Favorite Tall Guy. Buy, hold, and shout out loud to get our favorite guy to recognize us!",
      logo: "/placeholder.svg?height=50&width=50",
      status: "N/A",
      endDate: "2025-02-28",
      reward: "10000",
      chain: "BSC",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
    {
      id: 4,
      name: "BullSheet",
      description: "Only in the darkness of a BULLSHEET market you can see a ray of light that brings joy. $BULL",
      logo: "/placeholder.svg?height=50&width=50",
      status: "N/A",
      endDate: "2025-02-05",
      reward: "1000",
      chain: "ETH",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
    {
      id: 5,
      name: "Billy The Badger",
      description: "Billy The Badger is a community-driven meme coin with a focus on charity and environmental causes.",
      logo: "/placeholder.svg?height=50&width=50",
      status: "N/A",
      endDate: "2025-02-15",
      reward: "5000 $BILLY",
      chain: "SOL",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
    {
      id: 6,
      name: "Asset Avenue",
      description: "Asset Avenue transforms real estate investing with blockchain and AI.",
      logo: "/placeholder.svg?height=50&width=50",
      status: "N/A",
      endDate: "2025-03-01",
      reward: "$250",
      chain: "ETH",
      website: "https://example.com",
      twitter: "https://twitter.com/example",
      telegram: "https://t.me/example",
    },
  ]

  return (
    <div className="overflow-x-auto bg-card/30 rounded-lg border border-border">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-400 border-b border-border">
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">End Date</th>
            <th className="px-4 py-3">Reward</th>
          </tr>
        </thead>
        <tbody>
          {airdrops.map((airdrop) => (
            <tr key={airdrop.id} className="border-t border-border hover:bg-card/50 transition-colors">
              <td className="px-4 py-4">
                <Link href={`/airdrops/${airdrop.id}`} className="flex items-start gap-3 group">
                  <Image
                    src={airdrop.logo || "/placeholder.svg"}
                    alt={airdrop.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium group-hover:text-primary-light transition-colors">{airdrop.name}</div>
                    <p className="text-sm text-gray-400 mt-1 max-w-xl">{airdrop.description}</p>
                    {airdrop.chain && (
                      <div className="mt-2">
                        <span className="bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 text-xs">
                          {airdrop.chain}
                        </span>
                      </div>
                    )}
                  </div>
                </Link>
              </td>
              <td className="px-4 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm ${
                    airdrop.status === "Active" ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"
                  }`}
                >
                  {airdrop.status}
                </span>
              </td>
              <td className="px-4 py-4 text-gray-300">{airdrop.endDate}</td>
              <td className="px-4 py-4 text-gray-300">{airdrop.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

