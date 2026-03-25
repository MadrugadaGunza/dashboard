'use client';

import { FiEye } from 'react-icons/fi';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

const features = [
    'Visualizações',
    'Cliques',
    'Uploads',
    'Downloads',
    'Compartilhamentos',
    'Comentários',
];

const data = features.map((item) => ({
    subject: item,
    mobile: Math.floor(Math.random() * 80) + 70,
    desktop: Math.floor(Math.random() * 80) + 60,
    fullMark: 150,
}));

const UsegeRadar = () => {
    return (
        <div className='col-span-4 overflow-hidden rounded border border-stone-300'>
            <div className="p-4">
                <h3 className="flex items-center gap-1.5 font-medium">
                    <FiEye /> Usage
                </h3>
            </div>

            <div className="h-64 px-4">
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data} responsive>
                        <PolarGrid />
                        <PolarAngleAxis className='text-xs font-bold' dataKey="subject" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar
                            name='Mobile'
                            dataKey="mobile"
                            stroke="#18181b"
                            fill='#18181b'
                            fillOpacity={0.2}
                        />
                        <Tooltip wrapperClassName='text-sm rounded' labelClassName='text-xs text-stone-500' />
                    </RadarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default UsegeRadar