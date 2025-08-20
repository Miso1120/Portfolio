import Link from "next/link";
import Navbar from "./components/navbar";


export default function RootLayout({children} : {children:React.ReactNode}) {
  return (
    <html lang="ko">
      <body>
        <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
          <Navbar/>
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