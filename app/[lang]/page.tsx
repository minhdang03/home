import {FaShoppingCart, FaTools, FaBlog } from 'react-icons/fa'
import {SiNetflix} from 'react-icons/si'
import Link from 'next/link'

const services = {
  en: [
    {
      title: "Netflix Login",
      description: "Get Netflix login codes ",
      url: "https://netflix.minhdanglu.com",
      icon: <SiNetflix className="display-1 text-danger mb-3" />
    },
    {
      title: "Quartz Shop",
      description: "Double terminated quartz crystals, natural stones, and gemstones",
      url: "https://dathachlinh.minhdanglu.com",
      icon: <FaShoppingCart className="display-1 text-primary mb-3" />
    },
    {
      title: "Tools",
      description: "Useful online tools and utilities",
      url: "https://tools.minhdanglu.com",
      icon: <FaTools className="display-1 text-warning mb-3" />
    },
    {
      title: "Blog",
      description: "Latest articles and updates",
      url: "https://blog.minhdanglu.com",
      icon: <FaBlog className="display-1 text-success mb-3" />
    }
  ],
  vi: [
    {
      title: "Đăng Nhập Netflix",
      description: "Nhận mã đăng nhập Netflix",
      url: "https://netflix.minhdanglu.com",
      icon: <SiNetflix className="display-1 text-danger mb-3" />
    },
    {
      title: "Đá Thạch Linh",
      description: "Đá tự nhiên, đá phong thủy, đá thạch anh",
      url: "https://dathachlinh.minhdanglu.com",
      icon: <FaShoppingCart className="display-1 text-primary mb-3" />
    },
    {
      title: "Công Cụ",
      description: "Các công cụ và tiện ích cho Youtube, Facebook, Google, Instagram",
      url: "https://tools.minhdanglu.com",
      icon: <FaTools className="display-1 text-warning mb-3" />
    },
    {
      title: "Blog",
      description: "Bài viết và cập nhật mới nhất",
      url: "https://blog.minhdanglu.com",
      icon: <FaBlog className="display-1 text-success mb-3" />
    }
  ]
}

import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
  params: { lang: string }
}

export function Layout({
  children,
  params: { lang }
}: LayoutProps) {
  return (
    <div className="container" lang={lang}>
      {children}
    </div>
  )
}

export function Page({
  params: { lang }
}: {
  params: { lang: string }
}) {
  return (
    <div className="container py-1">
            <div className="d-flex justify-content-center align-items-center gap-3">
        <Link 
          href={`/${lang === 'en' ? 'vi' : 'en'}`}
          className="btn btn-outline-dark rounded-circle"
        >
          {lang === 'en' ? 'VI' : 'EN'}
        </Link>
      </div>

      <h1 className="text-center py-0">
        {lang === 'en' ? 'minhdanglu.com Services' : 'Dịch Vụ Của minhdanglu.com'}
      </h1>
      
      <div className="row g-4">
        {services[lang as keyof typeof services].map((service, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <a 
              href={service.url}
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card h-100 text-center p-4 shadow-sm hover-card">
                {service.icon}
                <h3 className="h4 mb-3">{service.title}</h3>
                <p className="text-muted">{service.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Page;

export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'vi' }
  ]
}

export const metadata = {
  title: {
    en: 'MinhDangLu Services',
    vi: 'Dịch Vụ Của MinhDangLu'
  },
  description: {
    en: 'Netflix, Tools, Blog, Shop and more services by MinhDangLu',
    vi: 'Netflix, Công Cụ, Blog, Cửa Hàng và nhiều dịch vụ khác của MinhDangLu'
  }
}