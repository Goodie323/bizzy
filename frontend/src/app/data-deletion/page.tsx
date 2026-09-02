import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion — Bizzy",
  description: "Request deletion of your personal data from Bizzy.",
};

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="px-8 pt-10 pb-6 border-b border-slate-200">
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600 mb-4">
            Legal
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Data Deletion
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-medium">
            Last updated: September 2026
          </p>
        </div>

        <div className="px-8 py-8">
          <p className="text-base text-slate-600 leading-relaxed mb-8">
            You reserve full rights to request the removal of your personal data and
            account records from <strong className="text-slate-900">Bizzy</strong> at
            any time.
          </p>

          <div className="grid gap-4 mb-8">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Option 1: Request via WhatsApp
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Send a WhatsApp message to our official support line with the text{" "}
                <strong className="text-slate-900">&quot;Delete My Data&quot;</strong> along
                with your registered phone number. We will process your request
                within 30 days and confirm deletion directly on WhatsApp.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-5">
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Option 2: Request via Email
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Email our privacy team at{" "}
                <a
                  href="mailto:privacy@bizzydigitalhub.com"
                  className="font-semibold text-blue-600 hover:underline"
                >
                  privacy@bizzydigitalhub.com
                </a>{" "}
                detailing your registered phone number and business name.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-900 leading-relaxed">
              <strong>Note on Regulatory Retention:</strong> Historical transaction
              logs necessary for auditing, legal compliance, and tax purposes may
              be retained in fully anonymized form for up to 6 years.
            </p>
          </div>
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
              href="/terms-of-service"
              className="hover:text-blue-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
          <div>© 2026 Bizzy Inc. All rights reserved.</div>
        </div>
      </article>
    </main>
  );
}