import React from 'react'
import { FiCalendar } from 'react-icons/fi'

const TopBar = () => {
    const today = new Date()

    const formattedDate = today.toLocaleDateString('pt', {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

    return (
        <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
            <div className="flex items-center justify-between p-0.5">
                <div>
                    <span className='text-sm font-bold block'>🚀 Bom dia, Madrugada!</span>
                    <span className='text-xs block text-stone-500'>{formattedDate}</span>
                </div>

                <button className='flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded cursor-pointer'>
                    <FiCalendar />
                    <span>Últimos 6 meses</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar
