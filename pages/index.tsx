import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Feed from '@/components/Feed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      <Header />
      <Feed />
      
    </div>
  )
}
