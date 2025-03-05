import Link from "next/link"
import { Send, Mail, Twitter, Youtube, Twitch, DiscIcon as Discord } from "lucide-react"
import Breadcrumb from "@/components/breadcrumb"

export default function ContactUsPage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contact Us", href: "/contact-us" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <p className="text-gray-300 mb-8">
          If you need to contact us - do it by writing to any convenient for you messenger, or fill out the feedback
          form.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            {/* Contact options */}
            <div className="bg-card/30 rounded-lg border border-border p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#0088cc]/20 p-2 rounded-md">
                  <Send className="h-5 w-5 text-[#0088cc]" />
                </div>
                <div>
                  <h3 className="font-medium">Telegram</h3>
                  <p className="text-sm text-gray-400">@CoinMoonerTG</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-blue-500/20 p-2 rounded-md">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-sm text-gray-400">contact@coinmooner.com</p>
                </div>
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-card/30 rounded-lg border border-border p-6 mb-6">
              <h3 className="font-semibold mb-4">Follow Us</h3>

              <div className="flex gap-4">
                <Link
                  href="https://twitter.com/coinmooner"
                  target="_blank"
                  className="p-2 bg-card/50 rounded-md hover:bg-card/80 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="https://discord.gg/coinmooner"
                  target="_blank"
                  className="p-2 bg-card/50 rounded-md hover:bg-card/80 transition-colors"
                >
                  <Discord className="h-5 w-5" />
                </Link>
                <Link
                  href="https://youtube.com/coinmooner"
                  target="_blank"
                  className="p-2 bg-card/50 rounded-md hover:bg-card/80 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                </Link>
                <Link
                  href="https://tiktok.com/@coinmooner"
                  target="_blank"
                  className="p-2 bg-card/50 rounded-md hover:bg-card/80 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
                    <path d="M15 8v8a4 4 0 0 1-4 4" />
                    <line x1="15" y1="4" x2="15" y2="12" />
                  </svg>
                </Link>
                <Link
                  href="https://twitch.tv/coinmooner"
                  target="_blank"
                  className="p-2 bg-card/50 rounded-md hover:bg-card/80 transition-colors"
                >
                  <Twitch className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Telegram Contact */}
            <div className="bg-card/30 rounded-lg border border-border p-6">
              <h3 className="font-semibold mb-4">If You Have Any Questions</h3>
              <p className="text-gray-300 mb-4">Contact Us Directly On Telegram:</p>

              <div className="flex items-center gap-2 mb-4">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Online</span>
              </div>

              <Link
                href="https://t.me/CoinMoonerTG"
                target="_blank"
                className="flex items-center justify-center gap-2 w-full bg-[#0088cc] hover:bg-[#0088cc]/90 text-white rounded-md py-3 px-4 transition-colors"
              >
                <Send className="h-5 w-5" />
                <span>Contact Us</span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card/30 rounded-lg border border-border p-6">
              <h2 className="text-xl font-semibold mb-4">Fill out the form</h2>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your e-mail"
                    className="w-full bg-card/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Your message"
                    rows={8}
                    className="w-full bg-card/50 border border-border rounded-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                <div className="flex items-center">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-primary focus:ring-primary border-border rounded bg-card/50"
                    required
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">
                    I agree to{" "}
                    <Link href="/terms-of-use" className="text-primary hover:text-primary-light">
                      Terms of use
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-primary hover:text-primary-light">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-primary hover:bg-primary-light text-white rounded-md py-3 px-6 transition-colors flex items-center gap-2"
                  >
                    Submit <span className="text-lg">›</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-card/30 rounded-lg border border-border p-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h2>
              <p className="text-gray-400">Get the latest crypto news and updates directly to your inbox</p>
            </div>

            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email"
                className="w-full md:w-80 bg-card/50 border border-border rounded-l-md px-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button className="bg-primary hover:bg-primary-light text-white rounded-r-md py-3 px-6 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

