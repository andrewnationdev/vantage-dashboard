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

export type TDataApi = {
  chartData: IFinancialData[] | [],
  summary: ISummaryCard[] | []
}

export interface IChartComponent {
  data: IFinancialData[] | []
}

export interface ICardsRowComponent {
  data: ISummaryCard[] | []
}

export interface IFooter {
  year: string | number;
}

export interface IHeader {
  actionOnHamburguerMenuClick: () => void;
  appTitle: string;
}