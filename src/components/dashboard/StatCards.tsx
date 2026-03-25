import React from "react"
import { FiTrendingDown, FiTrendingUp } from "react-icons/fi";

export const StatCards = () => {
    return (
        <React.Fragment>
            <Card
                title="Receita bruta"
                value="$120,054.24 KZ"
                pillText="2.75%"
                trend="up"
                period="01 jan – 31 jul 2025"
            />
            <Card
                title="Pedido médio"
                value="$27.94 KZ"
                pillText="1.01%"
                trend="down"
                period="01 jan – 31 jul 2025"
            />
            <Card
                title="Receita nos últimos 12 meses"
                value="$278,054.24 KZ"
                pillText="60.75%"
                trend="up"
                period="Últimos 365 dias"
            />
        </React.Fragment>
    )
}

interface CardType {
    title: string;
    value: string;
    pillText: string;
    trend: "up" | "down";
    period: string;
}

const Card = ({ title, value, pillText, trend, period }: CardType) => {
    return (
        <div className="col-span-12 lg:col-span-4 p-4 rounded border border-stone-300">
            <div className="flex items-start mb-6 justify-between">
                <div>
                    <h3 className="text-stone-500 mb-2 text-sm">{title}</h3>
                    <p className="text-2xl md:text-3xl font-semibold">{value}</p>
                </div>

                <span
                    className={`text-xs flex items-center gap-1 font-medium px-2 py-1 rounded 
                    ${trend === "up" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {trend === "up" ? <FiTrendingUp /> : <FiTrendingDown />}
                    {pillText}
                </span>
            </div>

            <p className="text-xs text-stone-500">{period}</p>
        </div>
    )
}
