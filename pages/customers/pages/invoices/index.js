import Link from 'next/link'

const sampleInvoices = [
  { id: 101, customer: 'Ali Khan', total: 1200 },
  { id: 102, customer: 'Sara Ahmed', total: 850 }
]

export default function Invoices() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Invoices</h1>
      <ul>
        {sampleInvoices.map(inv => (
          <li key={inv.id}>
            Invoice #{inv.id} — {inv.customer} — Rs {inv.total}
          </li>
        ))}
      </ul>
      <p><Link href="/">Back to home</Link></p>
    </main>
  )
}
