import { IStatsCardComponent } from "../types/types";

export default function StatsCardComponent(props:IStatsCardComponent){
    return <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2 hover:shadow-md transition-shadow">
        <div>
            <span>{props.title}</span>
        </div>
        <div></div>
    </div>
}