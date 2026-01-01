"use client"
import { FINANCIAL_DATA, SUMMARY_CARDS } from "@/constants/data";
import StatsCardComponent from "./components/card";
import { useEffect, useState } from "react";
import { ISummaryCard } from "./types/types";

type TData = ISummaryCard[] | []

export default function DashboardPage() {
  const [data, setData] = useState<TData>([]);

  useEffect(() => {
    const fetchData = () => {
      const res = SUMMARY_CARDS

      setData(res as TData);
    }

    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <header>
          <h1 className="text-3xl font-bold text-slate-900">FinTrace</h1>
          <p className="text-slate-500">Bem-vindo ao seu controle financeiro analítico.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.length > 0 &&
            data.map((item, index) => <StatsCardComponent
              title={item.title} value={""} type={"balance"} description={""} />)}
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h2 className="text-xl font-semibold mb-6">Fluxo de Caixa</h2>
          <div className="h-[300px] w-full flex items-center justify-center text-slate-400">
            [O Gráfico será renderizado aqui]
          </div>
        </section>

      </div>
    </main>
  );
}