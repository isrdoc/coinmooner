import BannerAds from "@/components/banner-ads"
import CoinTable from "@/components/coin-table"
import NewsGrid from "@/components/news-grid"
import FindDefiTokens from "@/components/find-defi-tokens"
import HowItWorks from "@/components/how-it-works"
import NewsletterSubscribe from "@/components/newsletter-subscribe"

export default function Home() {
  return (
    <div className="container-custom py-4">
      <BannerAds />
      <NewsGrid />
      <CoinTable />
      <FindDefiTokens />
      <HowItWorks />
      <NewsletterSubscribe />
    </div>
  )
}

