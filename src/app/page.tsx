"use client"
import { useEffect, useState } from "react";
import ChartComponent from "./components/chart";
import AppFooter from "./components/footer";
import AppHeader from "./components/header";
import FinancialCardsRowComponent from "./components/cards-row";
import { TDataApi } from "./types/types";

export default function DashboardPage() {
  const [data, setData] = useState<TDataApi>({
    chartData: [],
    summary: []
  });
  const [year, setYear] = useState<number | string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [statusText, setStatusText] = useState<string>("");
  const [failedFetching, setFailedFetching] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const currentYear = new Date().getFullYear();
      const res = await fetch(`/api/finance`);
      const json = await res.json()

      if (res.status == 200) {
        setLoading(false);
        setFailedFetching(false);
      } else {
        setStatusText("Erro ao obter os dados");
        setFailedFetching(true);
      }

      setData(json);
      setYear(currentYear);
    }

    setStatusText("Carregando dados...")
    fetchData();
  }, [])

  return (
    <main className="min-h-screen bg-gray-800 p-4 md:p-8">
      <div className={`transition-opacity duration-1200 ${!loading ? 'opacity-100' : 'opacity-0'} max-w-7xl mx-auto space-y-8`}>
        <AppHeader actionOnHamburguerMenuClick={()=>{
          window.alert("Adicione uma ação ao clicar no menu")
        }} appTitle={"Vantage"} />
        {!loading && !failedFetching && <FinancialCardsRowComponent data={data?.summary} />}
        {!loading && !failedFetching && <ChartComponent data={data?.chartData} />}
        {loading && <section className="bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-500">
          <h2 className="text-xl text-center text-slate-100 font-semibold mb-6">
            {statusText}</h2>
        </section>}
        <AppFooter year={year} />
      </div>
    </main>
  );
}