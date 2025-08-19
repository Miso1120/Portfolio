"use client"; // "use client"는 이 컴포넌트가 클라이언트 측에서 렌더링되어야 함을 나타냅니다. -> 클라이언트 컴포넌트임을 명시
import Link from "next/link";
import { usePathname } from "next/navigation"; // usePathname 훅을 사용하여 현재 경로를 가져옵니다.

const tabs = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" }
]

export default function Navbar() {
    const pathname = usePathname(); // 현재 경로를 가져옵니다.
    // 현재 경로에 따라 활성화된 탭을 결정합니다.
    return (
        // 네비게이션 바를 구성하는 JSX 코드입니다.
        <nav className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-3">
            {tabs.map((tab)=>{
                const active = pathname === tab.href; // 현재 경로와 탭의 href를 비교하여 활성화 여부를 결정합니다.
                return (
                    <Link
                    key={tab.href}
                    href={tab.href}
                    className={["text-sm font-semibold rounded-xl px-3 py-2 transition",
                                 active ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"
                                ].join(" ")}
                                >
                        {tab.name}
                    </Link>
                )
            })}
        </nav> 
    )
}

