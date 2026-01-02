"use client"
import { FINANCIAL_DATA, SUMMARY_CARDS } from "@/constants/data";
import StatsCardComponent from "./components/card";
import { useEffect, useState } from "react";
import { ISummaryCard } from "./types/types";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';
import { Menu } from "lucide-react"

type TData = ISummaryCard[] | []

export default function DashboardPage() {
  const [data, setData] = useState<TData>([]);
  const [year, setYear] = useState<number | string>("");

  useEffect(() => {
    const fetchData = () => {
      const res = SUMMARY_CARDS
      const currentYear = new Date().getFullYear();

      setYear(currentYear);
      setData(res as TData);
    }

    fetchData()
  }, [])

  return (
    <main className="min-h-screen bg-gray-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">

        <header className="max-w flex justify-between">
          <h1 className="text-3xl font-bold text-slate-100">Vantage Dashboard</h1>
          <button className="">
            <Menu color="#22d3ee"/>
          </button>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.length > 0 &&
            data.map((item, index) => <StatsCardComponent
              title={item.title}
              value={item.value}
              type={"balance"}
              description={item.description} />)}
        </section>

        <section className="bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-500">
          <h2 className="text-xl text-slate-100 font-semibold mb-6">Fluxo de Caixa</h2>
          <div className="w-full flex items-center justify-center text-slate-100">
            <LineChart style={{ width: '100%', color: 'white', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} responsive data={FINANCIAL_DATA}>
              <CartesianGrid stroke="#eee" strokeDasharray="9 9" />
              <XAxis dataKey="month" />
              <YAxis width="auto" />
              <Line type="monotone" dataKey="income" stroke="#00a9c7ff" />
              <Line type="monotone" dataKey="expense" stroke="#bb29f5ff" />
            </LineChart>
          </div>
        </section>

        <footer className="flex justify-center">
          <p className="text-slate-100">© {year} - Todos os Direitos Reservados. Desenvolvido por 
            <a href="https://andrewnationdev.vercel.app/" className="text-sky-300 hover:text-sky-100 ml-2">AndrewNation</a>
          </p>
        </footer>

      </div>
    </main>
  );
}