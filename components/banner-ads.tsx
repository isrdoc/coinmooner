import Image from "next/image"
import Link from "next/link"

export default function BannerAds() {
  const banners = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=1200&auto=format&fit=crop",
      link: "/projects/solaxy",
      alt: "Solaxy - The first ever Solana Layer 2 presale",
    },
  ]

  return (
    <div className="my-4 space-y-4">
      {banners.map((banner) => (
        <div key={banner.id} className="w-full">
          <Link href={banner.link}>
            <Image
              src={banner.imageUrl || "/placeholder.svg"}
              alt={banner.alt}
              width={1200}
              height={40}
              className="w-full h-96 rounded-md"
              priority={banner.id === 1}
            />
          </Link>
        </div>
      ))}
    </div>
  )
}

