"use client"
import { Menu } from "lucide-react";
import { IHeader } from "../types/types";

export default function AppHeader(props:IHeader) {
    return <header className="max-w flex justify-between">
        <h1 className="text-3xl font-bold text-[#22d3ee]">{props.appTitle}</h1>
        <button 
            className="cursor-pointer border-[2px] p-[2px] border-[#22d3ee] rounded-sm transition duration-150 ease-in-out hover:scale-125"
            onClick={() => props.actionOnHamburguerMenuClick()}
        >
            <Menu color="#22d3ee" />
        </button>
    </header>

}