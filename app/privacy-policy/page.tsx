import Breadcrumb from "@/components/breadcrumb"

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy-policy" },
        ]}
      />

      <div className="mt-6">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <div className="bg-card/30 rounded-lg border border-border p-6">
          <div className="prose prose-invert max-w-none">
            <p>Last updated: March 5, 2025</p>

            <h2>1. Introduction</h2>
            <p>
              At CoinMooner, we respect your privacy and are committed to protecting your personal data. This Privacy
              Policy explains how we collect, use, and safeguard your information when you visit our website.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>
                <strong>Personal Information:</strong> Email address, name, and contact details when you subscribe to
                our newsletter or contact us.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our website, including IP address, browser
                type, pages visited, and time spent on the site.
              </li>
              <li>
                <strong>Cookies:</strong> Small files stored on your device to enhance your browsing experience.
              </li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide and maintain our services</li>
              <li>Notify you about changes to our services</li>
              <li>Allow you to participate in interactive features</li>
              <li>Provide customer support</li>
              <li>Gather analysis to improve our services</li>
              <li>Monitor the usage of our services</li>
              <li>Detect, prevent, and address technical issues</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from unauthorized access,
              alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              We may employ third-party companies and individuals to facilitate our service, provide the service on our
              behalf, perform service-related tasks, or assist us in analyzing how our service is used. These third
              parties have access to your personal information only to perform these tasks on our behalf and are
              obligated not to disclose or use it for any other purpose.
            </p>

            <h2>6. Analytics</h2>
            <p>
              We use analytics services like Google Analytics to track and analyze the usage of our website. These
              services may collect information about your device, internet connection, and browsing behavior.
            </p>

            <h2>7. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or
              to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use
              some portions of our service.
            </p>

            <h2>8. Your Data Protection Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectify inaccurate personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
              <li>The right to withdraw consent at any time</li>
            </ul>

            <h2>9. Children's Privacy</h2>
            <p>
              Our service is not intended for use by children under the age of 18. We do not knowingly collect
              personally identifiable information from children under 18. If we discover that a child under 18 has
              provided us with personal information, we will delete it immediately.
            </p>

            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date at the top of this policy.
            </p>

            <h2>11. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at privacy@coinmooner.com.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

