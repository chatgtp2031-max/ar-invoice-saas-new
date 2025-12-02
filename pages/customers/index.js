import Link from 'next/link'

const sampleCustomers = [
  { id: 1, name: 'Ali Khan', email: 'ali@example.com' },
  { id: 2, name: 'Sara Ahmed', email: 'sara@example.com' }
]

export default function Customers() {
  return (
    <main style={{ padding: 24, fontFamily: 'Arial, sans-serif' }}>
      <h1>Customers</h1>
      <p>یہ customers کا سادہ list ہے:</p>
      <ul>
        {sampleCustomers.map(c => (
          <li key={c.id}>
            <strong>{c.name}</strong> — {c.email}
          </li>
        ))}
      </ul>
      <p><Link href="/">Back to home</Link></p>
    </main>
  )
}
