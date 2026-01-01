"use client"
import { useEffect, useState } from "react";
import { IStatsCardComponent } from "../types/types";
import { BanknoteArrowDown, DollarSign, ArrowUp } from "lucide-react"

export default function StatsCardComponent(props: IStatsCardComponent) {
    return <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow">
        <div className="flex gap-4 justify-between">
            <span className="font-bold">{props.title}</span>
            {props.title.includes("saldo") || props.title.includes("Saldo")
                && <DollarSign color="green"/>}
            {props.title.includes("entradas") || props.title.includes("Entradas")
                && <ArrowUp color="grey"/>}
            {props.title.includes("saídas") || props.title.includes("Saídas")
                && <BanknoteArrowDown color="red"/>}
        </div>
        <div className="flex gap-4 flex-col">
            <span className="font-bold text-2xl">{props.value}</span>
            <span>{props.description}</span>
        </div>
    </div>
}