"use client"
import { IStatsCardComponent } from "../types/types";
import { BanknoteArrowDown, DollarSign, ArrowUp } from "lucide-react"

export default function StatsCardComponent(props: IStatsCardComponent) {
    function getCardStyles(): string {
        if(props.title.toLowerCase().includes("saldo")){
            return "bg-teal-950/50 border-teal-500/30 hover:border-teal-400 focus:ring-teal-500"
        } else if(props.title.toLowerCase().includes("entradas")){
            return "bg-stone-900/50 border-stone-500/30 hover:border-stone-400 focus:ring-stone-500"
        } else if(props.title.toLowerCase().includes("saídas")){
            return "bg-rose-950/50 border-rose-500/30 hover:border-rose-400 focus:ring-rose-500"
        }
        else return "bg-slate-800 border-slate-700 hover:border-slate-500 focus:ring-slate-400"
    }

    return (
        <div 
            tabIndex={0} 
            className={`
                ${getCardStyles()} 
                p-6 text-slate-100 rounded-xl border shadow-lg
                flex flex-col gap-4 
                transition-all duration-300 ease-in-out 
                hover:scale-[1.03] hover:shadow-2xl
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950
                animate-in fade-in slide-in-from-bottom-2 duration-700
            `}
        >
            <div className="flex justify-between items-start">
                <span className="text-slate-400 font-medium text-sm uppercase tracking-wider">
                    {props.title}
                </span>
                <div className="p-2 bg-slate-800/50 rounded-lg">
                    {props.title.toLowerCase().includes("saldo") && <DollarSign size={20} className="text-teal-400"/>}
                    {props.title.toLowerCase().includes("entradas") && <ArrowUp size={20} className="text-blue-400"/>}
                    {props.title.toLowerCase().includes("saídas") && <BanknoteArrowDown size={20} className="text-rose-400"/>}
                </div>
            </div>
            
            <div className="flex flex-col gap-1">
                <span className="font-bold text-3xl tracking-tight text-white">
                    {props.value}
                </span>
                <span className="text-sm text-slate-400 font-light">
                    {props.description}
                </span>
            </div>
        </div>
    )
}