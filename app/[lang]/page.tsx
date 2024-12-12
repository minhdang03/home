export default function Page({
  params: { lang }
}: {
  params: { lang: string }
}) {
  return (
    <div className="container py-5">
      <h1 className="text-center">
        {lang === 'en' ? 'Welcome' : 'Xin chào'}
      </h1>
    </div>
  )
}

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'vi' }
  ]
}