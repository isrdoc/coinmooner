import Image from "next/image"
import Link from "next/link"
import { Clock } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export default function BlogPage() {
  // Featured article
  const featuredArticle = {
    id: 1,
    title: "How Dogecoin Turned Memes Into a $70 Billion Market Trend",
    slug: "how-dogecoin-turned-memes-into-market-trend",
    excerpt:
      "From a joke cryptocurrency to a market phenomenon, Dogecoin has paved the way for meme coins to become a significant sector in the crypto market.",
    imageUrl: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1200&auto=format&fit=crop",
    category: "Analysis",
    date: "February 26, 2025",
    readTime: 5,
    author: "Crypto Analyst",
    sponsored: true,
  }

  // Recent articles
  const recentArticles = [
    {
      id: 2,
      title: "Solo Miner Hits the Jackpot: 3.125 BTC from Block 883181",
      slug: "solo-miner-hits-jackpot-btc-block-883181",
      excerpt: "The role of luck in crypto mining: One miner's unbelievable win with a solo mining operation.",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=600&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=600&auto=format&fit=crop",
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
      imageUrl: "https://images.unsplash.com/photo-1625217527288-5b1f3b3d98b5?q=80&w=600&auto=format&fit=crop",
      category: "Markets",
      date: "February 23, 2025",
      readTime: 4,
      author: "Investment Analyst",
    },
  ]

  // Categories
  const categories = [
    { name: "All", count: 156 },
    { name: "News", count: 78 },
    { name: "Analysis", count: 32 },
    { name: "Education", count: 24 },
    { name: "Markets", count: 18 },
    { name: "Regulation", count: 14 },
    { name: "Technology", count: 12 },
    { name: "Opinion", count: 8 },
  ]

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-8">Latest Articles</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - Featured article and recent posts */}
          <div className="lg:col-span-2">
            {/* Featured article */}
            <div className="bg-card/30 rounded-lg overflow-hidden border border-border mb-8">
              <Link href={`/blog/${featuredArticle.slug}`} className="block">
                <div className="relative h-[400px] w-full">
                  <Image
                    src={featuredArticle.imageUrl || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </Link>

              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <span
                      className={`badge ${
                        featuredArticle.sponsored ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {featuredArticle.sponsored ? "Sponsored" : featuredArticle.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredArticle.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-3 w-3 mr-1" />
                    {featuredArticle.readTime} MIN READ
                  </div>
                </div>

                <Link href={`/blog/${featuredArticle.slug}`} className="block">
                  <h2 className="text-2xl font-bold mb-3 hover:text-primary-light transition-colors">
                    {featuredArticle.title}
                  </h2>
                </Link>

                <p className="text-gray-300 mb-4">{featuredArticle.excerpt}</p>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">By {featuredArticle.author}</span>
                  <Link href={`/blog/${featuredArticle.slug}`} className="text-primary hover:text-primary-light">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            {/* Recent articles grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentArticles.map((article) => (
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

                    <Link href={`/blog/${article.slug}`} className="block flex-1">
                      <h3 className="font-bold mb-2 hover:text-primary-light transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>

                    <div className="mt-auto flex justify-between items-center text-xs">
                      <span className="text-gray-400">{article.date}</span>
                      <Link href={`/blog/${article.slug}`} className="text-primary hover:text-primary-light">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <div className="flex gap-2">
                <button
                  className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors disabled:opacity-50"
                  disabled
                >
                  Previous
                </button>
                <button className="px-3 py-1 bg-primary rounded-md hover:bg-primary-light transition-colors">1</button>
                <button className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors">2</button>
                <button className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors">3</button>
                <button className="px-3 py-1 bg-card rounded-md hover:bg-card/80 transition-colors">Next</button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Search */}
            <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
              <h3 className="font-semibold mb-3">Search Articles</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-card px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="absolute right-3 top-2 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
              <h3 className="font-semibold mb-3">Categories</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <Link
                      href={`/blog/category/${category.name.toLowerCase()}`}
                      className="flex justify-between items-center text-gray-300 hover:text-primary-light transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="text-gray-400 text-sm">{category.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular posts */}
            <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
              <h3 className="font-semibold mb-3">Popular Posts</h3>
              <div className="space-y-4">
                {recentArticles.slice(0, 3).map((article) => (
                  <div key={`popular-${article.id}`} className="flex gap-3">
                    <Link href={`/blog/${article.slug}`} className="shrink-0">
                      <div className="relative h-16 w-16 rounded-md overflow-hidden">
                        <Image
                          src={article.imageUrl || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </Link>
                    <div className="flex flex-col">
                      <Link
                        href={`/blog/${article.slug}`}
                        className="text-sm font-medium hover:text-primary-light transition-colors line-clamp-2"
                      >
                        {article.title}
                      </Link>
                      <span className="text-xs text-gray-400 mt-1">{article.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-card/30 rounded-lg border border-border p-4">
              <h3 className="font-semibold mb-3">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe to our newsletter to get the latest crypto news and updates.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-card px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button className="w-full btn-primary py-2">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

