import Link from 'next/link'

export default function Home() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>AR Invoice SaaS — Demo</h1>
      <p>Welcome! یہ ایک چھوٹا demo Next.js app ہے۔</p>
      <ul>
        <li><Link href="/customers">Customers</Link></li>
        <li><Link href="/invoices">Invoices</Link></li>
      </ul>
    </main>
  )
}
