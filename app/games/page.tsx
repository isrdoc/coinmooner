import Image from "next/image"
import Link from "next/link"
import Breadcrumb from "@/components/breadcrumb"

export default function GamesPage() {
  // Game data
  const games = [
    {
      id: 1,
      name: "BITPREDICTION",
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=400&auto=format&fit=crop",
      description:
        "Maximize your crypto earnings with BitPrediction! Trade actively or use automated bots for passive income. Enjoy up to 500% PvP prize pools, low fees for winners, and a top-tier affiliate program. Start growing your portfolio today!",
      link: "/games/bitprediction",
    },
    {
      id: 2,
      name: "GABY",
      imageUrl: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=400&auto=format&fit=crop",
      description: "Gaby 🐶 Enter the next-gen memecoin on Solana. A new era of crypto is barking",
      link: "/games/gaby",
    },
    {
      id: 3,
      name: "Bitvizy Games",
      imageUrl: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=400&auto=format&fit=crop",
      description: "Bitvizy is a DeFi Protocol with wide-range products.",
      link: "/games/bitvizy-games",
    },
    {
      id: 4,
      name: "SurrealCreations SAZEE",
      imageUrl: "https://images.unsplash.com/photo-1639152201720-5e536d254d81?q=80&w=400&auto=format&fit=crop",
      description: "UNLEASHING THE FUTURE OF GAMING WITH SAZEE: A PLAY-TO-EARN REVOLUTION IN SURREALVERSE",
      link: "/games/surrealcreations-sazee",
    },
    {
      id: 5,
      name: "CryptoClash",
      imageUrl: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=400&auto=format&fit=crop",
      description:
        "Battle with NFT heroes in this strategic card game. Earn tokens through PvP matches and tournaments.",
      link: "/games/cryptoclash",
    },
    {
      id: 6,
      name: "MetaRacer",
      imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=400&auto=format&fit=crop",
      description:
        "Race to win in the metaverse! Customize your NFT vehicles and compete on tracks across virtual worlds.",
      link: "/games/metaracer",
    },
    {
      id: 7,
      name: "DeFi Kingdoms",
      imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=400&auto=format&fit=crop",
      description: "A fantasy RPG where you can trade, farm, and battle with heroes while earning real crypto rewards.",
      link: "/games/defi-kingdoms",
    },
    {
      id: 8,
      name: "Axie Infinity",
      imageUrl: "https://images.unsplash.com/photo-1625217527288-5b1f3b3d98b5?q=80&w=400&auto=format&fit=crop",
      description: "Collect, breed, and battle fantasy creatures called Axies in this play-to-earn phenomenon.",
      link: "/games/axie-infinity",
    },
  ]

  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Games", href: "/games" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-4">GameFi</h1>

        <div className="flex items-center gap-2 mb-8">
          <span className="text-gray-300">Want to see your game here?</span>
          <Link href="/submit-game" className="text-primary hover:text-primary-light">
            Submit Game
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <Link
              key={game.id}
              href={game.link}
              className="bg-card/30 rounded-lg border border-border overflow-hidden hover:border-primary transition-colors"
            >
              <div className="relative h-48 w-full bg-black">
                <Image src={game.imageUrl || "/placeholder.svg"} alt={game.name} fill className="object-cover p-0" />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-center">{game.name}</h3>
                <p className="text-sm text-gray-300 line-clamp-4">{game.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

