import { CartesianGrid, XAxis, YAxis, Line, LineChart } from "recharts";
import { IChartComponent } from "../types/types";

export default function ChartComponent(props: IChartComponent) {
    return <section className="bg-slate-700 p-6 rounded-xl shadow-sm border border-slate-500">
        <h2 className="text-xl text-slate-100 font-semibold mb-6">Fluxo de Caixa</h2>
        <div className="w-full flex items-center justify-center text-white">
            <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 800, margin: 'auto' }} responsive data={props.data}>
                <CartesianGrid stroke="#eee" strokeDasharray="9 9" />
                <XAxis dataKey="month" tick={{fill:"white"}}/>
                <YAxis width="auto" tick={{fill:"white"}}/>
                <Line type="monotone" dataKey="income" stroke="#00a9c7ff" />
                <Line type="monotone" dataKey="expense" stroke="#bb29f5ff" />
            </LineChart>
        </div>
    </section>
}