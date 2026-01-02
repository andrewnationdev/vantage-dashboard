"use client"
import { useEffect, useState } from "react";
import { IStatsCardComponent } from "../types/types";
import { BanknoteArrowDown, DollarSign, ArrowUp } from "lucide-react"

export default function StatsCardComponent(props: IStatsCardComponent) {
    function getCardBackground():string {
        if(props.title.includes("saldo") || props.title.includes("Saldo")){
            return "bg-teal-900"
        } else if(props.title.includes("entradas") || props.title.includes("Entradas")){
            return "bg-stone-900"
        } else if(props.title.includes("saídas") || props.title.includes("Saídas")){
            return "bg-rose-900"
        }
        else return "bg-slate-700"
    }

    return <div className={`${getCardBackground()} p-6 text-slate-100 rounded-xl border border-slate-500 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow`}>
        <div className="flex gap-4 justify-between">
            <span className="font-bold">{props.title}</span>
            {props.title.includes("saldo") || props.title.includes("Saldo")
                && <DollarSign color="#2dd4bf"/>}
            {props.title.includes("entradas") || props.title.includes("Entradas")
                && <ArrowUp color="#93c5fd"/>}
            {props.title.includes("saídas") || props.title.includes("Saídas")
                && <BanknoteArrowDown color="#e11d48"/>}
        </div>
        <div className="flex gap-4 flex-col">
            <span className="font-bold text-2xl">{props.value}</span>
            <span>{props.description}</span>
        </div>
    </div>
}