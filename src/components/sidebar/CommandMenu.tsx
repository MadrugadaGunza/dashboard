import { Command } from "cmdk-base"
import React from "react";
import { FiEye, FiLink, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";

interface StatusType {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const CommandMenu = ({ open, setOpen }: StatusType) => {
    const [value, setValue] = React.useState("");

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down);
    }, []);

    return (
        <Command.Dialog
            open={open}
            onOpenChange={setOpen}
            label="Global Command Menu"
            className="fixed inset-0 bg-stone-950/50"
            onClick={() => setOpen(false)}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
            >
                <Command.Input
                    value={value}
                    onValueChange={setValue}
                    placeholder="O que você precisa?"
                    className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
                />
                <Command.List className="px-4 pt-4">
                    <Command.Empty>
                        Nenhum resultado encontrado{" "}
                        <span className="text-violet-500">"{value}"</span>.
                    </Command.Empty>

                    <Command.Group heading="Team" className="text-sm mb-4 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPlus />
                            Convidar membro
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiEye />
                            Consulte o organograma
                        </Command.Item>
                    </Command.Group>
                    <Command.Group heading="Integrations" className="text-sm mb-4 text-stone-400">
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiLink />
                            Serviço de links
                        </Command.Item>
                        <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
                            <FiPhone />
                            Contacte o suporte
                        </Command.Item>
                    </Command.Group>
                    <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-50 hover:bg-stone-700 bg-stone-950 rounded items-center gap-2 mb-4">
                        <FiLogOut />
                        Sair
                    </Command.Item>
                </Command.List>
            </div>
        </Command.Dialog>
    )
}

export default CommandMenu;