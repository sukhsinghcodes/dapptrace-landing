'use client'

import { useCallback, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SubscribeForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      if (!email) return
      setStatus('loading')
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        })
        setStatus(res.ok ? 'success' : 'error')
        if (res.ok) setEmail('')
      } catch (_) {
        setStatus('error')
      }
    },
    [email],
  )

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-8 flex gap-2 w-full justify-center flex-wrap">
        <Input
          type="email"
          placeholder="you@company.dev"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-64"
          required
        />
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Joining…' : 'Join the beta wait‑list →'}
        </Button>
      </form>
      {status === 'success' && <p className="mt-2 text-green-400">Success! Check your email for confirmation.</p>}
      {status === 'error' && <p className="mt-2 text-red-400">Oops – something went wrong. Try again.</p>}
    </>
  )
}
