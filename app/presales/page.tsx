import PresaleTable from "@/components/presale-table"
import PageHeader from "@/components/page-header"
import NewsletterSubscribe from "@/components/newsletter-subscribe"

export default function PresalesPage() {
  return (
    <div className="min-h-screen bg-[#0B0A1A]">
      <div className="container-custom py-4">
        <PageHeader
          title="Cryptocurrency Presales"
          description="Discover the hottest upcoming cryptocurrency presales before they launch. Vote for your favorites to help them gain visibility."
        />
        <PresaleTable />
        <div className="mt-12">
          <h2 className="text-xl font-bold mb-6">Most Popular Crypto Presales 2024</h2>
          <PresaleTable variant="compact" />
        </div>
        <div className="mt-12 mb-8">
          <NewsletterSubscribe />
        </div>
      </div>
    </div>
  )
}

