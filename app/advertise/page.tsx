import Link from "next/link"
import { Mail, Send, Shield } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export default function AdvertisePage() {
  return (
    <main className="min-h-screen bg-[#0d0e1c]">
      <div className="container-custom py-6">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Ads", href: "/advertise" },
          ]}
        />

        <h1 className="text-3xl font-bold mt-6 mb-8">Advertising & Services</h1>

        {/* Why Choose CoinMooner */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why choose CoinMooner?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { number: "1 Million+", text: "Monthly Active Users" },
              { number: "50 Million+", text: "Upvotes Placed" },
              { number: "30000+", text: "Projects Listed" },
              { number: "Unlimited", text: "Changes to Your Ad" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#13141f] rounded p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-primary rounded-full" />
                </div>
                <div className="text-xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.text}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Website Ads */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Website Ads</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Rotating Banner Ads",
                desc: "One of the spots in our rotating banner section. Traffic is shared. Any video or image format.",
                dimensions: ["Desktop 728x90", "Mobile 640x120"],
                price: "$150 / day",
              },
              {
                title: "Premium Banner Ads",
                desc: "Premium banner spot at the top of our website. Dedicated spot. Any video or image format.",
                dimensions: ["Desktop 1440x90", "Mobile 640x200"],
                price: "$375 / day",
              },
              {
                title: "Promoted Spot",
                desc: "Your project is always shown on our main page. Immediate massive exposure for your coin. No additional media needed.",
                dimensions: [],
                price: "$300 / day",
              },
            ].map((ad, i) => (
              <div key={i} className="bg-[#13141f] rounded p-6">
                <div className="h-32 mb-4 flex items-center justify-center border border-primary/20 rounded">
                  <div className="w-3/4 h-1/2 border border-primary/20 rounded flex items-center justify-center">
                    <div className="w-1/2 h-2 bg-primary/20 rounded" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">{ad.title}</h3>
                <p className="text-gray-400 text-center text-sm mb-4">{ad.desc}</p>
                {ad.dimensions.length > 0 && (
                  <div className="flex justify-center gap-2 mb-4">
                    {ad.dimensions.map((dim, j) => (
                      <span key={j} className="bg-[#0d0e1c] text-xs px-3 py-1 rounded">
                        {dim}
                      </span>
                    ))}
                  </div>
                )}
                <p className="text-2xl font-bold text-center">{ad.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/contact-us"
              className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded transition-colors"
            >
              START ADVERTISING
            </Link>
          </div>
        </section>

        {/* Discounts */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Discounts</h2>

          <div className="grid grid-cols-3 gap-4 max-w-xl">
            {[
              { days: "3+ days", discount: "10%", text: "of any ad booked" },
              { days: "7+ days", discount: "20%", text: "of any ad booked" },
              { days: "15+ days", discount: "35%", text: "of any ad booked" },
            ].map((discount, i) => (
              <div key={i} className="bg-[#13141f] rounded p-4 text-center">
                <div className="text-sm mb-2">{discount.days}</div>
                <div className="text-sm text-gray-400 mb-2">{discount.text}</div>
                <div className="text-xl font-bold text-primary">
                  {discount.discount} <span className="text-sm">off</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Blast */}
            <div className="bg-[#13141f] rounded p-6">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Email Blast</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Send your message to our 30,000+ email subscribers. Your message will be sent in a dedicated email.
              </p>
              <div className="flex justify-between items-center">
                <button className="text-primary hover:underline">Request a quote</button>
              </div>
            </div>

            {/* Contract Audit */}
            <div className="bg-[#13141f] rounded p-6">
              <div className="flex items-center gap-4 mb-4">
                <Shield className="h-8 w-8 text-primary" />
                <h3 className="text-xl font-bold">Contract Audit</h3>
              </div>
              <p className="text-gray-400 mb-4">
                We will audit your smart contract for security vulnerabilities. A report will be provided to share with
                your community.
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold">From $400</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us */}
        <section className="mb-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact us</h2>
          <p className="text-gray-400 mb-8">Reach out to us on Telegram or email to get started.</p>

          <div className="flex justify-center gap-8">
            <Link
              href="https://t.me/CoinMoonerTG"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
              target="_blank"
            >
              <Send className="h-5 w-5" />
              <div>
                <div className="text-sm">Telegram</div>
                <div className="text-xs">@CoinMoonerTG</div>
              </div>
            </Link>

            <Link
              href="mailto:contact@coinmooner.com"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <Mail className="h-5 w-5" />
              <div>
                <div className="text-sm">Email</div>
                <div className="text-xs">contact@coinmooner.com</div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}

