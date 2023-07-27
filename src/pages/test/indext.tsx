import { Table } from '@/components/Table'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${inter.className}`}>
        <Table></Table>
    </div>
  )
}
