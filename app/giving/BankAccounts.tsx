'use client';

import { useState } from 'react';

const ACCOUNT_NAME = 'Winners Baptist Church';

const accounts = [
  { currency: 'Naira', code: 'NGN', symbol: '₦', bank: 'Providus Bank', number: '1309586910' },
  { currency: 'Naira', code: 'NGN', symbol: '₦', bank: 'First Bank', number: '2003806472' },
  { currency: 'US Dollar', code: 'USD', symbol: '$', bank: 'Providus Bank', number: '1309728774' },
];

// Groups a 10-digit NUBAN as 3-3-4 so it is easy to read aloud and check
const formatNumber = (n: string) => n.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

function CopyButton({ value, label, dark = false }: { value: string; label: string; dark?: boolean }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked (e.g. insecure context); the number stays selectable on screen
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={label}
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        copied ? 'bg-emerald-500 text-white' : dark ? 'bg-white text-ink hover:bg-stone-200' : 'bg-ink text-white hover:bg-stone-800'
      }`}
    >
      {copied ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="h-4 w-4" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
        </svg>
      )}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  );
}

export default function BankAccounts() {
  return (
    <section className="section scroll-mt-20" id="bank-details">
      <div className="container-page">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">Bank transfer</p>
            <h2 className="heading-lg">Give by bank transfer</h2>
            <p className="lead mt-4">
              Send your tithes, offerings, seeds and building fund contributions directly to any of the church accounts below.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-3 md:gap-4">
          {accounts.map((account) => (
            <article
              key={account.number}
              className={`relative flex flex-col overflow-hidden rounded-4xl p-6 md:p-8 ${
                account.code === 'USD' ? 'bg-ink text-white' : 'bg-paper text-ink'
              }`}
            >
              {account.code === 'USD' && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/30 blur-[90px]" />
              )}
              <div className="relative flex items-center justify-between">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${
                    account.code === 'USD' ? 'bg-white/10 text-white' : 'bg-white text-ink shadow-card'
                  }`}
                >
                  <span className="text-sm">{account.symbol}</span>
                  {account.currency} account
                </span>
                <span className={`text-xs font-medium ${account.code === 'USD' ? 'text-white/50' : 'text-stone-400'}`}>{account.code}</span>
              </div>

              <p className={`relative mt-10 text-sm ${account.code === 'USD' ? 'text-white/60' : 'text-stone-500'}`}>{account.bank}</p>
              <p className="relative mt-1 select-all text-3xl font-semibold tracking-[-0.02em] tabular-nums md:text-[2rem]">
                {formatNumber(account.number)}
              </p>

              <div className={`relative mt-8 flex items-end justify-between gap-4 border-t pt-5 ${account.code === 'USD' ? 'border-white/10' : 'border-stone-200'}`}>
                <div>
                  <p className={`text-xs ${account.code === 'USD' ? 'text-white/50' : 'text-stone-400'}`}>Account name</p>
                  <p className="mt-0.5 font-medium">{ACCOUNT_NAME}</p>
                </div>
                <CopyButton value={account.number} label={`Copy ${account.bank} ${account.currency} account number`} dark={account.code === 'USD'} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
