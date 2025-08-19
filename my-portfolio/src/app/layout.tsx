import Link from "next/link";
import { Children } from "react";


export default function RootLayout({children} : {children:React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
          <nav className="mx-auto flex max-w-5xl items-center gap-6 px-4 py-3">
            <Link href="/" className="text-sm font-semibold hover:text-blue-600">
              Home | 
            </Link>
            <Link href="/about" className="text-sm font-semibold hover:text-blue-600">
              About | 
            </Link>
            <Link href="projects" className="text-sm font-semibold hover:text-blue-600">
              Projects
            </Link>
          </nav>
        </header>

        {/* 메인 */}
        <main className="mx-auto max-w-5xl px-4 py-10">{children}</main>

        {/* 푸터 */}
        <footer className="mx-auto max-w-5xl px-4 py-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Shingseong-gyu
        </footer>
      </body>
    </html>
  )
}