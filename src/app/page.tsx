import Image from 'next/image'
import SubscribeForm from './components/subscribe-form'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 p-4">
      <div className="max-w-2xl text-center">
        <Image
          src="/dapptrace-hero.png"
          alt="Wallet-to-blockchain flow graphic"
          width={1348}
          height={461}
          priority
          className="w-full rounded-2xl shadow-xl"
        />
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="/dapptrace-logo-square.png"
            alt="DappTrace logo"
            width={80}
            height={80}
            priority
            className="rounded-2xl shadow-xl"
          />
          <h1 className="text-5xl tracking-tight mb-4 pt-3">DappTrace</h1>
        </div>
        <h2 className="text-4xl tracking-tight">Trace every wallet journey</h2>
        <p className="mt-4 text-xl text-slate-400">
          DappTrace shows you exactly where users abandon a MetaMask prompt, why a signature fails and how your dApp
          behaves after every transaction.
        </p>
        <small className="block mt-6 text-slate-500">Early adopters get 50 % off for life.</small>
        <SubscribeForm />
      </div>
    </main>
  )
}
