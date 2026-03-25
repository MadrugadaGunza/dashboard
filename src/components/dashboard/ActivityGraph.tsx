'use client';

import { FiUser } from "react-icons/fi"
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
];

const data = meses.map((mes) => ({
    name: mes,
    computador: Math.floor(Math.random() * 100) + 500,
    telefone: Math.floor(Math.random() * 100) + 400,
}));

const ActivityGraph = () => {
    return (
        <div className="col-span-12 lg:col-span-8 overflow-hidden rounded border border-stone-300">
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiUser /> Tráfego por dispositivo
                </h3>
            </div>

            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={data} margin={{ top: 0, right: 0, left: -10, bottom: 10 }}>
                        <CartesianGrid stroke="#e4e4e7" />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            className="text-xs font-bold"
                            padding={{ right: 4 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            className="text-xs font-bold"
                        />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="telefone" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="computador" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default ActivityGraph
