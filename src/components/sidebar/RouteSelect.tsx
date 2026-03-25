import { IconType } from "react-icons";
import { FiDollarSign, FiHome, FiLink, FiPaperclip, FiUsers } from "react-icons/fi";

export const RouteSelect = () => {
    return (
        <div className="space-y-1">
            <Route Icon={FiHome} selected={true} title="Dashboard" />
            <Route Icon={FiUsers} selected={false} title="Equipa" />
            <Route Icon={FiPaperclip} selected={false} title="Facturas" />
            <Route Icon={FiLink} selected={false} title="Integrações" />
            <Route Icon={FiDollarSign} selected={false} title="Finanças" />
        </div>
    )
}

interface RouteType {
    selected: boolean;
    Icon: IconType;
    title: string;
}

const Route = ({ selected, Icon, title }: RouteType) => {
    return (
        <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm 
            transition-[box-shadown,background-color,color] 
            ${selected ? "bg-white text-stone-950 shadow" : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none cursor-pointer"}`}
        >
            <Icon className={selected ? "text-violet-500" : ""} />
            <span>{title}</span>
        </button>
    )
}