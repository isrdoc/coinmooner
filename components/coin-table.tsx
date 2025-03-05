"use client"
import Image from "next/image"
import Link from "next/link"

interface Coin {
  id: number
  rank: number
  name: string
  symbol: string
  logo: string
  chain: string
  status: string
  price: string
  marketCap: string
  volume: string
  launchDate: string
  votes: number
  isHot?: boolean
}

export default function CoinTable() {
  const coins: Coin[] = [
    {
      id: 1,
      rank: 1,
      name: "Solaxy",
      symbol: "SOLX",
      logo: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=40&auto=format&fit=crop",
      chain: "ETH",
      status: "Presale",
      price: "$0.000015",
      marketCap: "$0",
      volume: "$0",
      launchDate: "in a month",
      votes: 215019,
      isHot: true,
    },
    {
      id: 2,
      rank: 2,
      name: "Mind of Pepe",
      symbol: "MIND",
      logo: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=40&auto=format&fit=crop",
      chain: "ETH",
      status: "Presale",
      price: "$0.000015",
      marketCap: "$0",
      volume: "$0",
      launchDate: "in 2 months",
      votes: 207033,
    },
    {
      id: 3,
      rank: 3,
      name: "Bitcoin Bull",
      symbol: "BITBULL",
      logo: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=40&auto=format&fit=crop",
      chain: "ETH",
      status: "Presale",
      price: "$0.000015",
      marketCap: "$0",
      volume: "$0",
      launchDate: "in 2 months",
      votes: 205001,
    },
    {
      id: 4,
      rank: 4,
      name: "Bitcoin Pepe",
      symbol: "BPEP",
      logo: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=40&auto=format&fit=crop",
      chain: "ETH",
      status: "Presale",
      price: "$0.000015",
      marketCap: "$0",
      volume: "$0",
      launchDate: "in 2 months",
      votes: 195004,
      isHot: true,
    },
    {
      id: 5,
      rank: 5,
      name: "Beat Woke",
      symbol: "WOKE",
      logo: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=40&auto=format&fit=crop",
      chain: "ETH",
      status: "Presale",
      price: "$0.000015",
      marketCap: "$0",
      volume: "$0",
      launchDate: "in 21 days",
      votes: 180042,
    },
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left text-gray-400">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">Name</th>
            <th className="px-4 py-3">Chain</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Launch Date</th>
            <th className="px-4 py-3">Price</th>
            <th className="px-4 py-3">Market Cap</th>
            <th className="px-4 py-3">Volume</th>
            <th className="px-4 py-3">Votes</th>
            <th className="px-4 py-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="border-t border-border hover:bg-card/50 transition-colors">
              <td className="px-4 py-4 flex items-center">
                {coin.rank}
                {coin.isHot && <span className="ml-2">🔥</span>}
              </td>
              <td className="px-4 py-4">
                <Link
                  href={`/coins/${coin.symbol.toLowerCase()}`}
                  className="flex items-center gap-2 hover:text-primary-light"
                >
                  <Image
                    src={coin.logo || "/placeholder.svg"}
                    alt={coin.name}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-medium">{coin.name}</div>
                    <div className="text-xs text-gray-400">{coin.symbol}</div>
                  </div>
                </Link>
              </td>
              <td className="px-4 py-4">
                <div className="bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 text-xs w-fit">{coin.chain}</div>
              </td>
              <td className="px-4 py-4">
                <div className="bg-purple-500/20 text-purple-400 rounded-full px-2 py-1 text-xs w-fit">
                  {coin.status}
                </div>
              </td>
              <td className="px-4 py-4">{coin.launchDate}</td>
              <td className="px-4 py-4">{coin.price}</td>
              <td className="px-4 py-4">{coin.marketCap}</td>
              <td className="px-4 py-4">{coin.volume}</td>
              <td className="px-4 py-4">{coin.votes.toLocaleString()}</td>
              <td className="px-4 py-4">
                <button className="vote-btn">Vote</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

