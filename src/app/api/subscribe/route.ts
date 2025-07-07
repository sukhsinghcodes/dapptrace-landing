import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  // Send to my telegram bot
  const botToken = process.env.TELEGRAM_BOT_TOKEN
  const chatId = process.env.TELEGRAM_CHAT_ID
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`

  // validate request body
  const body = await request.json()
  if (!body.email) {
    return NextResponse.json({ message: 'Email is required' }, { status: 400 })
  }

  // check if valid email by regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 })
  }

  const message = `${body.email}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'Markdown' }),
  })

  if (!response.ok) {
    console.error('Failed to send message', await response.json())
    return NextResponse.json({ message: 'Failed to send message' }, { status: response.status })
  }

  return NextResponse.json({ message: 'Email received' })
}
