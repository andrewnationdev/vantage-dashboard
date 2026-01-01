export interface IStatsCardComponent extends ISummaryCard {}

export interface IFinancialData {
  month: string;
  income: number;
  expense: number;
}

export interface ISummaryCard {
  title: string;
  value: string;
  type: 'income' | 'expense' | 'balance';
  description: string;
}