import Link from "next/link"
import Image from "next/image"
import Breadcrumb from "@/components/breadcrumb"

export default function CompanyPage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">About CoinMooner</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="prose prose-invert max-w-none">
              <p>
                CoinMooner is a leading cryptocurrency platform dedicated to helping users discover the next big crypto
                gems before they moon. Our platform provides comprehensive information on new cryptocurrencies,
                presales, airdrops, and NFT projects.
              </p>

              <p>
                Founded in 2021, CoinMooner has quickly grown to become one of the most trusted sources for
                cryptocurrency enthusiasts looking to stay ahead of the market. Our team of experts carefully vets each
                project before it's listed on our platform, ensuring that our users have access to high-quality
                investment opportunities.
              </p>

              <h2>Our Mission</h2>

              <p>
                Our mission is to democratize access to early-stage cryptocurrency projects and provide a platform where
                both investors and project creators can connect. We believe in transparency, community, and the
                transformative power of blockchain technology.
              </p>

              <h2>What We Offer</h2>

              <ul>
                <li>
                  <strong>Coin Listings:</strong> Discover new cryptocurrencies with detailed information on tokenomics,
                  team, roadmap, and more.
                </li>
                <li>
                  <strong>Presale Directory:</strong> Get early access to promising projects before they launch on
                  exchanges.
                </li>
                <li>
                  <strong>Airdrop Opportunities:</strong> Find legitimate airdrops and claim free tokens from upcoming
                  projects.
                </li>
                <li>
                  <strong>GameFi Section:</strong> Explore play-to-earn games and blockchain gaming projects.
                </li>
                <li>
                  <strong>Crypto News:</strong> Stay updated with the latest developments in the cryptocurrency space.
                </li>
              </ul>

              <h2>Join Our Community</h2>

              <p>
                CoinMooner is more than just a platform—it's a community of like-minded individuals passionate about
                cryptocurrency. Join our Telegram group, follow us on Twitter, and subscribe to our newsletter to become
                part of our growing community.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact-us" className="btn-primary">
                Contact Us
              </Link>
              <Link href="https://t.me/CoinMoonerTG" target="_blank" className="btn-outline">
                Join Our Telegram
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-card/30 rounded-lg border border-border p-6 sticky top-4">
              <h3 className="font-semibold mb-4">Company Information</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-400">Founded</div>
                  <div className="font-medium">2021</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400">Headquarters</div>
                  <div className="font-medium">Global (Remote)</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400">Team Size</div>
                  <div className="font-medium">25+ Professionals</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400">Projects Listed</div>
                  <div className="font-medium">5,000+</div>
                </div>

                <div>
                  <div className="text-sm text-gray-400">Monthly Visitors</div>
                  <div className="font-medium">500,000+</div>
                </div>
              </div>

              <div className="border-t border-border mt-6 pt-6">
                <h3 className="font-semibold mb-4">Connect With Us</h3>

                <div className="space-y-3">
                  <Link
                    href="https://twitter.com/coinmooner"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-light"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                    </svg>
                    <span>Twitter</span>
                  </Link>

                  <Link
                    href="https://t.me/CoinMoonerTG"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-light"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.952z"></path>
                    </svg>
                    <span>Telegram</span>
                  </Link>

                  <Link
                    href="https://discord.gg/coinmooner"
                    target="_blank"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-light"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.977-.608 1.414a17.75 17.75 0 0 0-5.487 0 12.249 12.249 0 0 0-.617-1.415.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"></path>
                    </svg>
                    <span>Discord</span>
                  </Link>

                  <Link
                    href="mailto:contact@coinmooner.com"
                    className="flex items-center gap-2 text-gray-300 hover:text-primary-light"
                  >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <span>Email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((member) => (
              <div key={member} className="bg-card/30 rounded-lg border border-border overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Team Member ${member}`}
                    alt={`Team Member ${member}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="font-bold">John Doe</h3>
                  <p className="text-sm text-gray-400">Co-Founder & CEO</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Partners</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((partner) => (
              <div
                key={partner}
                className="bg-card/30 rounded-lg border border-border p-6 flex items-center justify-center"
              >
                <div className="relative h-16 w-full">
                  <Image
                    src={`/placeholder.svg?height=100&width=200&text=Partner ${partner}`}
                    alt={`Partner ${partner}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

