"use client"
import { Menu } from "lucide-react";

export default function AppHeader() {
    return <header className="max-w flex justify-between">
        <h1 className="text-3xl font-bold text-[#22d3ee]">Vantage</h1>
        <button className="border-[2px] p-[2px] border-[#22d3ee] rounded-sm transition duration-150 ease-in-out hover:scale-125">
            <Menu color="#22d3ee" />
        </button>
    </header>

}