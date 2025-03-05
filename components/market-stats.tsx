"use client"

import { useState } from "react"

export default function MarketStats() {
  const [marketData, setMarketData] = useState({
    marketCap: "3.06T",
    marketCapChange: 5.63,
    volume24h: "176.31B",
    btcPrice: 89841,
    btcChange: 7.12,
    ethPrice: 2238.35,
    ethChange: 6.7,
    bnbPrice: 603.13,
    bnbChange: 6.09,
    btcDominance: "58.25%",
    cryptoCount: 48532,
    airdrops: 1919,
  })

  return (
    <div className="stats-bar">
      <div className="container-custom flex items-center gap-4">
        <span>
          Market Cap: ${marketData.marketCap}
          <span className={marketData.marketCapChange >= 0 ? "text-green-500 ml-1" : "text-red-500 ml-1"}>
            ({marketData.marketCapChange >= 0 ? "+" : ""}
            {marketData.marketCapChange}%)
          </span>
        </span>

        <span>24h Volume: ${marketData.volume24h}</span>

        <span>
          BTC: ${marketData.btcPrice}
          <span className={marketData.btcChange >= 0 ? "text-green-500 ml-1" : "text-red-500 ml-1"}>
            ({marketData.btcChange >= 0 ? "+" : ""}
            {marketData.btcChange}%)
          </span>
        </span>

        <span>
          ETH: ${marketData.ethPrice}
          <span className={marketData.ethChange >= 0 ? "text-green-500 ml-1" : "text-red-500 ml-1"}>
            ({marketData.ethChange >= 0 ? "+" : ""}
            {marketData.ethChange}%)
          </span>
        </span>

        <span>
          BNB: ${marketData.bnbPrice}
          <span className={marketData.bnbChange >= 0 ? "text-green-500 ml-1" : "text-red-500 ml-1"}>
            ({marketData.bnbChange >= 0 ? "+" : ""}
            {marketData.bnbChange}%)
          </span>
        </span>

        <span>BTC Dominance: {marketData.btcDominance}</span>
        <span>Cryptocurrencies listed: {marketData.cryptoCount}</span>
        <span>Total Airdrops: {marketData.airdrops}</span>
      </div>
    </div>
  )
}

