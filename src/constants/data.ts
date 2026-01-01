import { IFinancialData, ISummaryCard } from "@/app/types/types";

// src/constants/data.ts
export const FINANCIAL_DATA: IFinancialData[] = [
  { month: 'Jan', income: 4500, expense: 3200 },
  { month: 'Fev', income: 5200, expense: 3800 },
  { month: 'Mar', income: 4800, expense: 4100 },
  { month: 'Abr', income: 6100, expense: 2900 },
  { month: 'Mai', income: 5900, expense: 4800 },
  { month: 'Jun', income: 7200, expense: 3500 },
];

export const SUMMARY_CARDS: ISummaryCard[] = [
  { 
    title: "Saldo Atual", 
    value: "R$ 12.450,00", 
    type: "balance",
    description: "Disponível para investimento"
  },
  { 
    title: "Entradas do Mês", 
    value: "R$ 7.200,00", 
    type: "income",
    description: "+15% em relação ao mês anterior"
  },
  { 
    title: "Saídas do Mês", 
    value: "R$ 3.500,00", 
    type: "expense",
    description: "Dentro do orçamento planejado"
  },
];