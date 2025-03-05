import Image from "next/image"
import Link from "next/link"
import { Clock, Calendar, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // In a real app, you would fetch this data based on the slug
  const article = {
    id: 1,
    title: "How Dogecoin Turned Memes Into a $70 Billion Market Trend",
    slug: "how-dogecoin-turned-memes-into-market-trend",
    content: `
      <p>From a joke cryptocurrency created in 2013 to a market phenomenon worth billions, Dogecoin has paved the way for meme coins to become a significant sector in the cryptocurrency market.</p>
      
      <h2>The Origins of Dogecoin</h2>
      
      <p>Dogecoin was created in December 2013 by software engineers Billy Markus and Jackson Palmer as a lighthearted alternative to traditional cryptocurrencies like Bitcoin. Named after the popular "Doge" internet meme featuring a Shiba Inu dog, it was intended to be a fun and accessible entry point into the world of digital currencies.</p>
      
      <p>Unlike Bitcoin, which was designed with a limited supply of 21 million coins, Dogecoin was created with an unlimited supply, with approximately 10,000 new coins mined every minute. This inflationary design was intentional, as the creators wanted to encourage spending rather than hoarding.</p>
      
      <h2>The Rise to Prominence</h2>
      
      <p>For several years, Dogecoin remained a relatively obscure cryptocurrency with a dedicated but small community. However, everything changed in 2021 when a perfect storm of factors catapulted Dogecoin into the mainstream:</p>
      
      <ul>
        <li>Celebrity endorsements, particularly from Elon Musk, who dubbed himself the "Dogefather"</li>
        <li>Retail investor interest fueled by social media platforms like Reddit</li>
        <li>The broader cryptocurrency bull market</li>
        <li>The growing popularity of commission-free trading apps</li>
      </ul>
      
      <p>In May 2021, Dogecoin reached an all-time high of approximately $0.73, giving it a market capitalization of over $70 billion. This remarkable valuation made Dogecoin worth more than established companies like Ford Motor Company and Kraft Heinz.</p>
      
      <h2>The Meme Coin Revolution</h2>
      
      <p>Dogecoin's success inspired a wave of imitators and competitors, all seeking to capitalize on the meme coin phenomenon. Shiba Inu (SHIB), often referred to as the "Dogecoin killer," emerged as one of the most successful, briefly surpassing Dogecoin's market cap in October 2021.</p>
      
      <p>Other notable meme coins include:</p>
      
      <ul>
        <li>Floki Inu (FLOKI)</li>
        <li>Dogelon Mars (ELON)</li>
        <li>SafeMoon (SAFEMOON)</li>
        <li>MonaCoin (MONA)</li>
      </ul>
      
      <p>The meme coin sector has grown to represent a significant portion of the overall cryptocurrency market, with combined valuations reaching hundreds of billions of dollars during peak periods.</p>
      
      <h2>The Cultural Impact</h2>
      
      <p>Beyond its financial implications, Dogecoin has had a profound cultural impact on the cryptocurrency space. It has:</p>
      
      <ul>
        <li>Made cryptocurrencies more accessible and less intimidating to newcomers</li>
        <li>Demonstrated the power of community and social media in driving asset valuations</li>
        <li>Challenged traditional notions of what gives a currency value</li>
        <li>Funded numerous charitable initiatives through the Dogecoin Foundation</li>
      </ul>
      
      <h2>The Future of Meme Coins</h2>
      
      <p>While the meme coin sector has experienced significant volatility, with many projects failing to maintain their peak valuations, the enduring popularity of Dogecoin suggests that meme coins are here to stay.</p>
      
      <p>As the cryptocurrency market continues to mature, meme coins may evolve beyond their novelty status to find practical use cases. Dogecoin, for instance, has been adopted as a payment method by several companies, including the Dallas Mavericks NBA team and AMC Theatres.</p>
      
      <p>Whether meme coins represent a lasting innovation or a passing fad remains to be seen, but there's no denying that Dogecoin has left an indelible mark on the cryptocurrency landscape, transforming internet humor into a multi-billion dollar market segment.</p>
    `,
    imageUrl: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=1200&auto=format&fit=crop",
    category: "Analysis",
    date: "February 26, 2025",
    readTime: 5,
    author: "Crypto Analyst",
    authorImageUrl: "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=150&auto=format&fit=crop",
    sponsored: true,
    tags: ["Dogecoin", "Meme Coins", "Cryptocurrency", "Market Analysis", "Elon Musk"],
  }

  // Related articles
  const relatedArticles = [
    {
      id: 2,
      title: "Solo Miner Hits the Jackpot: 3.125 BTC from Block 883181",
      slug: "solo-miner-hits-jackpot-btc-block-883181",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=600&auto=format&fit=crop",
      category: "News",
      date: "February 24, 2025",
    },
    {
      id: 3,
      title: "Japanese Giant SBI Leads the Way with Crypto Growth and Blockchain Plan",
      slug: "japanese-giant-sbi-leads-crypto-growth-blockchain-plan",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
      category: "News",
      date: "February 24, 2025",
    },
    {
      id: 4,
      title: "Navigating the Risks of Web3: A Closer Look at Stablecoins and DeFi Protocols",
      slug: "navigating-risks-web3-stablecoins-defi-protocols",
      imageUrl: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=600&auto=format&fit=crop",
      category: "Education",
      date: "February 24, 2025",
    },
  ]

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: article.title, href: `/blog/${article.slug}` },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <article className="bg-card/30 rounded-lg border border-border overflow-hidden">
            <div className="relative h-[400px] w-full">
              <Image
                src={article.imageUrl || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6">
              <div className="flex flex-wrap justify-between items-center mb-4">
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <span
                    className={`badge ${
                      article.sponsored ? "bg-yellow-500/20 text-yellow-400" : "bg-blue-500/20 text-blue-400"
                    }`}
                  >
                    {article.sponsored ? "Sponsored" : article.category}
                  </span>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {article.date}
                  </div>

                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {article.readTime} MIN READ
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400">Share:</span>
                  <button className="p-1.5 bg-[#1877F2]/20 text-[#1877F2] rounded-full hover:bg-[#1877F2]/30 transition-colors">
                    <Facebook className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 bg-[#1DA1F2]/20 text-[#1DA1F2] rounded-full hover:bg-[#1DA1F2]/30 transition-colors">
                    <Twitter className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 bg-[#0A66C2]/20 text-[#0A66C2] rounded-full hover:bg-[#0A66C2]/30 transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="p-1.5 bg-gray-500/20 text-gray-400 rounded-full hover:bg-gray-500/30 transition-colors">
                    <Share2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <h1 className="text-3xl font-bold mb-6">{article.title}</h1>

              <div className="flex items-center mb-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={article.authorImageUrl || "/placeholder.svg"}
                    alt={article.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">By {article.author}</div>
                  <div className="text-sm text-gray-400">Cryptocurrency Expert</div>
                </div>
              </div>

              <div
                className="prose prose-invert max-w-none prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary-light prose-img:rounded-lg"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-400">Tags:</span>
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                      className="bg-card/50 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-card transition-colors"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>

          {/* Related articles */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedArticles.map((article) => (
                <div key={article.id} className="bg-card/30 rounded-lg overflow-hidden border border-border">
                  <Link href={`/blog/${article.slug}`} className="block">
                    <div className="relative h-40 w-full">
                      <Image
                        src={article.imageUrl || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </Link>

                  <div className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="badge bg-blue-500/20 text-blue-400 text-xs">{article.category}</span>
                      <span className="text-gray-400 text-xs">{article.date}</span>
                    </div>

                    <Link href={`/blog/${article.slug}`} className="block">
                      <h3 className="font-medium text-sm hover:text-primary-light transition-colors line-clamp-2">
                        {article.title}
                      </h3>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          {/* Author info */}
          <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
            <h3 className="font-semibold mb-3">About the Author</h3>
            <div className="flex items-center mb-3">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-3">
                <Image
                  src={article.authorImageUrl || "/placeholder.svg"}
                  alt={article.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-medium">{article.author}</div>
                <div className="text-sm text-gray-400">Cryptocurrency Expert</div>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              A seasoned cryptocurrency analyst with over 5 years of experience in blockchain technology and digital
              asset markets. Specializes in market trends, technical analysis, and emerging cryptocurrencies.
            </p>
          </div>

          {/* Popular posts */}
          <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
            <h3 className="font-semibold mb-3">Popular Posts</h3>
            <div className="space-y-4">
              {relatedArticles.map((article) => (
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

          {/* Tags cloud */}
          <div className="bg-card/30 rounded-lg border border-border p-4 mb-6">
            <h3 className="font-semibold mb-3">Popular Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Bitcoin",
                "Ethereum",
                "Altcoins",
                "DeFi",
                "NFTs",
                "Blockchain",
                "Mining",
                "Regulation",
                "Adoption",
                "Trading",
                "Meme Coins",
                "Web3",
              ].map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-card/50 px-3 py-1 rounded-full text-sm text-gray-300 hover:bg-card transition-colors"
                >
                  {tag}
                </Link>
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
  )
}

