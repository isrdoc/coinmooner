import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function PartnersPage() {
  return (
    <main className="min-h-screen pb-20">
      {/* Breadcrumb */}
      <div className="container-custom py-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span>/</span>
          <span>Partners</span>
        </div>
      </div>

      {/* Header */}
      <div className="container-custom">
        <h1 className="text-4xl font-bold mb-8">Our Partners</h1>

        <div className="bg-[#1a1b2e] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-2">Vibrant Data Aggregator</h2>
          <h3 className="text-xl mb-6">Surrounded By a Vibrant Ecosystem</h3>
          <p className="text-gray-400 max-w-3xl">
            CoinMooner aims to deliver the most accurate and up-to-date data on the crypto market. We are surrounded by
            a vibrant ecosystem of partners and crypto enthusiasts that help us achieve this goal.
          </p>
        </div>

        {/* Categories */}
        <div className="flex gap-4 mb-8">
          <button className="bg-primary px-4 py-2 rounded-md">All Categories</button>
          <button className="bg-card hover:bg-primary/10 px-4 py-2 rounded-md">Referencing</button>
          <button className="bg-card hover:bg-primary/10 px-4 py-2 rounded-md">Technical</button>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Arken */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/arken.png"
              alt="Arken"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Arken</h3>
            <p className="text-gray-400 text-sm mb-6">
              Arken Finance offers the all-in-one trading tool for DEX traders to monitor tokens and synthetic assets,
              forecast market movement, and trade at the BEST RATE. Arken aggregates multiple DEXs into a single
              platform and tackles the principal vulnerability of today's DEXs. Our tool incorporates a real-time
              trading view, offers users a single point of entry for managing digital assets efficiently, and can be
              customized with over 160+ technical indicators and unique specialty charts for the advanced trader.
            </p>
            <Link
              href="https://arken.finance/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://arken.finance/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* StaySAFU */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/staysafu.png"
              alt="StaySAFU"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">StaySAFU</h3>
            <p className="text-gray-400 text-sm mb-6">
              The security leader for the BNB Chain. Protecting millions of crypto investors with the SAFU Scanner,
              securing millions of USD worth of assets with the SAFU Audits & KYC. The SAFU Scanner allows you to
              evaluate in a matter of seconds the possibilities that owners of a token can scam you through a study of
              its liquidity, smart-contract code, holders, and numerous other factors.
            </p>
            <Link
              href="https://www.staysafu.org/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://www.staysafu.org/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* GemPad */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/gempad.png"
              alt="GemPad"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">GemPad</h3>
            <p className="text-gray-400 text-sm mb-6">
              GemPad is a frontline protocol for users and project-owners designed to help to launch their projects and
              tokens in the easiest way possible. We support Seed Sales, Private Sales, Partial Raises, Presales, Fair
              Launches and Stealth Launches which no other launchpad out there supports at the moment. Gempad is also
              the first launchpad to offer raising funds in any crypto token.
            </p>
            <Link
              href="https://gempad.app/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://gempad.app/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* MoonScan */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/moonscan.png"
              alt="MoonScan"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">MoonScan</h3>
            <p className="text-gray-400 text-sm mb-6">
              MoonScan is the first tracking tool that combines tracking of reflections with token price and burn
              information. Also, MoonScan can track individual solutions for token rewards. If a token missing, simply
              request to add.
            </p>
            <Link
              href="https://moonscan.com/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://moonscan.com/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Mobula */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/mobula.png"
              alt="Mobula"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Mobula</h3>
            <p className="text-gray-400 text-sm mb-6">
              Mobula is the first decentralized data aggregator. It's often presented as the Web3 version of
              CoinMarketCap, with the particularity of offering real-time and on-chain data. Mobula is also a suite of
              tools allowing you to do precise searches with the Advanced search feature or to monitor your assets with
              the Wallet Analysis. Join the adventure.
            </p>
            <Link
              href="https://mobula.fi/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://mobula.fi/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* BSCheck */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/bscheck.png"
              alt="BSCheck"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">BSCheck</h3>
            <p className="text-gray-400 text-sm mb-6">
              BSCheck is a free token analyzer that offers real help to determine if a smart contract is safe to invest
              in or not. Without any guarantees, one should always DYOR. bscheck.eu team is trying hard to detect all
              the scams and malicious contracts. Always be careful with the projects that you invest in, we are trying
              harder each and every day to make crypto space safer for everyone. Recently, Dogechain and Fantom have
              been implemented on our websites. More to come soon.
            </p>
            <Link
              href="https://bscheck.eu"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://bscheck.eu
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Bogged */}
          <div className="bg-[#1a1b2e] rounded-lg p-6 hover:bg-[#1e1f35] transition-colors">
            <Image
              src="https://coinmooner.com/assets/images/partners/bogged.png"
              alt="Bogged"
              width={200}
              height={60}
              className="mb-6"
            />
            <h3 className="text-xl font-bold mb-4">Bogged</h3>
            <p className="text-gray-400 text-sm mb-6">
              Bogged is a DeFi tool suite for the Binance Smart Chain powered by the BOG token. Bringing the same
              features to the BSC platform with all the tools normally available only to Centralized Exchange (CEX)
              users.
            </p>
            <Link
              href="https://www.bogged.finance/"
              target="_blank"
              className="flex items-center gap-2 text-primary hover:text-primary-light"
            >
              https://www.bogged.finance/
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

