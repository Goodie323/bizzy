import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Bizzy",
  description: "Learn how Bizzy collects, uses, and safeguards your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-8 pt-10 pb-6 border-b border-slate-200">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">
            Legal
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Last updated: September 2026
          </p>
        </div>

        <div className="px-8 py-8">
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            Welcome to <strong className="text-slate-900">Bizzy</strong>. This Privacy Policy explains how we collect, use, and safeguard your information when you interact with our WhatsApp commerce platform.
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information you provide directly to us via WhatsApp, including:
            </p>
            <ul className="grid gap-3">
              {[
                "Phone number and business name",
                "Bank account details for settlement",
                "Order history and inventory data",
                "Chat messages required to facilitate transactions",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700"
                >
                  <span className="text-blue-600 font-bold text-lg leading-none">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We use your information strictly to process orders, manage inventory,
              generate digital receipts, settle payments via Paystack, and deliver
              transactional messaging through Meta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              3. Data Sharing
            </h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We do not sell your data. We share necessary transaction details only
              with trusted service partners:
            </p>
            <ul className="grid gap-3">
              {[
                { bold: "Paystack", text: "— for secure payment processing and settlement" },
                { bold: "Meta / WhatsApp", text: "— for automated message delivery" },
              ].map((item) => (
                <li
                  key={item.bold}
                  className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700"
                >
                  <span className="text-blue-600 font-bold text-lg leading-none">
                    •
                  </span>
                  <span>
                    <strong className="text-slate-900">{item.bold}</strong> {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              4. Data Retention & Deletion
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We retain transaction data for up to 6 years to ensure tax and legal
              compliance. You may request account deletion and removal of associated
              personal data at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              5. Security
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We employ industry-standard encryption (TLS 1.3) for all data in
              transit and restrict database access exclusively to authenticated
              microservices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              6. Contact
            </h2>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-900">
                For privacy inquiries or data removal requests, email us directly at{" "}
                <a
                  href="mailto:privacy@bizzydigitalhub.com"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  privacy@bizzydigitalhub.com
                </a>
                .
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex gap-6">
            <Link
              href="/terms-of-service"
              className="hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/data-deletion"
              className="hover:text-blue-600 transition-colors"
            >
              Data Deletion
            </Link>
          </div>
          <div>© 2026 Bizzy Inc. All rights reserved.</div>
        </div>
      </article>
    </main>
  );
}