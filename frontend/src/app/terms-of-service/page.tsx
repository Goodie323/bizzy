import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — Bizzy",
  description: "Terms governing your use of the Bizzy WhatsApp commerce platform.",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 pt-10 pb-6 border-b border-slate-200">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">
            Legal
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Last updated: September 2026
          </p>
        </div>

        <div className="px-8 py-8">
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            By interacting with or using <strong className="text-slate-900">Bizzy</strong> via WhatsApp, you agree to be bound by these Terms of Service.
          </p>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              1. Service Description
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Bizzy is an automated WhatsApp-based commerce platform that enables
              merchants to manage product listings, process customer orders, and
              facilitate payment collection seamlessly.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              2. Merchant Obligations
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Merchants using Bizzy agree to maintain current and accurate business
              information, fulfill customer orders promptly, and adhere strictly to
              all applicable local regulations and commerce laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              3. Payments
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Payment transactions are processed through <strong>Paystack</strong>.
              Bizzy facilitates message workflows and payment triggers, but acts
              strictly as an integrated interface and is not a financial
              institution, bank, or money transmitter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              4. Limitation of Liability
            </h2>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
              <p className="text-sm text-slate-700 leading-relaxed">
                Bizzy is provided on an &quot;as is&quot; and &quot;as available&quot; basis. Bizzy is
                not responsible or liable for commercial disputes, non-fulfillment,
                or service interruptions arising between merchants and end
                consumers.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-lg font-semibold text-slate-900 mb-3">
              5. Termination
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to suspend or revoke access to the service at any
              time for non-compliance, fraudulent activity, or violations of these
              terms.
            </p>
          </section>
        </div>

        <div className="px-8 py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-blue-600 transition-colors"
            >
              Privacy Policy
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