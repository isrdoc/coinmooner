import Link from "next/link"
import { Search } from "lucide-react"
import AirdropsList from "@/components/airdrops-list"
import Breadcrumb from "@/components/breadcrumb"

export default function AirdropsPage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Airdrops", href: "/airdrops" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Ongoing Airdrops</h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="text-gray-300">Want to see your airdrop here?</span>
            <Link href="/submit-airdrop" className="text-primary hover:text-primary-light">
              Submit Airdrop
            </Link>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search airdrops..."
              className="bg-card px-4 py-2 rounded-md pl-10 w-full focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <AirdropsList />
      </div>
    </div>
  )
}

