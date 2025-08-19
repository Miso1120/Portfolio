import Counter from "../components/Counter"

export default function ProjectPage() {
    return (
    <section>
        <h1>Projects</h1>
        {/* <Counter/> */}
        {/* 카드를 감싸는 섹션 */}
        <section className="grid gap-6 sm:grid-cols-2">
            {/* 카드 테두리 */}
            <div className="roudend-xl ring-1 ring-black/5 shadow p-5 hover:-translate-y-0.5 hover:shadow-lg transition">
                {/* 카드 썸네일 */}
                <img src="/images/프로젝트 랜딩.png" alt="stellarvison" />
                <div>
                    
                </div>
            </div>
        </section>
    </section>
    )
}