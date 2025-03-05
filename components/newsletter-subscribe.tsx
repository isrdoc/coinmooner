import Link from "next/link"
export default function NewsletterSubscribe() {
  return (
    <div className="bg-card/30 rounded-lg border border-border p-8 my-12">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>
        <p className="text-gray-300 mb-6">Get the relevant crypto news and promising coins straight to your inbox</p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your e-mail"
            className="flex-1 bg-card/50 border border-border rounded-md px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary"
            required
          />
          <button type="submit" className="btn-primary whitespace-nowrap">
            Subscribe
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          You can always unsubscribe. Check our{" "}
          <Link href="/privacy-policy" className="text-primary hover:text-primary-light">
            Privacy Policy
          </Link>{" "}
          here.
        </p>
      </div>
    </div>
  )
}

