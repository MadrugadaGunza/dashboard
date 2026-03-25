import { FiArrowUpRight, FiDollarSign, FiMoreHorizontal } from "react-icons/fi"

export const RecentTransactions = () => {
    return (
        <div className="col-span-12 border border-stone-300 p-4 rounded">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiDollarSign /> Transações recentes
                </h3>
                <button className="text-sm text-violet-500 hover:underline cursor-pointer">
                    Ver tudo
                </button>
            </div>

            <table className="w-full table-auto">
                <TableHead />
                <tbody>
                    <TableRow cusId="#48149" sku="Pró 1 mês" date="2 de agosto" price="$9.75" order={1} />
                    <TableRow cusId="#1942s" sku="Pró 3 mês" date="2 de agosto" price="$21.25" order={2} />
                    <TableRow cusId="#4192" sku="Pró 1 Ano" date="1º de agosto" price="$94.75" order={3} />
                    <TableRow cusId="#99481" sku="Pró 1 mês" date="1º de agosto" price="$9.44" order={4} />
                </tbody>
            </table>
        </div>
    )
}

interface TableType {
    cusId: string;
    sku: string;
    date: string;
    price: string;
    order: number;
}

const TableHead = () => {
    return (
        <thead>
            <tr className="text-sm font-normal text-stone-500">
                <th className="text-start p-1.5">ID do Cliente</th>
                <th className="text-start p-1.5">Estoque</th>
                <th className="text-start p-1.5">Data</th>
                <th className="text-start p-1.5">Preço</th>
                <th className="w-8"></th>
            </tr>
        </thead>
    )
}

const TableRow = ({ cusId, sku, date, price, order }: TableType) => {
    return (
        <tr className={order % 2 ? "bg-stone-100" : "text-sm"}>
            <td className="p-1.5">
                <a href="#" className="text-violet-600 underline flex items-center gap-1">
                    {cusId} <FiArrowUpRight />
                </a>
            </td>
            <td className="p-1 5">{sku}</td>
            <td className="p-1 5">{date}</td>
            <td className="p-1 5">{price}</td>
            <td className="w-8">
                <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8 cursor-pointer">
                    <FiMoreHorizontal />
                </button>
            </td>
        </tr>
    )
}
