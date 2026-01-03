import { FINANCIAL_DATA, SUMMARY_CARDS } from "@/constants/data"
import { NextResponse } from "next/server"

export function GET(request: Request) {
    try {
        return NextResponse.json({
            chartData: FINANCIAL_DATA,
            summary: SUMMARY_CARDS
        }, { status: 200 });
    } catch (err) {
        return NextResponse.json(
            { message: "Erro ao trazer dados financeiros", error: String(err) },
            { status: 500 }
        );
    }
}