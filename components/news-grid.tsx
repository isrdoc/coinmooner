import Image from "next/image"
import Link from "next/link"

interface NewsItem {
  id: number
  title: string
  imageUrl: string
  date: string
  category: string
  slug: string
  sponsored?: boolean
}

export default function NewsGrid() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "How Dogecoin Turned Memes Into a $70 Billion Market Trend",
      imageUrl: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=400&auto=format&fit=crop",
      date: "February 26, 2025",
      category: "News",
      slug: "dogecoin-market-trend",
      sponsored: true,
    },
    {
      id: 2,
      title: "Solo Miner Hits the Jackpot: 3.125 BTC from Block 883181",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400&auto=format&fit=crop",
      date: "February 24, 2025",
      category: "News",
      slug: "solo-miner-jackpot",
    },
    {
      id: 3,
      title: "Japanese Giant SBI Leads the Way with Crypto Growth and Blockchain Expansion",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format&fit=crop",
      date: "February 24, 2025",
      category: "News",
      slug: "sbi-crypto-growth",
    },
    {
      id: 4,
      title: "Navigating the Risks of Web3: A Closer Look at Stablecoins and DeFi Protocols",
      imageUrl: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=400&auto=format&fit=crop",
      date: "February 24, 2025",
      category: "News",
      slug: "web3-risks-stablecoins",
    },
    {
      id: 5,
      title: "Ethereum Prepares for Pectra Update: Test Deployments to Begin in March",
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop",
      date: "February 24, 2025",
      category: "News",
      slug: "ethereum-pectra-update",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 my-8">
      {newsItems.map((item) => (
        <Link key={item.id} href={`/news/${item.slug}`} className="news-card">
          <div className="relative h-48">
            <Image src={item.imageUrl || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-gray-400">Published {item.date}</span>
            </div>
            <h3 className="font-semibold text-md mb-3 line-clamp-3">{item.title}</h3>
            <div>
              <span
                className={`badge ${item.sponsored ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"}`}
              >
                {item.sponsored ? "Sponsored" : item.category}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

