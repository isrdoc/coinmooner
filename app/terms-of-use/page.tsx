import Breadcrumb from "@/components/breadcrumb"

export default function TermsOfUsePage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Terms of Use", href: "/terms-of-use" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-6">Terms of Use</h1>

        <div className="bg-card/30 rounded-lg border border-border p-6">
          <div className="prose prose-invert max-w-none">
            <p>Last updated: March 5, 2025</p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the CoinMooner website ("Site"), you agree to comply with and be bound by these
              Terms of Use. If you do not agree to these terms, please do not use our Site.
            </p>

            <h2>2. Description of Service</h2>
            <p>
              CoinMooner provides information about cryptocurrencies, presales, airdrops, and NFT projects. Our platform
              allows users to discover and learn about various crypto projects before they gain mainstream attention.
            </p>

            <h2>3. User Conduct</h2>
            <p>You agree not to use the Site to:</p>
            <ul>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute spam, malware, or other harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Engage in any activity that disrupts or interferes with the proper functioning of the Site</li>
            </ul>

            <h2>4. Content and Intellectual Property</h2>
            <p>
              All content on the Site, including text, graphics, logos, and software, is the property of CoinMooner or
              its content suppliers and is protected by international copyright laws. You may not reproduce, modify,
              distribute, or republish any content from the Site without prior written consent.
            </p>

            <h2>5. Disclaimer of Warranties</h2>
            <p>
              The information provided on the Site is for general informational purposes only. We make no
              representations or warranties of any kind, express or implied, about the completeness, accuracy,
              reliability, suitability, or availability of the information contained on the Site.
            </p>

            <h2>6. Limitation of Liability</h2>
            <p>
              In no event shall CoinMooner be liable for any direct, indirect, incidental, special, or consequential
              damages arising out of or in any way connected with the use of the Site or the information provided on the
              Site.
            </p>

            <h2>7. Investment Disclaimer</h2>
            <p>
              The content on the Site does not constitute investment advice. Cryptocurrency investments are volatile and
              high-risk. Always conduct your own research before making any investment decisions.
            </p>

            <h2>8. Third-Party Links</h2>
            <p>
              The Site may contain links to third-party websites. These links are provided for your convenience only. We
              have no control over the content of these sites and accept no responsibility for them or any loss or
              damage that may arise from your use of them.
            </p>

            <h2>9. Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Your continued use of the Site after any
              changes indicates your acceptance of the modified terms.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of [Jurisdiction],
              without regard to its conflict of law provisions.
            </p>

            <h2>11. Contact Information</h2>
            <p>If you have any questions about these Terms of Use, please contact us at contact@coinmooner.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

