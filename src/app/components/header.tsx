import { Menu } from "lucide-react";

export default function AppHeader() {
    return <header className="max-w flex justify-between">
        <h1 className="text-3xl font-bold text-slate-100">Vantage Dashboard</h1>
        <button className="">
            <Menu color="#22d3ee" />
        </button>
    </header>

}