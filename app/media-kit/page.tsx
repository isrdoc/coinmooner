import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import NewsletterSubscribe from "@/components/newsletter-subscribe"

export default function MediaKit() {
  return (
    <main className="container-custom py-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6">
        <Link href="/" className="text-gray-400 hover:text-white">
          Home
        </Link>
        <span className="text-gray-600">/</span>
        <span className="text-gray-400">Media Kit</span>
      </div>

      <h1 className="text-3xl font-bold mb-12">CoinMooner Media Kit</h1>

      {/* Assets Download Section */}
      <section className="mb-16 bg-[#1a1b2e]/50 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Assets Download</h2>
        <p className="text-gray-400 mb-2">
          Hello! If you are looking for CoinMooner brand assets you are in the right place.
        </p>
        <p className="text-gray-400 mb-6">To save some time you can download the .zip archive below.</p>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download All Assets
        </Button>
      </section>

      {/* Logo Section */}
      <section className="mb-16">
        <h2 className="text-xl font-bold mb-4">Logo</h2>
        <p className="text-gray-400 mb-2">
          Our logo should never be placed vertically, outlined or modified in shape or form.
        </p>
        <p className="text-gray-400 mb-8">In case logo is needed in a different form, please contact us.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Logo */}
          <Card className="bg-[#0d0e1c] border-border p-6">
            <div className="aspect-square relative mb-4 bg-[#13141f] rounded-lg p-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                alt="CoinMooner Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-bold mb-2">Logo</h3>
            <p className="text-sm text-gray-400 mb-4">Our primary on transparent background with no brand name.</p>
            <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download file
            </Button>
          </Card>

          {/* Primary Logo, black, vertical */}
          <Card className="bg-[#0d0e1c] border-border p-6">
            <div className="aspect-square relative mb-4 bg-[#13141f] rounded-lg p-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                alt="CoinMooner Primary Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-bold mb-2">Primary Logo, black, vertical</h3>
            <p className="text-sm text-gray-400 mb-4">
              Our primary logo on transparent background, with black text, displayed vertically.
            </p>
            <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download file
            </Button>
          </Card>

          {/* Logo, white, horizontal */}
          <Card className="bg-[#0d0e1c] border-border p-6">
            <div className="aspect-square relative mb-4 bg-[#13141f] rounded-lg p-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                alt="CoinMooner Horizontal Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-bold mb-2">Logo, white, horizontal</h3>
            <p className="text-sm text-gray-400 mb-4">
              Our primary on transparent background, with white text, displayed horizontally.
            </p>
            <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download file
            </Button>
          </Card>

          {/* Alternative Logo */}
          <Card className="bg-[#0d0e1c] border-border p-6">
            <div className="aspect-square relative mb-4 bg-[#13141f] rounded-lg p-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                alt="CoinMooner Alternative Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-bold mb-2">Alternative Logo</h3>
            <p className="text-sm text-gray-400 mb-4">Alternative logo on transparent background with no brand name.</p>
            <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download file
            </Button>
          </Card>

          {/* Alternative Logo, black, vertical */}
          <Card className="bg-[#0d0e1c] border-border p-6">
            <div className="aspect-square relative mb-4 bg-[#13141f] rounded-lg p-4 flex items-center justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/horizontal_logo_small-tw4lqMQtmiIwIAU1RaT1GZRZeRL7KK.webp"
                alt="CoinMooner Alternative Vertical Logo"
                width={200}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="font-bold mb-2">Alternative Logo, black, vertical</h3>
            <p className="text-sm text-gray-400 mb-4">
              Alternative logo on transparent background, with black text, displayed vertically.
            </p>
            <Button variant="outline" size="sm" className="w-full flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download file
            </Button>
          </Card>
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSubscribe />
    </main>
  )
}

