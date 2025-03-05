import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category.charAt(0).toUpperCase() + params.category.slice(1)

  // Articles in this category
  const categoryArticles = [
    {
      id: 1,
      title: "How Dogecoin Turned Memes Into a $70 Billion Market Trend",
      slug: "how-dogecoin-turned-memes-into-market-trend",
      excerpt:
        "From a joke cryptocurrency to a market phenomenon, Dogecoin has paved the way for meme coins to become a significant sector in the crypto market.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "Analysis",
      date: "February 26, 2025",
      readTime: 5,
      author: "Crypto Analyst",
    },
    {
      id: 2,
      title: "Solo Miner Hits the Jackpot: 3.125 BTC from Block 883181",
      slug: "solo-miner-hits-jackpot-btc-block-883181",
      excerpt: "The role of luck in crypto mining: One miner's unbelievable win with a solo mining operation.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "News",
      date: "February 24, 2025",
      readTime: 3,
      author: "Crypto Reporter",
    },
    {
      id: 3,
      title: "Japanese Giant SBI Leads the Way with Crypto Growth and Blockchain Plan",
      slug: "japanese-giant-sbi-leads-crypto-growth-blockchain-plan",
      excerpt: "SBI Holdings continues to expand its cryptocurrency operations and blockchain initiatives across Asia.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "News",
      date: "February 24, 2025",
      readTime: 3,
      author: "Finance Editor",
    },
    {
      id: 4,
      title: "Navigating the Risks of Web3: A Closer Look at Stablecoins and DeFi Protocols",
      slug: "navigating-risks-web3-stablecoins-defi-protocols",
      excerpt:
        "As Web3 adoption grows, understanding the risks associated with stablecoins and DeFi becomes increasingly important.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "Education",
      date: "February 24, 2025",
      readTime: 4,
      author: "DeFi Researcher",
    },
    {
      id: 5,
      title: "Ethereum Prepares for Pectra Update: Test Deployments to Begin in March",
      slug: "ethereum-prepares-pectra-update-test-deployments-march",
      excerpt: "The next major Ethereum upgrade is on the horizon with test deployments scheduled for next month.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "News",
      date: "February 23, 2025",
      readTime: 3,
      author: "Blockchain Developer",
    },
    {
      id: 6,
      title: "Bitcoin ETFs See Record Inflows as Institutional Interest Continues to Grow",
      slug: "bitcoin-etfs-record-inflows-institutional-interest-grows",
      excerpt:
        "Spot Bitcoin ETFs are experiencing unprecedented demand as more institutional investors enter the cryptocurrency market.",
      imageUrl: "/placeholder.svg?height=300&width=500",
      category: "Markets",
      date: "February 23, 2025",
      readTime: 4,
      author: "Investment Analyst",
    },
  ].filter((article) => article.category.toLowerCase() === params.category.toLowerCase())

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: category, href: `/blog/category/${params.category}` },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-2">{category} Articles</h1>
        <p className="text-gray-400 mb-8">Browse our latest articles in the {category.toLowerCase()} category.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.length > 0 ? (
            categoryArticles.map((article) => (
              <div
                key={article.id}
                className="bg-card/30 rounded-lg overflow-hidden border border-border h-full flex flex-col"
              >
                <Link href={`/blog/${article.slug}`} className="block">
                  <div className="relative h-48 w-full">
                    <Image
                      src={article.imageUrl || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>

                <div className="p-4 flex-1 flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="badge bg-blue-500/20 text-blue-400">{article.category}</span>
                    <div className="flex items-center text-gray-400 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {article.readTime} MIN READ
                    </div>
                  </div>

                  <Link href={`/blog/${article.slug}`} className="block">
                    <h3 className="font-bold mb-2 hover:text-primary-light transition-colors">{article.title}</h3>
                  </Link>

                  <p className="text-sm text-gray-300 mb-4 flex-1">{article.excerpt}</p>

                  <div className="mt-auto flex justify-between items-center text-xs">
                    <span className="text-gray-400">{article.date}</span>
                    <Link href={`/blog/${article.slug}`} className="text-primary hover:text-primary-light">
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-medium mb-2">No articles found</h3>
              <p className="text-gray-400">There are currently no articles in the {category.toLowerCase()} category.</p>
            </div>
          )}
        </div>

        {categoryArticles.length > 0 && (
          <div className="mt-8 flex justify-center">
            <div className="flex gap-2">
              <button
                className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors disabled:opacity-50"
                disabled
              >
                Previous
              </button>
              <button className="px-3 py-1 bg-primary rounded-md hover:bg-primary-light transition-colors">1</button>
              <button className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors">Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

