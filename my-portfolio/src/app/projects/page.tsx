import Counter from "../components/Counter"
import Image from "next/image"
export default function ProjectPage() {
    return (
    <section>
        <h1>Projects</h1>
        {/* <Counter/> */}
        {/* 카드를 감싸는 섹션 */}
        <section className="grid gap-6 sm:grid-cols-2">
            {/* 카드 테두리 */}
            <div className="roudend-xl ring-1 ring-black/5 shadow p-5 hover:-translate-y-0.5 hover:shadow-lg transition">
                <div className="relative aspect-video">
                    <Image
                        src="/images/프로젝트 랜딩.png"
                        alt="StellarVision"
                        width={800}
                        height={450}
                        className="object-cover"
                        />
                </div>

                <div className="p-5">
                    <h3 className="text-lg font-bold">
                        StellarVision
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">2025.07.07 Vue - Tailwind - OpenVidu</p>
                    <p className="text-sm text-gray-700 mt-3">
                        실시간 천체 관측 스트리밍 플랫폼. OpenVidu 기반 화상통신 + Tailwind UI</p>
                </div>
                          <div className="flex gap-2 mt-4">
            <a className="px-3 py-2 rounded-lg bg-gray-900 text-white text-sm">Demo</a>
            <a className="px-3 py-2 rounded-lg bg-gray-100 text-sm">Repo</a>
          </div>
            </div>
        </section>
    </section>
    )
}