import Image from "next/image"

export default function FindDefiTokens() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-12">
      <div className="relative h-[300px] rounded-lg overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1640340434855-6084b1f4901c?q=80&w=600&auto=format&fit=crop"
          alt="Find DeFi tokens"
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Find DeFi tokens and meme coins that will take you to the Moon!</h2>

        <p className="text-gray-300 mb-4">
          CoinMooner is a platform that aims to make cryptocurrency more accessible to users, and for us, that does mean
          not just providing information about the most popular cryptocurrencies but also about new projects, memecoins
          and NFTs.
        </p>

        <p className="text-gray-300 mb-4">
          We constantly gather the latest trends and provide our visitors with information about them. We are always
          trying to find the best projects before that cryptocurrency sets the future of the financial world. We want to
          help you find the best projects and opportunities that are ready to be the next big thing.
        </p>

        <p className="text-gray-300">
          We are constantly working on improving our website and adding new features. If you have any suggestions or
          ideas, feel free to contact us.
        </p>
      </div>
    </div>
  )
}

