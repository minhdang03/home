import { redirect } from 'next/navigation'

export const metadata = {
  title: 'MinhDangLu Services',
  description: 'Netflix, Tools, Blog, Shop and more services by MinhDangLu',
}

export default function Page() {
  redirect('/en')
}