"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Script from "next/script"; // Import Script component

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
       {/* Google Ads Conversion Tracking */}
      <Script
        id="google-ads-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('event', 'conversion', {
                'send_to': 'AW-16918294850/KWoeCI6b2asaEMLiooM_',
                'value': 1.0,
                'currency': 'INR'
            });
          `,
        }}
      />
        {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 lg:px-16 py-3 bg-white/30 backdrop-blur-lg shadow-md">
        <img
          src="/Hyundai-logo.png"
          className="h-12"
          alt="Hyundai Logo"
        />
        <a className="text-gray-900 text-lg font-semibold" href="tel:+917733888999">📞 7733888999</a>
      </nav>
      {/* Header Bar */}
      <div className="w-full h-12 "></div>

      {/* Main Content */}
      <div className="flex flex-col items-center mt-12 text-center">
        <CheckCircle className="text-green-600 w-16 h-16" />
        <h1 className="text-2xl font-bold mt-4 text-black">THANK YOU!</h1>
        <p className="text-gray-600 mt-2 max-w-lg">
          Your enquiry has been processed successfully. Our executive will get in touch with you shortly.
        </p>
        <Link href="/" className="text-blue-600 font-medium mt-4 flex items-center">
          <span>← Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
