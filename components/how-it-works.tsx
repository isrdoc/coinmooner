import Image from "next/image"
import Link from "next/link"

export default function HowItWorks() {
  return (
    <div className="bg-card/30 rounded-lg border border-border p-8 my-12">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/3">
          <Image
            src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=200&auto=format&fit=crop"
            alt="CoinMooner Logo"
            width={200}
            height={200}
            className="mx-auto rounded-lg"
          />
        </div>

        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold mb-4">
            CoinMooner - the place where you can find the best crypto projects!
          </h2>

          <p className="text-gray-300 mb-6">
            We're a popular cryptocurrency listing and ranking website. Together with our community and our partners, we
            verify hard to ensure the authenticity of projects. We're always looking for new opportunities to grow and
            expand our services.
          </p>

          <h3 className="text-xl font-bold mb-4">How does CoinMooner work?</h3>

          <p className="text-gray-300 mb-4">
            Each project needs to verify our requirements before being listed on CoinMooner. A good listing needs NEW
            COINS to attract more page views, and the project is visible at the top of the page. Today we are happy to
            be the trusted source of the cryptocurrency community. We are always looking for new opportunities to grow
            and expand our services. You can check the full list of requirements in our website, thus increasing its
            visibility.
          </p>

          <p className="text-gray-300">
            We receive many requests every day without confirmation, and if anything seems suspicious, we will not list
            it. We want to ensure that everything is functioning now information and updated daily. DON'T BE too always
            ready to help you with any questions you may have.
          </p>

          <div className="mt-6">
            <Link href="/get-listed" className="btn-primary">
              Get Listed Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

