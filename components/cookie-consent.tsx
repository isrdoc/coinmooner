"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")
    if (!hasConsented) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card p-4 shadow-lg z-50 border-t border-border">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          We use cookies to improve your experience on our site. By clicking "Accept", you agree to{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            our use of cookies
          </Link>
          .
        </p>
        <div className="flex gap-2">
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors"
          >
            Reject
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-primary hover:bg-primary-light text-white rounded-md transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}

