"use client"
import { useState } from "react"

export default function Counter() {
    const [n, setN] = useState(0)
    return (
        <button onClick={() => setN(n + 1)} className="px-3 py-2 rounded bg-gray-900 text-white">
            Count: {n}
        </button>
    )
}