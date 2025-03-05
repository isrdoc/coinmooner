"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, ArrowUpDown } from "lucide-react"

interface Presale {
  id: number
  rank: number
  name: string
  symbol: string
  logo: string
  chain: string
  marketCap: string
  price: string
  volume: string
  volume24h: string
  launchDate: string
  votes: number
  votes24h: number
  isNew?: boolean
  isHot?: boolean
}

interface PresaleTableProps {
  variant?: "default" | "compact"
}

export default function PresaleTable({ variant = "default" }: PresaleTableProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortField, setSortField] = useState<string>("votes")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const presales: Presale[] = [
    {
      id: 1,
      rank: 1,
      name: "Solaxy",
      symbol: "SOLX",
      logo: "https://img.coinmooner.com/QaQ0tAkWeYMZ39PbABHJKBdA3ho=/512x0/https://cdn.coinmooner.com/coins/solx.png",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "Mar 04, 2025",
      votes: 215019,
      votes24h: 2,
      isHot: true,
    },
    {
      id: 2,
      rank: 2,
      name: "Mind of Pepe",
      symbol: "MIND",
      logo: "https://img.coinmooner.com/QaQ0tAkWeYMZ39PbABHJKBdA3ho=/512x0/https://cdn.coinmooner.com/coins/mind.png",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "Mar 04, 2025",
      votes: 207033,
      votes24h: 1,
    },
    {
      id: 3,
      rank: 3,
      name: "Bitcoin Bull",
      symbol: "BITBULL",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 2 months",
      votes: 205001,
      votes24h: 0,
    },
    {
      id: 4,
      rank: 4,
      name: "Bitcoin Pepe",
      symbol: "BPEP",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 2 months",
      votes: 195004,
      votes24h: 0,
      isHot: true,
    },
    {
      id: 5,
      rank: 5,
      name: "Best Wallet",
      symbol: "BEST",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 27 days",
      votes: 189014,
      votes24h: 0,
    },
    {
      id: 6,
      rank: 6,
      name: "Frog Knox",
      symbol: "FROK",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 2 months",
      votes: 187001,
      votes24h: 0,
      isHot: true,
    },
    {
      id: 7,
      rank: 7,
      name: "Meme Index",
      symbol: "MEMEX",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "Mar 04, 2025",
      votes: 184013,
      votes24h: 0,
    },
    {
      id: 8,
      rank: 8,
      name: "Catslap",
      symbol: "SLAP",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 2 months",
      votes: 180042,
      votes24h: 0,
    },
    {
      id: 9,
      rank: 9,
      name: "HarryTheHippo",
      symbol: "HIPO",
      logo: "/placeholder.svg?height=40&width=40",
      chain: "ETH",
      marketCap: "—",
      price: "—",
      volume: "—",
      volume24h: "—",
      launchDate: "in 3 months",
      votes: 177027,
      votes24h: 0,
    },
  ]

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortField(field)
      setSortDirection("desc")
    }
  }

  const filteredPresales = presales
    .filter(
      (presale) =>
        presale.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        presale.symbol.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      if (sortField === "votes") {
        return sortDirection === "asc" ? a.votes - b.votes : b.votes - a.votes
      }
      if (sortField === "votes24h") {
        return sortDirection === "asc" ? a.votes24h - b.votes24h : b.votes24h - a.votes24h
      }
      if (sortField === "name") {
        return sortDirection === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
      }
      return 0
    })

  return (
    <div className="mb-10">
      {variant === "default" && (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search presales..."
              className="bg-[#151429] px-4 py-2 rounded-md pl-10 w-full focus:outline-none focus:ring-1 focus:ring-[#6C4ED9] border border-[#2D2B52]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#151429] rounded-md hover:bg-[#1A1832] transition-colors border border-[#2D2B52]">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>

            <select
              className="bg-[#151429] px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#6C4ED9] appearance-none cursor-pointer border border-[#2D2B52]"
              defaultValue="all"
            >
              <option value="all">All Chains</option>
              <option value="eth">Ethereum</option>
              <option value="bsc">Binance Smart Chain</option>
              <option value="sol">Solana</option>
              <option value="arb">Arbitrum</option>
            </select>
          </div>
        </div>
      )}

      <div className="overflow-x-auto bg-[#151429] rounded-lg border border-[#2D2B52]">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-left text-gray-400 border-b border-[#2D2B52]">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">
                <button className="flex items-center gap-1 hover:text-white" onClick={() => handleSort("name")}>
                  Name
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3">Chain</th>
              {variant === "default" && (
                <>
                  <th className="px-4 py-3">Market Cap</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Volume</th>
                  <th className="px-4 py-3">24h</th>
                </>
              )}
              <th className="px-4 py-3">Launch Date</th>
              <th className="px-4 py-3">
                <button className="flex items-center gap-1 hover:text-white" onClick={() => handleSort("votes")}>
                  Votes
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3">
                <button className="flex items-center gap-1 hover:text-white" onClick={() => handleSort("votes24h")}>
                  Votes 24h
                  <ArrowUpDown className="h-3 w-3" />
                </button>
              </th>
              <th className="px-4 py-3">Vote</th>
            </tr>
          </thead>
          <tbody>
            {filteredPresales.map((presale, index) => (
              <tr key={presale.id} className="border-t border-[#2D2B52] hover:bg-[#1A1832] transition-colors">
                <td className="px-4 py-4 flex items-center">
                  {index + 1}
                  {presale.isHot && <span className="ml-2">🔥</span>}
                </td>
                <td className="px-4 py-4">
                  <Link
                    href={`/presales/${presale.symbol.toLowerCase()}`}
                    className="flex items-center gap-2 hover:text-[#6C4ED9]"
                  >
                    <Image
                      src={presale.logo || "/placeholder.svg"}
                      alt={presale.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-medium">{presale.name}</div>
                      <div className="text-xs text-gray-400">{presale.symbol}</div>
                    </div>
                  </Link>
                </td>
                <td className="px-4 py-4">
                  <div className="bg-blue-500/20 text-blue-400 rounded-full px-2 py-1 text-xs w-fit">
                    {presale.chain}
                  </div>
                </td>
                {variant === "default" && (
                  <>
                    <td className="px-4 py-4">
                      <div className="bg-purple-500/20 text-purple-400 rounded-full px-2 py-1 text-xs w-fit">
                        Presale
                      </div>
                    </td>
                    <td className="px-4 py-4">{presale.price}</td>
                    <td className="px-4 py-4">{presale.volume}</td>
                    <td className="px-4 py-4">{presale.volume24h}</td>
                  </>
                )}
                <td className="px-4 py-4">{presale.launchDate}</td>
                <td className="px-4 py-4">{presale.votes.toLocaleString()}</td>
                <td className="px-4 py-4">{presale.votes24h}</td>
                <td className="px-4 py-4">
                  <button className="bg-[#6C4ED9] hover:bg-[#8468E3] text-white px-4 py-1.5 rounded-md text-sm transition-colors">
                    Vote
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Showing {filteredPresales.length} of {presales.length} presales
        </div>

        <div className="flex gap-2">
          <button
            className="px-3 py-1 bg-[#151429] rounded-md hover:bg-[#1A1832] transition-colors disabled:opacity-50 border border-[#2D2B52]"
            disabled
          >
            Previous
          </button>
          <button className="px-3 py-1 bg-[#6C4ED9] rounded-md hover:bg-[#8468E3] transition-colors">1</button>
          <button className="px-3 py-1 bg-[#151429] rounded-md hover:bg-[#1A1832] transition-colors border border-[#2D2B52]">
            2
          </button>
          <button className="px-3 py-1 bg-[#151429] rounded-md hover:bg-[#1A1832] transition-colors border border-[#2D2B52]">
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

