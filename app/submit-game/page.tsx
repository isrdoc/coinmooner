import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"

export default function SubmitGamePage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Games", href: "/games" },
          { label: "Submit Game", href: "/submit-game" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">Submit Your Game</h1>
        <p className="text-gray-300 mb-8 max-w-3xl">
          Get your crypto game or GameFi project listed on CoinMooner and reach thousands of potential players and
          investors. Fill out the form below with your game details.
        </p>

        <div className="bg-card rounded-lg p-6 border border-border max-w-3xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="gameName" className="block text-sm font-medium text-gray-300 mb-1">
                  Game Name *
                </label>
                <input
                  type="text"
                  id="gameName"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter game name"
                  required
                />
              </div>

              <div>
                <label htmlFor="tokenSymbol" className="block text-sm font-medium text-gray-300 mb-1">
                  Token Symbol (if applicable)
                </label>
                <input
                  type="text"
                  id="tokenSymbol"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="e.g. BTC, ETH"
                />
              </div>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-1">
                Short Description *
              </label>
              <textarea
                id="description"
                rows={4}
                className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Describe your game (max 200 characters)"
                maxLength={200}
                required
              />
            </div>

            <div>
              <label htmlFor="longDescription" className="block text-sm font-medium text-gray-300 mb-1">
                Detailed Description *
              </label>
              <textarea
                id="longDescription"
                rows={8}
                className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Provide a detailed description of your game, including features, gameplay, and tokenomics"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select category</option>
                  <option value="RPG">RPG</option>
                  <option value="Strategy">Strategy</option>
                  <option value="Card Game">Card Game</option>
                  <option value="Metaverse">Metaverse</option>
                  <option value="Racing">Racing</option>
                  <option value="Trading & Prediction">Trading & Prediction</option>
                  <option value="Collectibles">Collectibles</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="blockchain" className="block text-sm font-medium text-gray-300 mb-1">
                  Blockchain *
                </label>
                <select
                  id="blockchain"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                >
                  <option value="">Select blockchain</option>
                  <option value="ETH">Ethereum</option>
                  <option value="BSC">Binance Smart Chain</option>
                  <option value="SOL">Solana</option>
                  <option value="ARB">Arbitrum</option>
                  <option value="MATIC">Polygon</option>
                  <option value="AVAX">Avalanche</option>
                  <option value="MULTI">Multiple Chains</option>
                  <option value="OTHER">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="platform" className="block text-sm font-medium text-gray-300 mb-1">
                  Platform *
                </label>
                <input
                  type="text"
                  id="platform"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="e.g. Web, Mobile, PC"
                  required
                />
              </div>

              <div>
                <label htmlFor="launchDate" className="block text-sm font-medium text-gray-300 mb-1">
                  Launch Date *
                </label>
                <input
                  type="date"
                  id="launchDate"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
                  Website *
                </label>
                <input
                  type="url"
                  id="website"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://"
                  required
                />
              </div>

              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-gray-300 mb-1">
                  Twitter
                </label>
                <input
                  type="url"
                  id="twitter"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://twitter.com/"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="telegram" className="block text-sm font-medium text-gray-300 mb-1">
                  Telegram
                </label>
                <input
                  type="url"
                  id="telegram"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://t.me/"
                />
              </div>

              <div>
                <label htmlFor="discord" className="block text-sm font-medium text-gray-300 mb-1">
                  Discord
                </label>
                <input
                  type="url"
                  id="discord"
                  className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="https://discord.gg/"
                />
              </div>
            </div>

            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-300 mb-1">
                Game Logo *
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-border bg-card/50 hover:bg-card/80">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG (MAX. 800x800px)</p>
                  </div>
                  <input id="logo" type="file" className="hidden" accept="image/*" required />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="screenshots" className="block text-sm font-medium text-gray-300 mb-1">
                Game Screenshots (up to 3)
              </label>
              <div className="flex items-center justify-center w-full">
                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer border-border bg-card/50 hover:bg-card/80">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-8 h-8 mb-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-gray-400">PNG, JPG (MAX. 1920x1080px)</p>
                  </div>
                  <input id="screenshots" type="file" className="hidden" accept="image/*" multiple />
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                id="email"
                className="w-full bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="your@email.com"
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
                I agree to the{" "}
                <Link href="/terms" className="text-primary hover:text-primary-light">
                  Terms and Conditions
                </Link>
              </label>
            </div>

            <div>
              <button type="submit" className="w-full btn-primary py-3">
                Submit Game
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

